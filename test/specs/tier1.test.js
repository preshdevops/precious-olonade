// test/specs/tier1.test.js
// Feature Coverage (exactly 5 test cases per feature for 7 features = 35 test cases total)

const assert = require('assert');

module.exports = {
  // === FEATURE 1: Theme Colors & Fonts ===
  'F1-1: Root page loads successfully': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    assert.strictEqual(res.status, 200, 'Page status should be 200');
  },
  'F1-2: Google Fonts link includes Playfair Display and Outfit': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Playfair+Display') || html.includes('Playfair Display'), 'Should import Playfair Display font');
    assert.ok(html.includes('Outfit') || html.includes('outfit'), 'Should import Outfit font');
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
  'F1-5: Theme variables or classes reference accent colors': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('#2563EB') || html.includes('#CCFF00') || html.includes('text-[#2563EB]'), 'Should contain accent color references');
  },

  // === FEATURE 2: Navigation ===
  'F2-1: Navbar brand logo displays initials PO': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('PO'), 'Header should contain logo initials "PO"');
  },
  'F2-2: Navbar contains navigation anchor to home': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="#home"'), 'Header should have a link to #home');
  },
  'F2-3: Header renders brand identity details': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('PRECIOUS OLONADE') || html.includes('FULL-STACK'), 'Header should render brand identity details');
  },
  'F2-4: Header contains a call-to-action button or mailto link': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('mailto:segunolonade03@gmail.com'), 'Header should contain email link');
  },
  'F2-5: Header wrapper uses header element': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('<header'), 'Header should use <header> element');
  },

  // === FEATURE 3: Hero & Identity Information ===
  'F3-1: Hero identity name is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('PRECIOUS') && html.includes('OLONADE'), 'Header should display Precious Olonade');
  },
  'F3-2: Hero location information is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('NIGERIA') || html.includes('Nigeria'), 'Hero should state base is Nigeria');
  },
  'F3-3: Hero displays availability status indicator': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('OPEN TO WORK') || html.includes('poster-stamp'), 'Hero should display status indicator');
  },
  'F3-4: Final year CS student copy is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('CS student') || html.includes('Osun State University'), 'Hero or bio should reference CS student');
  },
  'F3-[#2563EB]': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('React') || html.includes('Django'), 'Should reference core technologies');
  },

  // === FEATURE 4: Poster Wall Projects ===
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
  'F4-3: Projects list renders secondary work poster cards': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Feelms') && html.includes('Editorial Muse'), 'Should list Feelms and Editorial Muse projects');
  },
  'F4-4: Projects list renders remaining work poster cards': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('CineVault') && html.includes('Currency Converter'), 'Should list CineVault and Currency Converter');
  },
  'F4-5: Flagship project has flagship tag': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('FLAGSHIP'), 'Privora project should have FLAGSHIP tag');
  },

  // === FEATURE 5: About Section & Bio ===
  'F5-1: Bio section story header is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('The story so far.'), 'About section should contain story header');
  },
  'F5-2: Bio text details university experience': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Osun State University'), 'Bio should mention Osun State University');
  },
  'F5-3: Intention quote is displayed in poster bio section': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Build with intention. Ship with purpose.'), 'Poster bio should render design pull quote');
  },
  'F5-4: Technical stack heading exists': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Stack & Tools') || html.includes('Stack &amp; Tools'), 'About file should contain Stack & Tools heading');
  },
  'F5-5: Technical tools are listed in About file': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('PostgreSQL') || html.includes('Git') || html.includes('Figma'), 'About file should list skills');
  },

  // === FEATURE 6: Journal Feed ===
  'F6-1: Journal section header is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('From the journal.'), 'Journal section should exist');
  },
  'F6-2: Journal feed renders first post title': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('God First'), 'Journal feed should render God First post title');
  },
  'F6-3: Journal feed renders second post title': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('The Cunha and Mbeumo Era'), 'Journal feed should render second post title');
  },
  'F6-4: Blog category tags are displayed for posts': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Faith') || html.includes('Football'), 'Blog posts should render categories');
  },
  'F6-5: Blog reading time indicators are present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('read') || html.includes('Read'), 'Blog posts should render reading time');
  },

  // === FEATURE 7: Marquee & Kinetic Layout ===
  'F7-1: Marquee ticker component is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('animate-marquee') || html.includes('BUILD WITH INTENTION'), 'Page should render marquee ticker');
  },
  'F7-2: Obsolete CursorGlow JSX is absent': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
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
    assert.ok(html.includes('transition') || html.includes('duration'), 'CSS transitions should be declared');
  },
  'F7-5: Layout borders are used in poster card structure': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('poster-card') || html.includes('border-b') || html.includes('border-'), 'Borders should exist between poster elements');
  }
};


