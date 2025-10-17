import { getCriticalPosts } from '@/app/lib/getCriticalPosts'

// Force dynamic rendering to prevent build issues
export const dynamic = 'force-dynamic'

// This is the correct App Router syntax for static generation
export async function generateStaticParams() {
  // Skip static generation for faster builds
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return []
  }
  
  // Only pre-render critical pages
  const criticalPosts = await getCriticalPosts()
  
  return criticalPosts.map((post) => ({
    id: post.id,
  }))
}

export default function Post({ params }) {
  return (
    <div>
      <h1>Post {params.id}</h1>
      {/* Your post content here */}
    </div>
  )
}
