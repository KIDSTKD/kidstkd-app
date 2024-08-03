import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/user/:path*']
    },
    sitemap: 'https://kidstkd.ru/sitemap.xml',
  }
}