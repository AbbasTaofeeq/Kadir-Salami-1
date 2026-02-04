"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [showMobileSecondary, setShowMobileSecondary] = useState(false);
  const animatedRefs = useRef<NodeListOf<HTMLElement> | null>(null);

  /* ------------------------------
     Hero entrance animation
  -------------------------------- */
  useEffect(() => {
    animatedRefs.current = document.querySelectorAll("[data-hero-animate]");

    animatedRefs.current.forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove("opacity-0", "translate-y-2");
        el.classList.add("opacity-100", "translate-y-0");
      }, 150 + i * 150);
    });
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/daqmbfctv/image/upload/e_improve/v1770222269/WhatsApp_Image_2026-02-04_at_17.23.55_hfw4vz.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl text-center lg:text-left">
            {/* Eyebrow */}
            <p
              data-hero-animate
              className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.22em] uppercase text-white/70 opacity-0 translate-y-2 transition-all duration-700"
              style={{ fontFamily: "var(--bold-paragraph)" }}
            >
              <span className="h-px w-10 bg-white/35" />
              Coherence-led leadership
            </p>

            {/* Headline */}
            <h1
              data-hero-animate
              className="mt-4 text-white font-extrabold tracking-tight leading-tight text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl opacity-0 translate-y-2 transition-all duration-700"
              style={{ fontFamily: "var(--fancy-heading)" }}
            >
              I help organizations align strategy, technology, and people - so transformation actually works.
            </h1>

            {/* Subcopy */}
            <p
              data-hero-animate
              className="mt-6 text-slate-200 text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-0 translate-y-2 transition-all duration-700"
              style={{ fontFamily: "var(--bold-paragraph)" }}
            >
              Most transformation fails because everything moves in isolation. <br />
              <span className="text-white font-semibold tracking-wide uppercase">Coherence</span> is what turns effort into results.
            </p>

            {/* CTA GROUP */}
            <div
              data-hero-animate
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start opacity-0 translate-y-2 transition-all duration-700"
            >
              {/* Primary CTA */}
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 transition focus-ring"
                style={{ fontFamily: "var(--bold-paragraph)" }}
              >
                See How I Work
              </a>

              {/* Secondary CTA – Desktop */}
              <a
                href="#thinking"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-amber-600 bg-white border border-amber-600 transition-all duration-300 hover:bg-amber-600 hover:text-white focus-ring"
                style={{ fontFamily: "var(--bold-paragraph)" }}
              >
                Read the thinking
                <span aria-hidden className="transition-transform duration-300">
                  →
                </span>
              </a>

              {/* Mobile Toggle */}
              <button
                type="button"
                onClick={() => setShowMobileSecondary((v) => !v)}
                className="sm:hidden text-sm text-white/95 px-3 py-2 rounded-md focus-ring hover:bg-white/10"
                aria-label="Toggle secondary action"
              >
                Read Insights
              </button>
            </div>

            {/* Mobile Secondary CTA */}
            {showMobileSecondary && (
              <div className="mt-4 sm:hidden">
                <a
                  href="#thinking"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-white/80 border border-white/40 transition hover:text-white hover:border-white focus-ring hover-lift"
                >
                  See How I Work →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
