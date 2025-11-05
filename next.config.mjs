/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
  // Output standalone for better deployment
  output: 'standalone',
  
  // SEO optimization
  trailingSlash: false,
  
  // Image optimization for better performance
  images: {
    domains: ['images.unsplash.com', 'b2bgravity.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compression for better performance
  compress: true,
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/services/abm',
        destination: '/services/account-based-marketing',
        permanent: true,
      },
    ];
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
}

export default nextConfig
