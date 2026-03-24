"use client";

import Link from "next/link";
import { getFeaturedPosts } from "@/src/data/posts";

export default function InsightsSection() {
  const featured = getFeaturedPosts();

  return (
    <section id="thinking">
      <div className="w-full bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white py-14 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.22em] uppercase text-amber-600">
                Insights
              </p>
              <h2
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Ideas and Reflection
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white/70">
                On systems, leadership, and meaningful transformation.
              </p>
            </div>
            <Link
              href="/blog"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-amber-500 underline underline-offset-4 decoration-neutral-600 hover:text-amber-400 transition-all duration-300 hover:gap-3"
            >
              All articles <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Cards */}
            <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3">
            {featured.slice(0, 3).map((post) => (
              <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-[0_18px_50px_-45px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_-50px_rgba(0,0,0,0.65)] hover:border-neutral-700 flex flex-col"
              >
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                {post.category}
              </p>
              <h3
                className="mt-3 text-xl font-semibold text-white leading-snug"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {post.title}
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-neutral-300 flex-1">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-neutral-500 tracking-wide">
                {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-500 group-hover:text-amber-400 group-hover:gap-2.5 transition-all duration-300">
                Read more <span aria-hidden>→</span>
                </span>
              </div>
              </Link>
            ))}
            </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-10 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-neutral-400 max-w-md">
              Longer thinking on leadership, organisational design, and the disciplines behind sustainable transformation.
            </p>
            <Link
              href="/blog"
              className="shrink-0 inline-flex items-center px-5 py-2.5 text-sm rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-200 font-medium"
            >
              Visit the blog
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}