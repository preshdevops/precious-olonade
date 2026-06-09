// test/runner.js
// Main E2E test runner that starts Next.js, polls for readiness, runs sequential tests, and tears down the server.

const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;
const MAX_WAIT_MS = 30000; // 30s
const WAIT_INTERVAL_MS = 500;

let serverProcess = null;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Check if server is running and returning 200
async function isServerReady() {
  return new Promise((resolve) => {
    const req = http.get(BASE_URL, (res) => {
      resolve(res.statusCode === 200);
    });
    
    req.on('error', () => {
      resolve(false);
    });
    
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

function cleanup() {
  if (serverProcess) {
    console.log('Shutting down Next.js server...');
    if (process.platform === 'win32') {
      try {
        spawn('taskkill', ['/pid', serverProcess.pid, '/f', '/t']);
      } catch (e) {
        console.error('Failed to kill server process on Windows:', e);
      }
    } else {
      try {
        // Kill the process group if spawned detached
        if (serverProcess.pid) {
          process.kill(-serverProcess.pid, 'SIGTERM');
        }
      } catch (e) {
        try {
          serverProcess.kill('SIGTERM');
        } catch (err) {
          // ignore
        }
      }
    }
    serverProcess = null;
  }
}

async function runTests(testFiles) {
  let passed = 0;
  let failed = 0;
  
  console.log('\n======================================');
  console.log('      STARTING E2E TEST RUNNER');
  console.log('======================================');
  
  for (const file of testFiles) {
    const filePath = path.resolve(file);
    if (!fs.existsSync(filePath)) {
      console.error(`Test file not found: ${file}`);
      failed++;
      continue;
    }
    
    console.log(`\nRunning Test Suite: ${path.basename(file)}`);
    
    try {
      // Clear cache to allow re-importing if necessary
      delete require.cache[filePath];
      const tests = require(filePath);
      
      for (const [testName, testFn] of Object.entries(tests)) {
        try {
          process.stdout.write(`  ✓ ${testName} ... `);
          await testFn({ baseUrl: BASE_URL });
          console.log('PASSED');
          passed++;
        } catch (err) {
          console.log('FAILED');
          console.error(`    Error in test "${testName}":`, err.message);
          if (err.stack) {
            console.error(err.stack.split('\n').slice(0, 3).join('\n'));
          }
          failed++;
        }
      }
    } catch (err) {
      console.error(`Failed to load or run test file ${file}:`, err);
      failed++;
    }
  }
  
  console.log('\n======================================');
  console.log('           E2E TEST SUMMARY');
  console.log('======================================');
  console.log(`  Total Passed: ${passed}`);
  console.log(`  Total Failed: ${failed}`);
  console.log(`  Total Run:    ${passed + failed}`);
  console.log('======================================\n');
  
  return failed === 0;
}

async function main() {
  try {
    const mockFilePath = path.join(__dirname, 'mock-fetch.js');
    console.log(`Mock Preloader script path: ${mockFilePath}`);
    
    // Check if build exists, if not warn
    const buildPath = path.join(__dirname, '..', '.next');
    const runDev = process.argv.includes('--dev');
    
    if (!runDev && !fs.existsSync(buildPath)) {
      console.warn('WARNING: .next build directory not found. Starting server may fail. Running build first is recommended.');
    }
    
    console.log(`Starting Next.js server in ${runDev ? 'development' : 'production'} mode...`);
    
    // Inject the mock-fetch preloader script using NODE_OPTIONS="--import file://..."
    // This intercepts fetch calls in child process Node runtime.
    const nodeOptions = `--import file://${mockFilePath}`;
    
    const command = 'npx';
    const args = runDev 
      ? ['next', 'dev', '-p', PORT.toString()] 
      : ['next', 'start', '-p', PORT.toString()];
    
    serverProcess = spawn(command, args, {
      stdio: 'inherit',
      env: {
        ...process.env,
        PORT: PORT.toString(),
        NODE_OPTIONS: nodeOptions,
        SPOTIFY_CLIENT_ID: 'dummy_spotify_id',
        SPOTIFY_CLIENT_SECRET: 'dummy_spotify_secret',
        SPOTIFY_REFRESH_TOKEN: 'dummy_spotify_token',
        MOCK_SPOTIFY_STATUS: 'playing'
      },
      shell: true,
      detached: process.platform !== 'win32'
    });
    
    // Wait for server to be ready
    console.log(`Polling ${BASE_URL} for server readiness (max ${MAX_WAIT_MS / 1000}s)...`);
    let elapsed = 0;
    let ready = false;
    while (elapsed < MAX_WAIT_MS) {
      ready = await isServerReady();
      if (ready) break;
      await sleep(WAIT_INTERVAL_MS);
      elapsed += WAIT_INTERVAL_MS;
    }
    
    if (!ready) {
      throw new Error(`Server failed to start on port ${PORT} within ${MAX_WAIT_MS}ms`);
    }
    
    console.log(`Server is ready at ${BASE_URL}. Starting test execution.`);
    
    // Tiers to execute sequentially
    const testDir = path.join(__dirname, 'specs');
    const testFiles = [
      path.join(testDir, 'tier1.test.js'),
      path.join(testDir, 'tier2.test.js'),
      path.join(testDir, 'tier3.test.js'),
      path.join(testDir, 'tier4.test.js')
    ];
    
    const success = await runTests(testFiles);
    
    cleanup();
    process.exit(success ? 0 : 1);
    
  } catch (err) {
    console.error('Test runner execution failed:', err);
    cleanup();
    process.exit(1);
  }
}

// Ensure cleanup on unexpected runner termination
process.on('SIGINT', () => {
  console.log('\nRunner interrupted by SIGINT.');
  cleanup();
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('\nRunner terminated by SIGTERM.');
  cleanup();
  process.exit(1);
});

main();
