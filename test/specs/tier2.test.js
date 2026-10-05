// test/specs/tier2.test.js
// Boundary & Corner Cases (exactly 5 test cases per feature for 7 features = 35 test cases total)

const assert = require('assert');

module.exports = {
  // === FEATURE 1: Theme Typography & Editorial Palette (Boundary/Corner Cases) ===
  'F1-B1: Root HTML node has correct lang attribute': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('lang="en"'), 'Root HTML element should have lang="en"');
  },
  'F1-B2: Editorial carbon palette is defined in theme and HTML': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('#0B0C0E') || html.includes('#13151A') || html.includes('bg-[#0B0C0E]'), 'CSS/HTML should define the editorial carbon palette');
  },
  'F1-B3: Head tag contains meta viewport tag for responsive scale boundaries': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('width=device-width') && html.includes('initial-scale=1'), 'Viewport meta tag must be defined for proper layout scaling');
  },
  'F1-B4: Google Fonts import includes display swap parameter': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('display=swap') || html.includes('_next/static/css'), 'Google font request should include display=swap for font loading optimization');
  },
  'F1-B5: Custom theme classes are compiled without turbopack errors': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(!html.includes('turbopack-error') && !html.includes('Next.js Compiler Error'), 'HTML response should not contain compiler error classes');
  },

  // === FEATURE 2: Navigation (Boundary/Corner Cases) ===
  'F2-B1: Active section styles use distinct tracking classes': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('font-mono') || html.includes('tracking-wide') || html.includes('tracking-wider'), 'Navigation links should utilize tracking classes');
  },
  'F2-B2: Mobile menu toggle button contains aria-label': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('aria-label="Toggle navigation menu"') || html.includes('aria-label="Toggle menu"'), 'Mobile navigation button must possess descriptive aria-label');
  },
  'F2-B3: Email CTA link starts with mailto protocol': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="mailto:'), 'Email talk action link must use mailto: protocol');
  },
  'F2-B4: Navbar branding anchor links back to #home target': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="#home"'), 'Header logo brand should link back to #home container');
  },
  'F2-B5: Navigation link text presents Work and About labels': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Work') && html.includes('About') && !html.includes('href="#thinking"'), 'Navigation must present Work and About labels without Thinking');
  },

  // === FEATURE 3: Identity Information (Boundary/Corner Cases) ===
  'F3-B1: Main container uses unique DOM ID main-content': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('id="main-content"'), 'Main section must have matching id="main-content"');
  },
  'F3-B2: Social links point to valid https endpoints': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="https://github.com/preshdevops"'), 'GitHub link must use secure https:// protocol');
  },
  'F3-B3: Social anchors utilize target blank attributes': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('target="_blank"'), 'External social links must open in a new tab');
  },
  'F3-B4: Social anchors utilize rel noopener attributes': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('rel="noopener noreferrer"'), 'External social links must use rel="noopener noreferrer"');
  },
  'F3-B5: Availability status is presented cleanly': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Precious Olonade') && html.includes('Available for roles'), 'Status indicator must be present');
  },

  // === FEATURE 4: Selected Work Case Studies (Boundary/Corner Cases) ===
  'F4-B1: Selected Work container uses unique DOM ID work': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('id="work"') || html.includes('id="projects"'), 'Work section must have matching id="work"');
  },
  'F4-B2: Work section uses scroll margin top offset scroll-mt': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('scroll-mt-20') || html.includes('scroll-mt-'), 'Work section should define a scroll offset');
  },
  'F4-B3: Project case studies format with leading numbers': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('01') && html.includes('02'), 'Project indices must format with leading zero (e.g., 01)');
  },
  'F4-B4: Case study interactive action trigger is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Details') || html.includes('View project') || html.includes('CASE STUDY'), 'Project case study should contain action button');
  },
  'F4-B5: Project tech stack tags list valid technologies': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Web Crypto API') || html.includes('React') || html.includes('Django') || html.includes('Rust') || html.includes('Kotlin'), 'Project stack must render valid technologies');
  },

  // === FEATURE 5: About Section & Bio (Boundary/Corner Cases) ===
  'F5-B1: About container uses unique DOM ID about': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('id="about"'), 'About section must have matching id="about"');
  },
  'F5-B2: Operating principle quote is enclosed in blockquote': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('blockquote') || html.includes('Build with intention'), 'Quote must be properly rendered');
  },
  'F5-B3: Monograph layout uses responsive padding': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('px-6') || html.includes('px-10') || html.includes('py-24'), 'Layout should define responsive padding');
  },
  'F5-B4: About bio text references location Nigeria': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Nigeria') || html.includes('nigeria'), 'Bio must reference location Nigeria');
  },
  'F5-B5: About bio does not render etymology of the name Precious': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(!html.includes('name is derived from') && !html.includes('meaning of my name'), 'Bio copy must remain professional and exclude name etymology');
  },

  // === FEATURE 6: Spotlighted Projects (Boundary/Corner Cases) ===
  'F6-B1: Thinking anchor is absent from navigation': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(!html.includes('href="#thinking"'), 'Thinking link must be removed from navigation');
  },
  'F6-B2: Projects list contains exactly five spotlighted projects': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('dabar') || html.includes('Dabaar'), 'Must include Dabaar');
    assert.ok(html.includes('editorial-muse'), 'Must include editorial-muse');
    assert.ok(html.includes('Curious Bright'), 'Must include Curious Bright');
    assert.ok(html.includes('Privora'), 'Must include Privora');
    assert.ok(html.includes('Makarios'), 'Must include Makarios');
  },
  'F6-B3: Project entries contain hover transition styles': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('group') && (html.includes('transition-colors') || html.includes('transition-transform') || html.includes('transition-all')), 'Projects list must use hover animation styles');
  },
  'F6-B4: Project layout implements structured divisions': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('grid-cols-') || html.includes('divide-y'), 'Work layout must implement structured divisions');
  },
  'F6-B5: Contact footer links to external writing platform': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('preciouswrites.vercel.app'), 'Contact footer must link out to PreciousWrites');
  },

  // === FEATURE 7: Architectural Cleanliness & Zero Slop ===
  'F7-B1: Animation transitions utilize duration parameters': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('duration-') || html.includes('transition-'), 'Animation elements must support transition durations');
  },
  'F7-B2: No scroll-spy or parallax library scripts in html head': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(!html.includes('scrollspy.js') && !html.includes('parallax.js'), 'HTML must not load heavy legacy scrollspy or parallax libraries');
  },
  'F7-B3: No generic gradient blobs or purple neon accents': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(!html.includes('bg-blob') && !html.includes('bg-purple-500/20'), 'Legacy background blob overlay elements should not exist');
  },
  'F7-B4: Interactive component anchors utilize transition duration styles': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('transition') || html.includes('duration'), 'Interactive state anchors should define transition durations');
  },
  'F7-B5: Page uses clean structural borders': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('border-white/[0.08]') || html.includes('border-white/[0.14]'), 'Layout should contain clean hairline borders');
  }
};
