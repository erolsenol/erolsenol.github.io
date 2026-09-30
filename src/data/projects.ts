export interface Project {
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly technologies: readonly string[];
  readonly repositoryUrl: `https://github.com/${string}`;
  readonly visual: 'mailer' | 'workspace' | 'catalog';
}

export const projects = [
  {
    name: 'TypedMailer',
    description: 'One typed API for transactional email across seven Node.js providers.',
    category: 'Open-source email library',
    technologies: ['TypeScript', 'Node.js', 'Open source'],
    repositoryUrl: 'https://github.com/erolsenol/typedmailer',
    visual: 'mailer',
  },
  {
    name: 'Frontend Production Starter',
    description: 'A production-minded Next.js foundation with strict TypeScript and reusable workspace packages.',
    category: 'Frontend workspace starter',
    technologies: ['Next.js', 'TypeScript', 'Turborepo'],
    repositoryUrl: 'https://github.com/erolsenol/frontend-production-starter',
    visual: 'workspace',
  },
  {
    name: 'Vue Prisma Product App',
    description: 'A full-stack product and category management app built with Vue, Fastify and Prisma.',
    category: 'Full-stack product app',
    technologies: ['Vue 3', 'Fastify', 'Prisma'],
    repositoryUrl: 'https://github.com/erolsenol/vue-prisma-product-app',
    visual: 'catalog',
  },
] as const satisfies readonly Project[];
