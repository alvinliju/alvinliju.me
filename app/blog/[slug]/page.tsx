import Link from "next/link";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-mono p-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 underline mb-4 inline-block">← back</Link>
          <p className="text-gray-500">post not found</p>
        </div>
      </div>
    );
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="mb-8">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 underline mb-4 inline-block">← back</Link>
          <h1 className="text-gray-900 text-2xl md:text-3xl mt-4">{post.title}</h1>
          {post.date && (
            <p className="text-gray-500 text-sm mt-2">{post.date}</p>
          )}
        </div>

        <article
          className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
}
