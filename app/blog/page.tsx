import Link from "next/link";
import Image from "next/image";
import Nav_bar from "@/src/components/Nav_bar";
import { posts } from "@/src/data/posts";

export const metadata = {
  title: "Blog — Kadir Salami",
  description:
    "Ideas and reflections on leadership, organisational design, and meaningful transformation.",
};

export default function BlogPage() {
  return (
    <>
      <Nav_bar />

      {/* Hero */}
      <section 
        className="w-full bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white pt-32 sm:pt-36 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/daqmbfctv/image/upload/v1770221472/WhatsApp_Image_2026-02-04_at_17.01.02_enu8ba.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-black/80 to-neutral-950/80"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <p className="text-xs tracking-[0.22em] uppercase text-amber-600">
        Insights
          </p>
          <h1
        className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white max-w-2xl"
        style={{ fontFamily: "Playfair Display, serif" }}
          >
        Ideas and Reflection
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
     Thoughts on leadership, innovation, and building systems that create lasting value.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="w-full bg-black text-white py-14 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          <div className="border-t border-neutral-800 pt-10 mb-2 flex items-center justify-between">
            <p className="text-xs tracking-[0.18em] uppercase text-neutral-500">
              {posts.length} Articles
            </p>
          </div>

          <div className="divide-y divide-neutral-800">
            {posts.map((post) => (
              <article key={post.id} className="group py-10 sm:py-12">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start"
                >
                  {/* Image */}
                  <div className="w-full sm:w-48 lg:w-56 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={224}
                      height={140}
                      className="w-full h-40 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                      {post.category}
                    </p>
                    <h2
                      className="text-xl sm:text-2xl font-semibold text-white leading-snug group-hover:text-amber-400 transition-colors duration-200"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-[15px] text-neutral-300 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-2 flex items-center justify-between">
                      <span className="text-xs text-neutral-500 tracking-wide">
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-500 group-hover:text-amber-400 group-hover:gap-2.5 transition-all duration-300">
                        Read the thinking <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-neutral-950 text-white py-16 sm:py-20 lg:py-24 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.22em] uppercase text-amber-600 mb-4">
              Work together
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Start a conversation
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/70 mb-8">
              If you&apos;re leading change and want it to actually stick,
              let&apos;s talk.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-200 font-medium"
            >
              Book a strategy session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}