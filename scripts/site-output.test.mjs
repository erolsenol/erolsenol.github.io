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
});

test('note routes, robots, and sitemap are emitted', async () => {
  const routes = [
    'notes/provider-neutral-email-apis/index.html',
    'notes/package-boundaries-in-a-frontend-starter/index.html',
  ];
  for (const route of routes) assert.ok((await read(route)).includes('<article'));
  assert.match(await read('robots.txt'), /Sitemap: https:\/\/erolsenol\.github\.io\/sitemap\.xml/);
  assert.match(await read('sitemap.xml'), /https:\/\/erolsenol\.github\.io\//);
});
