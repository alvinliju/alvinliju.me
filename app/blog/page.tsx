import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 underline mb-4 inline-block">← back</Link>
          <h1 className="text-gray-900 text-2xl md:text-3xl mt-4">blog</h1>
        </div>

        <div className="space-y-6 text-gray-700">
          {posts.length === 0 ? (
            <p className="text-gray-500">no posts yet</p>
          ) : (
            posts.map((post) => (
              <div key={post.slug} className="border-b border-gray-200 pb-4">
                <Link href={`/blog/${post.slug}`} className="hover:text-gray-900">
                  <h2 className="text-lg font-medium mb-1">{post.title}</h2>
                  {post.date && (
                    <p className="text-xs text-gray-500">{post.date}</p>
                  )}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
