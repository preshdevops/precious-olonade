# E2E Testing Infrastructure

This document details the architecture, methodology, features checklist, and structure of the End-to-End (E2E) testing framework designed for the Developer Portfolio.

## Architecture & Design

The E2E testing framework is designed as a lightweight, zero-dependency, opaque-box automation system written in pure Node.js. 

### Core Components

1. **Test Runner (`test/runner.js`)**
   - Spawns the Next.js production server or development server as a child process.
   - Injectively loads a preloader module via Node.js `--import` options.
   - Polls the active port until the server is ready (returns HTTP 200).
   - Executes 4 tiers of test suites sequentially.
   - Cleans up child processes (killing process groups) to avoid port conflicts and exits with a proper status code (0 on success, 1 on failure).

2. **Mock Preloader (`test/mock-fetch.js`)**
   - Intercepts calls to the global `fetch` API during Next.js server-side operations and client hydration boundaries.
   - Mocks the Spotify API token and player endpoints.
   - Mocks the external blog feed endpoint at `https://preciouswrites.vercel.app/api/posts`.
   - Prevents external dependencies and network queries during validation.

3. **Test Suites (`test/specs/*`)**
   - Custom test suites divided into 4 tiers of verification.
   - Each spec exports an object containing named async test functions receiving the `baseUrl` parameter.

## Directory Structure

```
/
├── test/
│   ├── runner.js          # Main test runner script
│   ├── mock-fetch.js      # Global fetch mocker
│   └── specs/             # Test spec files
│       ├── tier1.test.js  # Feature Coverage (35 cases)
│       ├── tier2.test.js  # Boundary & Corner Cases (35 cases)
│       ├── tier3.test.js  # Cross-Feature Combinations (7 cases)
│       └── tier4.test.js  # Real-World Scenarios (5 cases)
```

## Feature Inventory & Test Coverage

The testing framework covers 7 major features of the portfolio website:

### F1: Theme Colors & Fonts
- Document loading success and structure checks.
- CSS styling assertions for heading, body, and monospace font families.
- Theme accent color presence checks in CSS compiled classes.
- Verification of display-swap and viewport responsiveness meta-tags.

### F2: Navigation
- Brand initials logo rendering.
- Section scroll mapping targets validation.
- Mailto email link validation.
- Layout wrappers alignment check.
- Responsive mobile menu trigger properties.

### F3: Hero & Tech Ticker
- Tagline validation.
- Base location validation.
- Availability status indicators verification.
- Tech stack ticker listing coverage.
- Secure external social anchors validation.

### F4: Editorial Project List
- Selected work heading verification.
- Feature card layout mapping assertions.
- Secondary project details checks.
- Sequential project indices numbering checks.
- Hover transition animations configuration.

### F5: About Section
- Biography story heading validation.
- Final-year CS student and location copy confirmation.
- Intention quotation styling check.
- Skills tools index check.
- Exclusivity of personal bio content (no etymology attributes).

### F6: Minimal Blog Feed
- Feed container title assertions.
- Mocked post titles and reading times integration.
- Post category metadata rendering.
- Bounded card count to exactly 3 items.
- Dynamic error boundary/fallback checks.

### F7: Animations & Cleanup
- Scroll reveal wrappers delays stagger check.
- Absence of intrusive cursor glow JSX elements.
- CSS transitions and animations duration.
- Linear gradients layout styling dividers.
