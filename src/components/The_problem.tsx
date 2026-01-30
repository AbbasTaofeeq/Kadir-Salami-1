export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="w-full bg-white text-neutral-900 py-8 sm:py-12 md:py-16 lg:py-20"
      data-problem-section
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-4 md:gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-8">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between space-y-4" data-problem-animate>
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-500">
              <span className="inline-block h-px w-10 bg-black rounded-full" /> THE PROBLEM
            </p>

            <h2
              className="text-[17px] sm:text-xl font-semibold leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Most transformation efforts fail for one reason: fragmentation.
            </h2>

            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <div className="space-y-2 pl-3">
                {[
                  "Digital transformation without cultural alignment",
                  "Branding without substance",
                  "Talent development without market relevance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-slate-400 rounded-full mt-1.5" />
                    <p
                      className="text-sm font-semibold text-neutral-900"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <p>Tools are adopted.</p>
                <p>Campaigns are launched.</p>
                <p>Training is delivered.</p>
              </div>

              <p
                className="text-base sm:text-lg md:text-xl text-neutral-900"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                But nothing connects.
              </p>

              <div className="bg-gray-200/50 p-3 sm:p-4 rounded-lg">
                <p className="text-xs sm:text-sm font-semibold">
                  The result is predictable:
                </p>
                <p className="text-xs tracking-[0.2em] mt-2 font-bold text-neutral-500">
                  fragmentation, wasted potential, and short-lived growth.
                </p>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div data-problem-animate>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 sm:p-6 rounded-xl border border-slate-200 h-full flex flex-col justify-between">
              <p className="text-xs tracking-[0.2em] uppercase text-slate-600 mb-3">
                <span className="inline-block h-px w-10 bg-black rounded-full" /> THE BELIEF
              </p>

              <p
                className="text-base sm:text-lg font-semibold mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                My work exists to change that.
              </p>

              <p className="text-xs tracking-[0.2em] font-bold text-slate-600 mb-3">
                Real impact comes from coherence - not noise.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Technology enables execution",
                  "Storytelling creates trust and alignment",
                  "Talent development leads to real economic participation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5" />
                    <p
                      className="text-sm font-semibold text-neutral-900"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-300 pt-4">
                <p className="text-xs text-slate-600">
                  This is not surface-level transformation.
                </p>
                <p
                  className="text-sm font-bold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  It is system architecture.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div data-problem-animate>
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-5 sm:p-6 rounded-xl border border-neutral-200 h-full">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-600 mb-3">
                <span className="inline-block h-px w-10 bg-black rounded-full" /> CORE VALUES
              </p>

              <p
                className="text-base sm:text-lg font-semibold mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Principles that govern the work
              </p>

              <div className="space-y-4">
                {[
                  ["Excellence as a standard", "Mediocrity is a choice."],
                  ["Abundance over scarcity", "Creation beats competition."],
                  ["Impossible is not a fact", "It is often an outdated assumption."],
                  ["Earned confidence", "No posturing. Only proof."],
                  [
                    "Impact through capability",
                    "Skills create freedom — for individuals, companies, and societies.",
                  ],
                ].map(([title, desc]) => (
                  <div key={title}>
                    <p
                      className="text-sm font-semibold"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {title}
                    </p>
                    <p className="text-xs text-neutral-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
