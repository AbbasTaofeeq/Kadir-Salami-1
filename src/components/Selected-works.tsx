"use client";

import { useEffect, useRef, useState } from "react";

export default function WorkSection() {
  const moreWorkRef = useRef<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = moreWorkRef.current;
    if (!el) return;

    if (expanded) {
      el.setAttribute("aria-hidden", "false");
      el.style.maxHeight = el.scrollHeight + "px";
      el.classList.remove("opacity-0", "translate-y-2");
      el.classList.add("opacity-100", "translate-y-0");
    } else {
      el.setAttribute("aria-hidden", "true");
      el.style.maxHeight = "0px";
      el.classList.remove("opacity-100", "translate-y-0");
      el.classList.add("opacity-0", "translate-y-2");
    }
  }, [expanded]);

  return (
    <section id="work" className="w-full bg-neutral-950 text-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.22em] uppercase text-white/60">
            Selected Work
          </p>
          <h2
            className="mt-4 text-3xl text-white sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Building systems, not just products
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            Focused on leadership, ecosystems, and long-term value.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3">

          {/* CARD 1 */}
          <WorkCard
            title="Mswitch Group"
            role="Founder & Group Lead"
            tag="Group Strategy & Execution"
            image="https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769431482/Screenshot_2286_ivnuzz.png"
            description="Built and scaled a multi-vertical group across digital transformation, media, and talent development - aligning technology, storytelling, and capability into one growth system."
          />

          {/* CARD 2 */}
          <WorkCard
            title="TechSpecialist Consulting"
            role="Strategic & Technical Lead"
            tag="Digital Transformation"
            image="https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769431483/Screenshot_2287_fkdmix.png"
            description="Led the design of digital systems and advisory frameworks that move organisations from fragmented execution to coherent, scalable operations."
          />

          {/* CARD 3 */}
          <WorkCard
            title="Mswitch Media"
            role="Narrative & Media Strategy"
            tag="Storytelling & Trust"
            image="https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769431484/Screenshot_2291_mdwm4d.png"
            description="Developed communication systems that translate complex ideas into clear, trusted narratives for institutions, founders, and ecosystems."
          />
        </div>

        {/* HIDDEN / REVEAL */}
        <div className="mt-8">
          <div
            ref={moreWorkRef}
            id="moreWork"
            className="overflow-hidden opacity-0 translate-y-2 transition-[max-height,opacity,transform] duration-1000 ease-out"
            style={{ maxHeight: "0px" }}
            aria-hidden="true"
          >
            <div className="pt-6 grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3">

              <WorkCard
                title="Mswitch Creative-hub"
                role="Program & Capability Lead"
                tag="Talent & Capability Building"
                image="https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769432674/Screenshot_2290_fbhhcm.png"
                description="Designed talent pipelines that connect skills development with real economic participation - bridging learning and opportunity with consistent delivery."
              />

              <WorkCard
                title="Institutional Partnerships"
                role="Ecosystem Partner"
                tag="Institutional Systems"
                image="https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769432935/Screenshot_2285_ktq6gd.png"
                description="Worked with institutions and hubs to align digital tools, people, and purpose - ensuring initiatives translate into measurable, long-term impact."
              />

              <div className="hidden lg:block rounded-xl border border-white/10 bg-white/[0.02]" />
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:justify-start">
            <button
              id="toggleMoreWork"
              type="button"
              aria-expanded={expanded}
              aria-controls="moreWork"
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium text-white border border-white/20 bg-white/[0.04] hover:bg-white/[0.08] transition focus-ring hover-lift"
            >
              {expanded ? "Show less" : "View more work"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Card Component */
/* ---------------------------------- */

function WorkCard({
  title,
  role,
  description,
  tag,
  image,
}: {
  title: string;
  role: string;
  description: string;
  tag: string;
  image: string;
}) {
  return (
    <a
      href="#"
      data-work-card
      className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden transition duration-300 will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_50px_-35px_rgba(255,255,255,0.35)] focus-ring"
    >
      <div className="relative aspect-[16/10] bg-neutral-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15)), url('${image}')`,
          }}
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-semibold text-white"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/60">{role}</p>
        <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/75">
          {description}
        </p>
        <div className="mt-5">
          <span className="inline-flex items-center text-xs text-white/70 border border-white/15 px-2.5 py-1 rounded-md">
            {tag}
          </span>
        </div>
      </div>
    </a>
  );
}
