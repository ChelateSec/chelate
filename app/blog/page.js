import Link from 'next/link'

const blogPosts = [
  {
    slug: 'introducing-chelate',
    title: 'Introducing Chelate: Securing AI Agents in CI/CD',
    excerpt: 'CI/CD pipelines are the easiest way into a software company. Learn how Chelate helps you find and fix exploitable workflows before attackers do.',
    date: '2026-09-28',
    author: 'S. Lakshmi Vignesh',
  },
  {
    slug: 'pwn-requests-explained',
    title: 'Pwn Requests: The Silent Threat in Your GitHub Actions',
    excerpt: 'Anyone can trigger your workflows through pull requests. Learn how pwn requests work and how to prevent them with Shrike.',
    date: '2026-09-25',
    author: 'S. Lakshmi Vignesh',
  },
  {
    slug: 'ai-agents-in-ci',
    title: 'AI Agents in CI: The New Attack Surface',
    excerpt: 'AI agents are reading untrusted issue text and acting with real tokens. One hidden instruction can leak your secrets.',
    date: '2026-09-20',
    author: 'S. Lakshmi Vignesh',
  },
]

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">Blog</h1>
          <p className="text-base text-gray-600">
            Insights on CI/CD security, AI agents, and supply chain protection.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all"
            >
              <div className="text-xs text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">By {post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
