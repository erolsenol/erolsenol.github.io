export interface CaseStudy {
  readonly slug: string;
  readonly title: string;
  readonly project: string;
  readonly description: string;
  readonly publishedAt: string;
  readonly technologies: readonly string[];
  readonly challenge: string;
  readonly approach: readonly string[];
  readonly evidence: readonly string[];
  readonly repositoryUrl: `https://github.com/${string}`;
}

export const caseStudies = [
  {
    slug: 'typedmailer',
    title: 'One typed contract for seven email providers',
    project: 'TypedMailer',
    description: 'A server-side TypeScript library that keeps provider-specific email behavior behind a small, replaceable adapter boundary.',
    publishedAt: '2026-10-04',
    technologies: ['TypeScript', 'Node.js', 'Provider adapters'],
    challenge: 'Transactional email code can become coupled to one provider SDK. Changing providers then spreads provider-specific request and response shapes through application features.',
    approach: [
      'Keep one typed send API in front of adapters for Resend, Brevo, Postmark, SendGrid, Mailgun, Amazon SES, and SMTP.',
      'Load provider SDKs as optional peers so an application installs only the adapter it selects.',
      'Keep templates, queues, retries, persistence, and business rules in the host application.',
      'Expose inbound webhook verification and normalization through a separate entry point, without taking ownership of routing or event processing.',
    ],
    evidence: [
      'The same createMailer/send contract covers all seven documented providers.',
      'Provider contract docs and integration smoke workflows make adapter expectations and their coverage inspectable.',
      'The package is published as typedmailer for trusted server-side Node.js runtimes.',
    ],
    repositoryUrl: 'https://github.com/erolsenol/typedmailer',
  },
  {
    slug: 'frontend-production-starter',
    title: 'A frontend foundation with explicit package boundaries',
    project: 'Frontend Production Starter',
    description: 'A Next.js and TypeScript workspace that gives product teams a small starting example and a richer admin reference application.',
    publishedAt: '2026-10-04',
    technologies: ['Next.js', 'TypeScript', 'Turborepo', 'pnpm'],
    challenge: 'A starter should help a team move quickly without tying shared contracts to one screen or forcing every project to adopt a complete admin application.',
    approach: [
      'Separate the admin app, documentation app, minimal Next.js example, and reusable workspace packages.',
      'Keep UI, contracts, HTTP, validation, forms, permissions, and database concerns in named packages with clear ownership.',
      'Use the admin app as a reference composition while keeping shared packages independent from that app.',
      'Make lint, typecheck, unit tests, coverage, builds, E2E, and security checks available through project scripts and CI.',
    ],
    evidence: [
      'The workspace contains 26 reusable packages, verified from the repository package directories.',
      'A minimal app example offers a smaller onboarding route than the full admin app.',
      'Production configuration rejects demo authentication and in-memory data sources; database and auth adapters remain explicit.',
    ],
    repositoryUrl: 'https://github.com/erolsenol/frontend-production-starter',
  },
  {
    slug: 'image-craft-service',
    title: 'Image transforms on infrastructure you control',
    project: 'image-craft-service',
    description: 'A self-hosted image API that brings upload and remote-image transforms, caching, batch work, and operational controls into one service.',
    publishedAt: '2026-10-04',
    technologies: ['Node.js', 'Fastify', 'Sharp', 'TypeScript'],
    challenge: 'Image processing often pulls file handling, format negotiation, cache policy, and background work into product code. Remote URL support also needs strong boundaries around what the server is allowed to fetch.',
    approach: [
      'Provide a single transform API for uploaded files and public remote URLs, with resize, crop, conversion, and quality options.',
      'Use TTL and size-bounded caching, request coalescing, ETags, and optional S3-compatible storage to control repeated work and storage placement.',
      'Offer optional Redis-backed batch jobs with streamed ZIP downloads for multi-image workloads.',
      'Bound processing concurrency and input/output sizes, and apply SSRF defenses before fetching remote sources.',
      'Keep client integration flexible with TypeScript and Python clients, a CLI, and a React image component.',
    ],
    evidence: [
      'The documented API supports JPEG, PNG, WebP, and AVIF output plus Accept-based format selection.',
      'Security controls include signed URLs, scoped API keys, exact-origin CORS, and public-address checks for remote images.',
      'The repository provides Docker and monitoring starting points alongside the API and client examples.',
    ],
    repositoryUrl: 'https://github.com/erolsenol/image-craft-service',
  },
] as const satisfies readonly CaseStudy[];
