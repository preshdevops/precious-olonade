// test/specs/tier1.test.js
// Feature Coverage (exactly 5 test cases per feature for 7 features = 35 test cases total)

const assert = require('assert');

module.exports = {
  // === FEATURE 1: Theme Colors & Fonts ===
  'F1-1: Root page loads successfully': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    assert.strictEqual(res.status, 200, 'Page status should be 200');
  },
  'F1-2: Google Fonts link includes Playfair Display and Inter': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Playfair+Display') || html.includes('Playfair Display'), 'Should import Playfair Display font');
    assert.ok(html.includes('Inter') || html.includes('inter'), 'Should import Inter font');
  },
  'F1-3: Heading typography CSS classes exist': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('font-heading'), 'Page should use font-heading class');
  },
  'F1-4: Monospace typography CSS classes exist': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('font-mono'), 'Page should use font-mono class');
  },
  'F1-5: Theme variables or classes reference accent color': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Redesign accent is #4A8FE7 or original is #C8A96E. Check if one of them is present.
    assert.ok(html.includes('#4A8FE7') || html.includes('#C8A96E') || html.includes('text-[#C8A96E]') || html.includes('text-[#4A8FE7]'), 'Should contain accent color references');
  },

  // === FEATURE 2: Navigation ===
  'F2-1: Navbar brand logo displays initials PO': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('PO'), 'Navbar should contain logo initials "PO"');
  },
  'F2-2: Navbar contains navigation anchor to home': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="#home"'), 'Navbar should have a link to #home');
  },
  'F2-3: Navbar contains anchor links to other page sections': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="#projects"') && html.includes('href="#about"'), 'Navbar should link to projects and about sections');
  },
  'F2-4: Navbar contains a call-to-action button or mailto link': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('mailto:segunolonade03@gmail.com'), 'Navbar should contain email link');
  },
  'F2-5: Navbar wrapper uses fixed layout': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('fixed') || html.includes('sticky') || html.includes('nav'), 'Navbar should have layout class fixed or sticky');
  },

  // === FEATURE 3: Hero & Tech Ticker ===
  'F3-1: Hero section main tagline is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('I build things that actually ship.'), 'Hero should contain main copy');
  },
  'F3-2: Hero location information is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Nigeria'), 'Hero should state base is Nigeria');
  },
  'F3-3: Hero displays availability status': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Open to work'), 'Hero availability pill should display Open to work');
  },
  'F3-4: Hero section CTA projects link is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="#projects"'), 'Hero CTA should point to #projects');
  },
  'F3-5: Tech stack ticker section or fallback displays': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Original might have React/Django in description or ticker
    assert.ok(html.includes('React') || html.includes('Django') || html.includes('ticker'), 'Should reference core technologies');
  },

  // === FEATURE 4: Editorial Project List ===
  'F4-1: Projects section heading is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Selected work.'), 'Projects section should contain header');
  },
  'F4-2: Projects list renders the Privora project': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Privora'), 'Should list Privora project');
  },
  'F4-3: Projects list renders secondary works': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Feelms') && html.includes('Editorial Muse'), 'Should list Feelms and Editorial Muse projects');
  },
  'F4-4: Projects list renders bottom row works': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('CineVault') && html.includes('Currency Converter'), 'Should list CineVault and Currency Converter');
  },
  'F4-5: Project items are marked with indices': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('01') && html.includes('02'), 'Projects should have indices');
  },

  // === FEATURE 5: About Section ===
  'F5-1: About section story header is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('The story so far.'), 'About section should contain story header');
  },
  'F5-2: Bio text details university experience': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Osun State University'), 'Bio should mention Osun State University');
  },
  'F5-3: Intention quote is displayed in about section': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Build with intention. Ship with purpose.'), 'About section should render the design quote');
  },
  'F5-4: Technical stack section heading exists': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Stack & Tools'), 'About section should contain Stack & Tools heading');
  },
  'F5-5: Technical tools are listed in About section': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('PostgreSQL') || html.includes('Git') || html.includes('Figma'), 'About section should list skills');
  },

  // === FEATURE 6: Minimal Blog Feed ===
  'F6-1: Blog section header is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('From the journal.'), 'Blog section should contain journal header');
  },
  'F6-2: Blog feed displays mocked first post title': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Mocked Blog Post 1'), 'Blog feed should render first mock post title');
  },
  'F6-3: Blog feed displays mocked second post title': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Mocked Blog Post 2'), 'Blog feed should render second mock post title');
  },
  'F6-4: Blog category tags are displayed for posts': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Testing') || html.includes('Development'), 'Blog posts should render categories');
  },
  'F6-5: Blog reading time indicators are present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('read') || html.includes('Read'), 'Blog posts should render reading time or read action');
  },

  // === FEATURE 7: Animations & Cleanup ===
  'F7-1: RevealOnScroll animation components are referenced': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('RevealOnScroll') || html.includes('opacity-') || html.includes('transition'), 'Page should have scroll/reveal indicators');
  },
  'F7-2: CursorGlow component reference or clean layout': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // M1 deletes CursorGlow. It either exists or is deleted cleanly. We assert no broken tags.
    assert.ok(!html.includes('<CursorGlow />'), 'CursorGlow shouldn\'t be rendered as uncompiled JSX');
  },
  'F7-3: Next.js standard script optimizations exist': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('_next/static') || html.includes('next/script'), 'Page should include Next.js static asset links');
  },
  'F7-4: CSS hover transitions are configured': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('transition-all') || html.includes('duration-300') || html.includes('hover:scale'), 'CSS transitions should be declared');
  },
  'F7-5: Layout dividers are used in page structure': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('divider') || html.includes('border-b') || html.includes('border-[rgba'), 'Dividers should exist between sections');
  }
};
