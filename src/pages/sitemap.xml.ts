import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { caseStudies } from '../data/case-studies';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('Astro site URL must be configured to generate the sitemap.');
  }

  const notes = await getCollection('notes');
  const urls = [
    site.href,
    ...notes.map(({ id }) => new URL(`/notes/${id}/`, site).href),
    ...caseStudies.map(({ slug }) => new URL(`/work/${slug}/`, site).href),
  ];

  const entries = urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
