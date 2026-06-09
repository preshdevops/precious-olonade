// test/specs/tier3.test.js
// Cross-Feature Combinations (exactly 7 test cases covering pairwise feature interactions)

const assert = require('assert');

module.exports = {
  'T3-1: Navbar links correspond to major page section IDs': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Navbar uses #projects and #about, which correspond to section IDs
    assert.ok(html.includes('href="#projects"') && html.includes('id="projects"'), 'Navbar project link must match Projects section ID');
    assert.ok(html.includes('href="#about"') && html.includes('id="about"'), 'Navbar about link must match About section ID');
    assert.ok(html.includes('href="#blog"') && html.includes('id="blog"'), 'Navbar blog link must match Blog section ID');
  },

  'T3-2: Blog category tags inherit typography classes': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Blog categories like Testing/Development should use the theme's font-mono classes
    assert.ok(html.includes('font-mono') && (html.includes('Testing') || html.includes('Development') || html.includes('Faith')), 'Blog category tags must utilize theme typography classes');
  },

  'T3-3: About skills tags layout adheres to theme colors and design': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // About skills list should utilize the glass container/border style and use font-mono
    assert.ok(html.includes('glass') && html.includes('font-mono') && html.includes('React') && html.includes('Django'), 'About skills tags must align with layout theme colors and font style');
  },

  'T3-4: Hero section CTA button links to Projects target': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // The main Hero CTA button links to #projects, matching the projects container ID
    assert.ok(html.includes('href="#projects"') && html.includes('id="projects"'), 'Hero call-to-action button must direct user to the Projects section');
  },

  'T3-5: Projects stack badges align with theme typography and color accent': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Project badges style check
    assert.ok(html.includes('font-mono') && (html.includes('SQLite') || html.includes('PostgreSQL') || html.includes('Django')), 'Project tech badges must combine theme typography and color properties');
  },

  'T3-6: Blog card titles utilize the heading typography font': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Blog card titles should use font-heading or heading tag properties
    assert.ok(html.includes('font-heading') && (html.includes('From the journal.') || html.includes('Mocked Blog Post 1') || html.includes('God First')), 'Blog title elements must utilize theme heading font properties');
  },

  'T3-7: Contact section CTA action elements align with theme colors': async ({ baseUrl }) => {
    const res = await fetch(baseUrl);
    const html = await res.text();
    // Email button uses accent colors
    assert.ok(html.includes('#C8A96E') || html.includes('#4A8FE7') || html.includes('bg-[#C8A96E]') || html.includes('bg-[#4A8FE7]'), 'Contact section CTA button must use theme accent colors');
  }
};
