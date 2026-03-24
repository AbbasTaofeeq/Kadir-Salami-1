import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/src/data/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <section className="px-6 pb-12 pt-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            ← Back to Insights
          </Link>

          <div className="mb-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-700">
              {post.category}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-slate-500">{post.date}</p>
          </div>

          <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <article className="mx-auto max-w-3xl">
            <p className="mb-8 text-xl leading-8 text-slate-600">
              {post.excerpt}
            </p>

            <div className="space-y-6 text-base leading-8 text-slate-700">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {post.sourcePlatform && post.sourceUrl && (
              <div className="mt-12 border-t border-slate-200 pt-8">
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                >
                  Read original post on {post.sourcePlatform}
                </a>
              </div>
            )}
          </article>

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl bg-slate-900 px-8 py-10 text-white">
            <h2 className="text-2xl font-semibold">Start a conversation</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              If this perspective connects with the challenges you are solving,
              let’s discuss the work more closely.
            </p>
            <Link
              href="/#connect"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}