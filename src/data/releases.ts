export interface SourceRelease {
  readonly repository: string;
  readonly version: string;
  readonly summary: string;
}

export const sourceReleases = [
  {"repository": "deploy-witness", "version": "0.5.1", "summary": "Reject malformed UTF-8 deployment evidence"},
  {"repository": "frontend-production-starter", "version": "0.16.1", "summary": "Dispose HTTP request resources and preserve caller headers"},
  {"repository": "image-craft-service", "version": "1.2.1", "summary": "Validate cache expiration and recover corrupt disk entries"},
  {"repository": "market-minimum-price-search-extension", "version": "0.1.0", "summary": "Fix safe product rendering and decimal price parsing"},
  {"repository": "monaco-language-client", "version": "0.2.0", "summary": "Persist SQL drafts and load Monaco locally"},
  {"repository": "movie-website-project", "version": "2.1.0", "summary": "Fix locale-independent movie search and reset filters"},
  {"repository": "node-express-movie-api", "version": "2.1.0", "summary": "Standardize JSON errors and modernize container builds"},
  {"repository": "nodejs-file-server", "version": "1.6.1", "summary": "Isolate concurrent local uploads and test source files once"},
  {"repository": "ogame-bot-extension", "version": "0.1.0", "summary": "Validate extension messages and remove broad permissions"},
  {"repository": "puppeteer-fetch-movie", "version": "1.1.0", "summary": "Replace broken scraper entrypoint with a bounded typed runner"},
  {"repository": "python", "version": "0.1.0", "summary": "Fix OpenCV matching coordinates and validate images"},
  {"repository": "react-to-do-app", "version": "1.1.0", "summary": "Recover task storage failures without losing editing"},
  {"repository": "typedmailer", "version": "2.1.1", "summary": "Validate email header boundaries and patch dependencies"},
  {"repository": "vue-jsonplaceholder", "version": "1.1.0", "summary": "Validate sessions and preserve unrelated browser storage"},
  {"repository": "vue-prisma-product-app", "version": "0.1.1", "summary": "Preserve product and category images during updates"},
] as const satisfies readonly SourceRelease[];
