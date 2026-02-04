export default function LeadershipSection() {
  return (
    <section id="about" className="w-full bg-neutral-50 text-neutral-900 py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] w-[400px] overflow-hidden rounded-xl bg-neutral-200 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.55)]">
              <div 
                className="h-full w-full bg-center bg-cover relative"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769011688/kadri_gdfv72.png')"
                }}
              />
            </div>

            <div className="absolute -bottom-10 right-6 hidden sm:block">
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm px-4 py-3 rounded-lg transition-all duration-500 hover:shadow-md hover:scale-105 hover:bg-white/90">
                <p 
                  className="text-sm text-neutral-700 italic transition-colors duration-300 hover:text-neutral-900"
                  style={{ fontFamily: 'var(--fancy-heading)' }}
                >
                  &quot;Calm is a strategy.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 space-y-5">
            <p className="text-sm font-medium text-amber-600 uppercase tracking-wide">My Perspective</p>
            {/* <p className="text-xs text-neutral-600 font-medium">Your Personal Credibility</p> */}

            <h2 
              className="text-3xl sm:text-4xl font-semibold leading-tight text-neutral-900"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              I’m a builder at heart
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p>
                I’ve spent years working across digital transformation, media, and talent development - building systems in environments where fragmentation is the norm.
              </p>
              <p>
                I’ve seen ambition stall because execution lacked coherence.
              </p>
              <p className="font-semibold text-neutral-900">
                My work exists to change that.
              </p>
              <p>
                I partner closely with leaders, teams, and ecosystems serious about long-term capability - not short-term wins.
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-200">
              <p className="text-sm text-neutral-900 font-medium">
                As a leader, I architect environments where people, teams, and institutions can perform at their highest level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
