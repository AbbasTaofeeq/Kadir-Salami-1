export default function ProblemSection() {
  return (
    <>
      <section
      id="problem"
      className="w-full bg-gradient-to-b from-white via-gray-50 to-amber-50 text-black py-12"
      data-problem-section
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading with subtle blue underline */}
        <div className="mb-6 text-center md:text-left">
          <h1
            className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1"
            style={{ fontFamily: 'var(--fancy-heading)', letterSpacing: '-0.02em' }}
          >
            What’s Actually Broken
          </h1>
          <div className="inline-block h-0.5 w-12 rounded-full bg-amber-600" />
        </div>

        {/* Cards Row with gradient divider */}
        <div className="flex flex-col md:flex-row items-stretch gap-8 justify-center">
          {/* Card 1 */}
          <div className="flex-1 flex flex-col justify-between bg-white border border-neutral-200 rounded-lg shadow-sm p-6 transition-transform transition-shadow duration-200 hover:shadow-md hover:-translate-y-0.5">
            <h2
              className="text-xl font-bold mb-3 text-amber-600"
              style={{ fontFamily: 'var(--fancy-heading)', letterSpacing: '-0.01em' }}
            >
              The real reason transformation fails:
            </h2>
            <div className="space-y-3 text-sm text-neutral-800" style={{ fontFamily: 'var(--bold-paragraph)' }}>
              <p className="font-medium">Most transformation efforts don’t fail due to lack of ambition or talent. They fail because:</p>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-amber-600" />
                  <span className="leading-relaxed text-sm" style={{ fontFamily: 'var(--bold-paragraph)' }}>Strategy evolves without systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-amber-600" />
                  <span className="leading-relaxed text-sm" style={{ fontFamily: 'var(--bold-paragraph)' }}>Technology advances without people</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-amber-600" />
                  <span className="leading-relaxed text-sm" style={{ fontFamily: 'var(--bold-paragraph)' }}>Culture is discussed, but not designed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-amber-600" />
                  <span className="leading-relaxed text-sm" style={{ fontFamily: 'var(--bold-paragraph)' }}>Everything improves — but nothing connects.</span>
                </li>
              </ul>
              <p className="mt-3 text-sm font-semibold text-black" style={{ fontFamily: 'var(--bold-paragraph)' }}>Progress without coherence creates motion, not momentum.</p>
            </div>
          </div>

          {/* Vertical gradient divider (desktop only) */}
          <div className="hidden md:flex items-stretch">
            <div className="mx-3 w-px bg-amber-200 opacity-70" />
          </div>

          {/* Card 2 */}
          <div className="flex-1 flex flex-col justify-between bg-amber-50 border border-amber-100 rounded-lg shadow-sm p-6 transition-transform transition-shadow duration-200 hover:shadow-md hover:-translate-y-0.5">
            <h2
              className="text-xl font-bold mb-3 text-amber-600"
              style={{ fontFamily: 'var(--fancy-heading)', letterSpacing: '-0.01em' }}
            >
              A Better Way Forward
            </h2>
            <div className="space-y-3 text-sm text-slate-900" style={{ fontFamily: 'var(--bold-paragraph)' }}>
              <p className="font-medium">Coherence is not alignment workshops. It’s architecture.</p>
              <p className="leading-relaxed text-sm" style={{ fontFamily: 'var(--bold-paragraph)' }}>I work with leaders and institutions to design coherent systems — where strategy, storytelling, technology, and talent reinforce each other.</p>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-amber-600" />
                  <span className="leading-relaxed text-sm" style={{ fontFamily: 'var(--bold-paragraph)' }}>Not more initiatives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-amber-600" />
                  <span className="leading-relaxed text-sm" style={{ fontFamily: 'var(--bold-paragraph)' }}>Not more frameworks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-amber-600" />
                  <span className="leading-relaxed text-sm" style={{ fontFamily: 'var(--bold-paragraph)' }}>One connected engine.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
