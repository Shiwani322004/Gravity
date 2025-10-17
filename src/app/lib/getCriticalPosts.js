export async function getCriticalPosts() {
  // Return only the most important posts for pre-rendering
  return [
    { id: 'important-post-1' },
    { id: 'popular-article-2' }, 
    { id: 'featured-content-3' },
    // Add more critical posts as needed
  ]
}
