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
    <div className="bg-chelate-cream min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-serif font-bold text-chelate-ink mb-4">Blog</h1>
          <p className="text-xl text-chelate-ink/80">
            Insights on CI/CD security, AI agents, and supply chain protection.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg p-8 border-2 border-chelate-purple-200 hover:border-chelate-purple-400 transition-all"
            >
              <div className="text-sm text-chelate-ink/60 mb-2">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl font-serif font-bold text-chelate-purple-700 mb-4 hover:text-chelate-purple-800 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-chelate-ink/80 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-chelate-ink/60">By {post.author}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-chelate-purple-600 hover:text-chelate-purple-700 font-medium"
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
