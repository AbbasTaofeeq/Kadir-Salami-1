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
      }, 120 + i * 120);
    });
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/daqmbfctv/image/upload/e_improve/v1769011670/Screenshot_2282_jtmjce.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl text-center lg:text-left">
            {/* Eyebrow */}
            <p
              data-hero-animate
              className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.22em] uppercase text-white/65 opacity-0 translate-y-2 transition-all duration-700"
            >
              <span className="h-px w-10 bg-white/35" />
              Coherence-led leadership
            </p>

            {/* Headline */}
            <h1
              data-hero-animate
              className="mt-4 text-white font-semibold tracking-tight leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl opacity-0 translate-y-2 transition-all duration-700"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Coherence is the real competitive advantage.
            </h1>

            {/* Subcopy */}
            <p
              data-hero-animate
              className="mt-6 text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-0 translate-y-2 transition-all duration-700"
            >
              I partner with organisations and institutions to drive meaningful
              digital and cultural transformation – by aligning technology,
              storytelling, and talent pipelines into one coherent growth engine.
            </p>

            {/* CTA GROUP */}
            <div
              data-hero-animate
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start opacity-0 translate-y-2 transition-all duration-700"
            >
              {/* Primary CTA */}
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium text-white bg-white/15 border border-white/25 backdrop-blur-md transition hover:bg-white/25 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-35px_rgba(255,255,255,0.35)] focus-ring hover-lift"
              >
                Explore the work
              </a>

              {/* Secondary CTA – Desktop */}
              <a
                href="#thinking"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-white/80 border border-white/40 transition-all duration-300 hover:text-white hover:border-white hover:gap-3 hover:translate-x-1 focus-ring hover-lift"
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
                className="sm:hidden text-xs text-white/70 underline underline-offset-4 focus-ring hover-lift py-2 px-3 rounded-md hover:bg-white/10"
                aria-label="Toggle secondary action"
              >
                More
              </button>
            </div>

            {/* Mobile Secondary CTA */}
            {showMobileSecondary && (
              <div className="mt-4 sm:hidden">
                <a
                  href="#thinking"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-white/80 border border-white/40 transition hover:text-white hover:border-white focus-ring hover-lift"
                >
                  Read Selected Work →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
