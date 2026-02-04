import Image from 'next/image';

export default function SeeHowIWorkSection() {
  return (
    <section
      id="see-how-i-work"
      className="w-full bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-4xl font-extrabold tracking-tight mb-3 text-white"
            style={{ fontFamily: 'var(--fancy-heading)', letterSpacing: '-0.02em' }}
          >
            See How I Work
          </h1>
          <div className="mx-auto h-0.5 w-24 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
          {/* Pillars */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Pillar 1 */}
              <div className="relative rounded-xl cursor-pointer bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neutral-800/70 p-6 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent rounded-full" />
                <div className="flex items-start gap-3 mb-2">
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-amber-600/10 text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20.24 11.15a8 8 0 00-1.63-2.52l1.3-2.24-2.12-2.12-2.24 1.3A8 8 0 0012.85 3.76L12 2l-2.85 1.76a8 8 0 00-2.52 1.63l-2.24-1.3L2.27 7.21l1.3 2.24A8 8 0 003.76 12.85L2 14l1.76 2.85a8 8 0 001.63 2.52l-1.3 2.24 2.12 2.12 2.24-1.3a8 8 0 002.52 1.63L12 22l2.85-1.76a8 8 0 002.52-1.63l2.24 1.3 2.12-2.12-1.3-2.24a8 8 0 001.63-2.52L22 14l-1.76-2.85z" />
                    </svg>
                  </span>
                  <h2
                    className="text-xl font-bold text-amber-400"
                    style={{ fontFamily: 'var(--fancy-heading)', letterSpacing: '-0.01em' }}
                  >
                    Digital &amp; Organizational Transformation
                  </h2>
                </div>
                <p
                  className="text-sm sm:text-base text-slate-200/90 leading-relaxed"
                  style={{
                    fontFamily: 'var(--bold-paragraph)',
                  }}
                >
                  Design transformation that accounts for people, incentives, and reality - not just tools.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="relative rounded-xl cursor-pointer bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neutral-800/70 p-6 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent rounded-full" />
                <div className="flex items-start gap-3 mb-2">
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-amber-600/10 text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </span>
                  <h2
                    className="text-xl font-bold text-amber-400"
                    style={{ fontFamily: 'var(--fancy-heading)', letterSpacing: '-0.01em' }}
                  >
                    Storytelling &amp; Narrative Architecture
                  </h2>
                </div>
                <p
                  className="text-sm sm:text-base text-slate-200/90 leading-relaxed"
                  style={{
                    fontFamily: 'var(--bold-paragraph)',
                  }}
                >
                  Clarify purpose and direction so strategy can actually travel through the organization.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="relative rounded-xl cursor-pointer bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neutral-800/70 p-6 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent rounded-full" />
                <div className="flex items-start gap-3 mb-2">
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-amber-600/10 text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                  </span>
                  <h2
                    className="text-xl font-bold text-amber-400"
                    style={{ fontFamily: 'var(--fancy-heading)', letterSpacing: '-0.01em' }}
                  >
                    Strategy &amp; System Design
                  </h2>
                </div>
                <p
                  className="text-sm sm:text-base text-slate-200/90 leading-relaxed"
                  style={{
                    fontFamily: 'var(--bold-paragraph)',
                  }}
                >
                  Align vision, structure, and execution so decisions compound instead of collide.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="relative rounded-xl cursor-pointer bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 shadow-md hover:shadow-lg transition-shadow duration-200 border border-neutral-800/70 p-6 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent rounded-full" />
                <div className="flex items-start gap-3 mb-2">
                  <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-amber-600/10 text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M17 20h5v-2a4 4 0 00-4-4h-1" />
                      <path d="M9 20H4v-2a4 4 0 014-4h1" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </span>
                  <h2
                    className="text-xl font-bold text-amber-400"
                    style={{ fontFamily: 'var(--fancy-heading)', letterSpacing: '-0.01em' }}
                  >
                    Talent &amp; Leadership Systems
                  </h2>
                </div>
                <p
                  className="text-sm sm:text-base text-slate-200/90 leading-relaxed"
                  style={{
                    fontFamily: 'var(--bold-paragraph)',
                  }}
                >
                  Build pipelines and leadership capacity that sustain change beyond individuals.
                </p>
              </div>
            </div>
          </div>

          {/* CEO image + copy + CTA */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black shadow-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-400/10 pointer-events-none" />
              {/* Placeholder image block; replace with real image when available */}
              <div className="aspect-[4/3] w-full relative overflow-hidden rounded-2xl">
                <Image
                  src="https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769971152/WAK06804.jpg_gwylyj.jpg"
                  alt="CEO leading a working session"
                  className="w-full h-full object-cover block"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <div className="bg-black/30 rounded-md p-4">
                  
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p
                className="text-sm sm:text-base text-slate-200/90 leading-relaxed"
                style={{
                  fontFamily:
                    'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
                }}
              >
                Every engagement is built around a small number of high-leverage working sessions, clear artifacts, and a
                cadence that respects the realities of leading a complex institution.
              </p>
            </div>

            <div>
              <a
                href="/selected-work"
                className="inline-flex items-center justify-center rounded-md bg-amber-600 hover:bg-amber-700 transition focus-ring px-4 py-2 text-[10px] sm:text-[12px] font-medium text-white shadow-md hover:bg-[#135fcc] hover:shadow-lg transition-colors transition-shadow duration-150 focus-ring"
                style={{
                  fontFamily:
                    'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
                }}
              >
                Explore Selected Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

