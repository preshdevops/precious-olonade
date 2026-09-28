// test/specs/tier1.test.js
// Feature Coverage (exactly 5 test cases per feature for 7 features = 35 test cases total)

const assert = require('assert');

module.exports = {
  // === FEATURE 1: Theme Typography & Editorial Palette ===
  'F1-1: Root page loads successfully': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    assert.strictEqual(res.status, 200, 'Page status should be 200');
  },
  'F1-2: Google Fonts link includes editorial display serif and sans': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Spectral') || html.includes('Newsreader'), 'Should import Spectral or editorial serif font');
    assert.ok(html.includes('Epilogue') || html.includes('Plus+Jakarta+Sans'), 'Should import modern sans-serif font');
  },
  'F1-3: Heading serif typography CSS classes exist': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('font-serif'), 'Page should use font-serif class for editorial display');
  },
  'F1-4: Monospace typography CSS classes exist': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('font-mono'), 'Page should use font-mono class for system specifications');
  },
  'F1-5: Palette uses deep carbon and neutral borders': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('#0B0C0E') || html.includes('border-white/[0.08]') || html.includes('#13151A'), 'Should define deep carbon and subtle borders');
  },

  // === FEATURE 2: Navigation ===
  'F2-1: Navbar brand displays full product builder name': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Precious Oluwasegun Olonade'), 'Header should display full name');
  },
  'F2-2: Navbar contains navigation anchor to home': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('href="#home"'), 'Header should have a link to #home');
  },
  'F2-3: Header renders brand identity details': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Product Builder') && html.includes('Computer Scientist'), 'Header should state Product Builder & Computer Scientist');
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
    assert.ok(html.includes('Precious Oluwasegun Olonade'), 'Hero should display Precious Oluwasegun Olonade');
  },
  'F3-2: Hero location information is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Nigeria') || html.includes('Osun'), 'Hero or header should state base in Osun, Nigeria');
  },
  'F3-3: Hero displays availability status indicator': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Available') || html.includes('Status: Available'), 'Hero should display availability status indicator');
  },
  'F3-4: Computer Scientist building products copy is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Computer Scientist building products that solve real-world problems'), 'Hero should state core builder identity');
  },
  'F3-5: Core philosophy statement is present in Hero': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('I don’t just write code') || html.includes('I don&#39;t just write code') || html.includes('what should be built'), 'Hero should emphasize thinking about what should be built');
  },

  // === FEATURE 4: Selected Work Case Studies ===
  'F4-1: Selected Work section heading is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Selected Work') || html.includes('Selected work'), 'Section heading should be Selected Work');
  },
  'F4-2: Projects list renders the Privora project': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Privora'), 'Should list Privora project');
  },
  'F4-3: Projects list renders Makarios product': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Makarios'), 'Should list Makarios community platform');
  },
  'F4-4: Projects list renders Dabar product': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Dabar'), 'Should list Dabar linguistic workspace');
  },
  'F4-5: Flagship project has flagship thesis designation': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('FLAGSHIP') || html.includes('Thesis'), 'Privora project should have FLAGSHIP thesis designation');
  },

  // === FEATURE 5: About Section & Bio ===
  'F5-1: Bio section story header is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('About &amp; Background') || html.includes('About & Background'), 'About section should exist');
  },
  'F5-2: Bio text details university experience': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Osun State University'), 'Bio should mention Osun State University');
  },
  'F5-3: Intention quote is displayed in about section': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Build with intention. Ship with purpose.'), 'Bio should render operating principle quote');
  },
  'F5-4: Technical focus areas heading exists': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Core Focus Areas') || html.includes('Focus Areas'), 'About should contain Core Focus Areas heading');
  },
  'F5-5: Mentions TSDI or OSPCN community work': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('TSDI') || html.includes('OSPCN'), 'About should reference TSDI or OSPCN');
  },

  // === FEATURE 6: Product Thinking Field Notes ===
  'F6-1: Product thinking section header is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Product Thinking'), 'Product Thinking section should exist');
  },
  'F6-2: Field notes render Privacy over AI essay': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Why I Built a Privacy App Instead of Another AI Tool'), 'Field notes should render Privacy App essay');
  },
  'F6-3: Field notes render Mobile complexity essay': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('What Building Mobile Apps Taught Me About Complexity'), 'Field notes should render Mobile Apps essay');
  },
  'F6-4: Field notes render Starting late essay': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Starting Software Development Later Than Most People'), 'Field notes should render Starting Late essay');
  },
  'F6-5: Field notes render Community technology essay': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Why Community Technology Interests Me'), 'Field notes should render Community Tech essay');
  },

  // === FEATURE 7: Now Section & Architectural Restraint ===
  'F7-1: Now section component is present': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('Now // Active Explorations') || html.includes('id="now"'), 'Page should render Now section');
  },
  'F7-2: Obsolete Comic and Spider-Man classes are absent': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(!html.includes('poster-card') && !html.includes('spider-sense'), 'Obsolete comic panel and poster styling should be absent');
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
  'F7-5: Layout uses subtle hairline borders': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('border-white/[0.08]') || html.includes('border-white/[0.06]'), 'Subtle hairline borders should be used');
  }
};
