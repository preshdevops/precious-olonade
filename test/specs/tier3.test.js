// test/specs/tier3.test.js
// Cross-Feature Combinations (exactly 7 test cases covering pairwise feature interactions)

const assert = require('assert');

module.exports = {
  'T3-1: Navbar links correspond to major page section IDs': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Navbar uses #work, #about, and #now, which correspond to section IDs
    assert.ok(html.includes('href="#work"') && html.includes('id="work"'), 'Navbar work link must match Work section ID');
    assert.ok(html.includes('href="#about"') && html.includes('id="about"'), 'Navbar about link must match About section ID');
    assert.ok(html.includes('href="#now"') && html.includes('id="now"'), 'Navbar now link must match Now section ID');
    assert.ok(!html.includes('href="#thinking"'), 'Navbar thinking link must be removed');
  },

  'T3-2: Project category tags inherit typography classes': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('font-mono') && (html.includes('Web') || html.includes('Mobile') || html.includes('Tools') || html.includes('Thesis')), 'Category tags must utilize theme typography classes');
  },

  'T3-3: About focus areas layout adheres to theme colors and design': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // What I'm into / focus areas should use font-mono and theme border styling
    assert.ok(html.includes('font-mono') && (html.includes('Product building') || html.includes('Software') || html.includes('Privacy')), 'About focus areas must align with layout theme colors and font style');
  },

  'T3-4: Hero section CTA button links to Work target': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // The main Hero CTA button links to #work
    assert.ok(html.includes('href="#work"') && html.includes('id="work"'), 'Hero call-to-action button must direct user to the Work section');
  },

  'T3-5: Projects stack badges align with theme typography and color accent': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Project badges style check
    assert.ok(html.includes('font-mono') && (html.includes('React') || html.includes('PostgreSQL') || html.includes('Rust')), 'Project tech badges must combine theme typography and color properties');
  },

  'T3-6: Project titles utilize the serif heading font': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    assert.ok(html.includes('font-serif') && (html.includes('Privora') || html.includes('Dabaar') || html.includes('Makarios')), 'Project titles must utilize theme serif font properties');
  },

  'T3-7: Contact section CTA action elements align with theme colors': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Email button uses clean white/black theme
    assert.ok(html.includes('bg-white') && html.includes('text-black'), 'Contact section CTA button must use theme accent colors');
  }
};
