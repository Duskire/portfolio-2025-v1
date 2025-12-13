import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/utils/projects";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/utils/mdx-components";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});
  const { content } = await compileMDX({
    source: post.content,
    components,
    options: { parseFrontmatter: false },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col font-medium">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <Link
            href="/work"
            className="inline-block mb-8 hover:opacity-70 transition-opacity"
          >
            ← Back to Projects
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <article>
            {content}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
