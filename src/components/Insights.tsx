"use client";

import { useEffect, useRef, useState } from "react";

type InsightData = {
  category: string;
  title: string;
  content: string;
  linkedin: string;
};

export default function InsightsSection() {
  const [activeInsight, setActiveInsight] = useState<InsightData | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalCardRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  /* ---------------------------------- */
  /* Open / Close Modal */
  /* ---------------------------------- */

  const openModal = (data: InsightData) => {
    setActiveInsight(data);
  };

  const closeModal = () => {
    if (!modalRef.current || !modalCardRef.current || !overlayRef.current)
      return;

    modalCardRef.current.classList.remove("scale-100", "opacity-100");
    modalCardRef.current.classList.add("scale-95", "opacity-0");
    overlayRef.current.classList.remove("opacity-100");
    overlayRef.current.classList.add("opacity-0");

    setTimeout(() => {
      setActiveInsight(null);
    }, 300);
  };

  /* ---------------------------------- */
  /* Animate Modal In */
  /* ---------------------------------- */

  useEffect(() => {
    if (!activeInsight) return;

    const modal = modalRef.current;
    const card = modalCardRef.current;
    const overlay = overlayRef.current;

    if (!modal || !card || !overlay) return;

    modal.classList.remove("hidden");

    requestAnimationFrame(() => {
      overlay.classList.remove("opacity-0");
      overlay.classList.add("opacity-100");

      card.classList.remove("scale-95", "opacity-0");
      card.classList.add("scale-100", "opacity-100");
    });
  }, [activeInsight]);

  return (
    <section id="thinking">
      <section
        id="thinking-modal"
        className="w-full bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white py-14 sm:py-20 md:py-20 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.22em] uppercase text-neutral-400">
              Insights
            </p>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Clarity before scale
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              Coherence over noise. Alignment before acceleration. Thinking shaped
              by real systems and long-view outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3">
            <InsightCard
              category="Perspective"
              title="Fragmentation Is the Real Enemy"
              excerpt="Most organisations don’t fail from a lack of talent or ambition, but because tools, narratives, and people operate in isolation."
              content={`Most organisations don’t fail from a lack of talent or ambition, but because tools, narratives, and people operate in isolation.

Transformation begins when these elements are designed to work as one system

The real work of leadership is integration. Aligning language with intent. Designing systems that reinforce behaviour. Ensuring that tools serve clarity, not complexity. When organisations function as one system, momentum compounds, trust accelerates, and scale becomes sustainable.`}
              linkedin="https://www.linkedin.com/posts/CEO_POST_LINK"
              onRead={openModal}
            />

            <InsightCard
              category="Reflection"
              title="Excellence Without Clarity Stays Invisible"
              excerpt="Effort alone does not create trust or adoption. In complex environments, clarity of intent and communication determines whether good work is recognised."
              content={`Effort alone does not create trust or adoption. In complex environments, clarity of intent and communication determines whether good work is recognised, embraced, and scaled.`}
              linkedin="https://www.linkedin.com/posts/CEO_POST_LINK"
              onRead={openModal}
            />

            <InsightCard
              category="Framework"
              title="Transformation Is System Architecture"
              excerpt="Digital change is not about tools. Cultural change is not about slogans. Sustainable impact happens when technology, storytelling, and capability align."
              content={`Digital change is not about tools. Cultural change is not about slogans. Sustainable impact happens when technology, storytelling, and capability are aligned into a coherent operating model.`}
              linkedin="https://www.linkedin.com/posts/CEO_POST_LINK"
              onRead={openModal}
            />
          </div>
        </div>

        {/* ---------------- MODAL ---------------- */}
        {activeInsight && (
          <div ref={modalRef} id="insightsModal" className="fixed inset-0 z-50">
            <div
              ref={overlayRef}
              id="modalOverlay"
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300"
            />

            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div
                ref={modalCardRef}
                id="modalCard"
                className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.25)] border border-neutral-100 scale-95 opacity-0 transition-all duration-300"
              >
                <button
                  id="modalClose"
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-black hover:bg-black/80 transition-colors duration-200 focus-ring hover-lift"
                >
                  ✕
                </button>

                <div className="p-8 pt-10">
                  <p
                    id="modalCategory"
                    className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-3"
                  >
                    {activeInsight.category}
                  </p>

                  <h2
                    id="modalTitle"
                    className="text-2xl font-semibold text-neutral-900 leading-tight mb-6"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {activeInsight.title}
                  </h2>

                  <div
                    id="modalContent"
                    className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-4 whitespace-pre-line"
                  >
                    {activeInsight.content}
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <a
                      id="modalLinkedIn"
                      href={activeInsight.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-amber-600 transition-colors duration-200 focus-ring hover-lift"
                    >
                      Read on LinkedIn →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

/* ---------------------------------- */
/* Insight Card */
/* ---------------------------------- */

function InsightCard({
  category,
  title,
  excerpt,
  content,
  linkedin,
  onRead,
}: {
  category: string;
  title: string;
  excerpt: string;
  content: string;
  linkedin: string;
  onRead: (data: InsightData) => void;
}) {
  return (
    <div
      data-insight-card
      className="group rounded-xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-[0_18px_50px_-45px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_-50px_rgba(0,0,0,0.65)]"
    >
      <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
        {category}
      </p>
      <h3
        className="mt-3 text-xl font-semibold text-white"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-neutral-300">
        {excerpt}
      </p>

      <button
        data-insight-readmore
        onClick={() =>
          onRead({ category, title, content, linkedin })
        }
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4 decoration-neutral-600 hover:text-amber-400 transition-all duration-300 hover:gap-3 hover:translate-x-1 focus-ring"
      >
        Read the thinking <span>→</span>
      </button>
    </div>
  );
}
