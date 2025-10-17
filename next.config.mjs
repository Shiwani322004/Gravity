/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
  // Output standalone for better deployment
  output: 'standalone',
  
  // Disable static generation completely
  trailingSlash: false,
  
  // Image optimization
  images: {
    unoptimized: true
  }
}

export default nextConfig
