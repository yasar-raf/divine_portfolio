import type { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://divine-portfolio.vercel.app';
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    ...caseStudies.map((cs) => ({
      url: `${base}/work/${cs.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
