import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');

test('home page includes portfolio sections, contact links, and metadata', async () => {
  const html = await read('index.html');
  for (const text of ['Erol Senol', 'Selected work', 'Notes', 'About', 'Get in touch', 'mailto:erolsnl@gmail.com', 'linkedin.com/in/erol-senol']) {
    assert.ok(html.includes(text), `missing expected home page content: ${text}`);
  }
  assert.ok(html.includes('<title>Erol Senol — Frontend Engineer</title>'));
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:image" content="https:\/\/erolsenol\.github\.io\/social-card\.svg"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  for (const visual of ['mailer', 'workspace', 'catalog', 'image']) {
    assert.ok(html.includes(`data-visual="${visual}"`), `missing project visual: ${visual}`);
  }
  assert.ok(html.includes('image-craft-service'));
  assert.ok(html.includes('/work/image-craft-service/'));
  assert.ok(html.includes('<time datetime="2026-10-04">Oct 4, 2026</time>'));
  assert.match(html, /Thoughtful<br\s*\/?>(?:\s|&nbsp;)*by <em>design\.<\/em>/);
});

test('note routes, robots, and sitemap are emitted', async () => {
  const routes = [
    'notes/provider-neutral-email-apis/index.html',
    'notes/package-boundaries-in-a-frontend-starter/index.html',
    'notes/image-processing-boundaries/index.html',
    'work/typedmailer/index.html',
    'work/frontend-production-starter/index.html',
    'work/image-craft-service/index.html',
  ];
  for (const route of routes) assert.ok((await read(route)).includes('<article'));
  assert.match(await read('robots.txt'), /Sitemap: https:\/\/erolsenol\.github\.io\/sitemap\.xml/);
  const sitemap = await read('sitemap.xml');
  assert.match(sitemap, /https:\/\/erolsenol\.github\.io\//);
  assert.match(sitemap, /https:\/\/erolsenol\.github\.io\/work\/image-craft-service\//);
});
