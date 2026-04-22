import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ukaelr.com',
      lastModified: new URLSearchParams().get('date') || new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ukaelr.com/products',
      lastModified: new URLSearchParams().get('date') || new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
