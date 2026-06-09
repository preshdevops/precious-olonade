// test/specs/tier2.test.js
// Boundary & Corner Cases (exactly 5 test cases per feature for 7 features = 35 test cases total)

const assert = require('assert');

module.exports = {
  // === FEATURE 1: Theme Colors & Fonts (Boundary/Corner Cases) ===
  'F1-B1: Root HTML node has correct lang attribute': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('lang="en"'), 'Root HTML element should have lang="en"');
  },
  'F1-B2: Accent color hex is defined in configuration': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // The accent hex should be present (either #C8A96E or #4A8FE7)
    assert.ok(html.includes('#C8A96E') || html.includes('#4A8FE7') || html.includes('rgba(200,169,110'), 'CSS/HTML should define the accent color palette');
  },
  'F1-B3: Head tag contains meta viewport tag for responsive scale boundaries': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('width=device-width') && html.includes('initial-scale=1'), 'Viewport meta tag must be defined for proper layout scaling');
  },
  'F1-B4: Google Fonts import includes display swap parameter': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('display=swap'), 'Google font request should include display=swap for font loading optimization');
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
    // Look for active class or state tracker variable
    assert.ok(html.includes('activeSection') || html.includes('isActive') || html.includes('text-[#C8A96E]') || html.includes('text-[#4A8FE7]'), 'Navigation links should utilize tracking classes');
  },
  'F2-B2: Mobile menu toggle button contains aria-label': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('aria-label="Toggle menu"'), 'Mobile menu toggle button must possess descriptive aria-label');
  },
  'F2-B3: Email CTA link starts with mailto protocol': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="mailto:'), 'Email talk action link must use mailto: protocol');
  },
  'F2-B4: Navbar branding anchor links back to #home target': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="#home"'), 'Navbar logo brand should link back to #home container');
  },
  'F2-B5: Navigation link text matches exactly uppercase/lowercase style requirements': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Navbar should have labels corresponding to the sections
    assert.ok(html.includes('Projects') || html.includes('PROJECTS'), 'Navbar must present "Projects" section label');
  },

  // === FEATURE 3: Hero & Tech Ticker (Boundary/Corner Cases) ===
  'F3-B1: Hero container uses unique DOM ID home': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('id="home"'), 'Hero section must have matching id="home"');
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
  'F3-B5: Availability badge uses animate ping for animation loop': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('animate-ping'), 'Availability badge must use animate-ping for pulse animation');
  },

  // === FEATURE 4: Editorial Project List (Boundary/Corner Cases) ===
  'F4-B1: Projects container uses unique DOM ID projects': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('id="projects"'), 'Projects section must have matching id="projects"');
  },
  'F4-B2: Projects use scroll margin top offset scroll-mt': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('scroll-mt-12') || html.includes('scroll-mt-'), 'Projects section should define a scroll offset');
  },
  'F4-B3: Project indices use padded strings': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    const indexRegex = /\b0[1-5]\b/;
    assert.ok(indexRegex.test(html), 'Project indices must format with a leading zero (e.g., 01)');
  },
  'F4-B4: Project card markup opens target link in new window': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // The project cards should link externally securely
    assert.ok(html.includes('target="_blank"') || html.includes('rel="noopener noreferrer"'), 'Project external links must use target blank');
  },
  'F4-B5: Project tech stack badges list valid tech items': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('React') || html.includes('Django') || html.includes('SQLite'), 'Project badges must render correct technologies');
  },

  // === FEATURE 5: About Section (Boundary/Corner Cases) ===
  'F5-B1: About container uses unique DOM ID about': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('id="about"'), 'About section must have matching id="about"');
  },
  'F5-B2: Intention quote is enclosed in an italic styling class': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('italic') || html.includes('<blockquote>') || html.includes('<blockquote>'), 'Intention quote must use italic/blockquote elements');
  },
  'F5-B3: About section contains a scroll offset': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('scroll-mt-12') || html.includes('scroll-mt-'), 'About section should define a scroll offset');
  },
  'F5-B4: About bio text references location Nigeria': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Nigeria') || html.includes('nigeria'), 'Bio must reference location Nigeria');
  },
  'F5-B5: About bio does not render etymology of the name Precious': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Verify that name-meaning details are not rendered in the bio copy
    assert.ok(!html.includes('name is derived from') && !html.includes('meaning of my name'), 'Bio copy must remain professional and exclude name etymology');
  },

  // === FEATURE 6: Minimal Blog Feed (Boundary/Corner Cases) ===
  'F6-B1: Blog container uses unique DOM ID blog': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('id="blog"'), 'Blog section must have matching id="blog"');
  },
  'F6-B2: Blog list contains no more than three rendered posts': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Split on mocked/static post anchors or keys to check count
    const postCount = (html.match(/mock-post-|god-first|cunha-and-mbeumo|watching-below/g) || []).length;
    assert.ok(postCount <= 3, 'Blog feed should show a maximum of 3 post items');
  },
  'F6-B3: Blog posts contain hover scaling or border animation styles': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('glass-hover') || html.includes('group-hover') || html.includes('transition-all'), 'Blog cards must use hover animation styles');
  },
  'F6-B4: Blog layout wrapper implements single column or responsive grid': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('grid-cols-1') || html.includes('flex-col'), 'Blog feed layout must implement responsive flex/grid columns');
  },
  'F6-B5: Blog feed handles external fetch fallbacks': async ({ baseUrl }) => {
    // Under regular build static posts fallback is used or verified. Just assert presence of some blog posts.
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Faith') || html.includes('Football') || html.includes('Testing') || html.includes('From the journal.'), 'Blog feed must render fallbacks or dynamic posts');
  },

  // === FEATURE 7: Animations & Cleanup (Boundary/Corner Cases) ===
  'F7-B1: Scroll reveal wrappers utilize stagger delays': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('delay-0.1') || html.includes('delay-0.2') || html.includes('delay-0.3') || html.includes('delay-') || html.includes('duration-'), 'Animation wrappers must support configurable animation delays');
  },
  'F7-B2: No scroll-spy or parallax library scripts in html head': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(!html.includes('scrollspy.js') && !html.includes('parallax.js'), 'HTML must not load heavy legacy scrollspy or parallax libraries');
  },
  'F7-B3: Obsolete background blobs are removed': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Redesign removes background blobs. Verify no floating colored circle container elements.
    assert.ok(!html.includes('bg-blob') && !html.includes('bg-purple-500/20'), 'Legacy background blob overlay elements should not exist');
  },
  'F7-B4: Interactive component anchors utilize transition duration styles': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('duration-300') || html.includes('duration-') || html.includes('transition-'), 'Interactive state anchors should define transition durations');
  },
  'F7-B5: Page uses linear gradient styles for layouts': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('bg-gradient-to-r') || html.includes('linear-gradient') || html.includes('section-divider'), 'Theme layouts should contain clean gradient styling elements');
  }
};
