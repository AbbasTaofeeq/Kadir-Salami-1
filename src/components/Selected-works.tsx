"use client";

import Image from "next/image";

export default function WorkSection() {
  const workItems = [
    {
      title: "TechSpecialist Consulting",
      description:
        "Designed transformation systems that connect technology to organizational reality.",
      img: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769431483/Screenshot_2287_fkdmix.png",
      ctaText: "Visit TechSpecialist Consulting",
      ctaUrl: "https://techspecialistlimited.com/home",
    },
    {
      title: "Mestich Media",
      description:
        "Used storytelling to make complex change clear, human, and actionable.",
      img: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769431484/Screenshot_2291_mdwm4d.png",
      ctaText: "Explore Mestich Media",
      ctaUrl: "https://mestichmedia.com/",
    },

    {
      title: "Mswicth Creative Hub",
      description:
        "Empowered creative industries by building digital infrastructure and narrative systems that scale.",
      img: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769432674/Screenshot_2290_fbhhcm.png",
      ctaText: "Explore Mswicth Creative Hub",
      ctaUrl: "https://mswitch-hub.africa/",
    },

    {
      title: "Istitutional Partnership",
      description:
        "Worked with institutions and hubs to digital tools, people, and purpose - ensuring initiatives translated into measurable, long-term impact.",
      img: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769432935/Screenshot_2285_ktq6gd.png",
      ctaText: "Discover More",
      ctaUrl: "#",
    },
    
  ];

  return (
    <section
      id="work"
      className="w-full bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white py-10 lg:py-12"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h1
            className="text-2xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-2 text-white"
            style={{
              fontFamily: "Playfair Display, serif",
              letterSpacing: "-0.02em",
            }}
          >
            Building systems, not just products
          </h1>
          <div className="mx-auto h-0.5 w-16 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 mb-3" />
          <p
            className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily:
                'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
            }}
          >
            Focused on leadership, ecosystems, and long-term value.
          </p>
        </div>

        {/* Work Cards Grid - show all 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {workItems.map((item, index) => (
            <WorkCard
              key={index}
              title={item.title}
              description={item.description}
              ctaText={item.ctaText}
              ctaUrl={item.ctaUrl}
              img={item.img}
            />
          ))}
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
  description,
  ctaText,
  ctaUrl,
  img,
}: {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  img?: string;
}) {
  return (
    <div className="group relative flex flex-col md:flex-row items-start gap-3 rounded-lg border border-white/8 bg-gradient-to-br from-white/[0.02] via-white/[0.01] to-transparent overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(245,158,11,0.25)] hover:border-amber-400/25">
      {/* Left accent bar */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-amber-500 to-amber-400 opacity-100" />

      {/* Thumbnail (sizes unchanged) */}
      {img && (
        <div className="flex-shrink-0 w-full md:w-36 h-44 md:h-24 rounded-md overflow-hidden relative bg-slate-800">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 144px"
            className="object-cover"
          />
        </div>
      )}

      <div className="p-3 md:p-4 flex-1">
        <h3
          className="text-lg lg:text-xl font-semibold mb-1 text-white"
          style={{
            fontFamily: "Playfair Display, serif",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>

        <p
          className="text-sm text-white/80 leading-relaxed mb-3"
          style={{
            fontFamily:
              'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
            lineHeight: "1.5",
          }}
        >
          {description}
        </p>

        <a
          href={ctaUrl}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-600/90 text-white text-sm font-medium hover:bg-amber-700 transition-colors duration-150"
          style={{
            fontFamily:
              'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
          }}
        >
          <span>{ctaText}</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 via-amber-400/2 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
    </div>
  );
}
