export default function LeadershipSection() {
  return (
    <section id="about" className="w-full bg-neutral-50 text-neutral-900 py-20 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.55)]">
              <div 
                className="h-full w-full bg-center bg-cover relative"
                style={{
                  backgroundImage: "linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769011688/kadri_gdfv72.png')"
                }}
              />
            </div>
            {/* Optional floating quote */}
            <div className="absolute -bottom-10 right-6 hidden sm:block">
              <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm px-4 py-3 rounded-lg transition-all duration-500 hover:shadow-md hover:scale-105 hover:bg-white/90">
                <p 
                  className="text-sm text-neutral-700 italic transition-colors duration-300 hover:text-neutral-900"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  "Calm is a strategy."
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1 space-y-6">
            <h2 
              className="text-3xl sm:text-4xl font-semibold leading-tight text-neutral-900"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              I am a builder at heart.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              <p>
                I lead a group of companies across digital transformation, media & communication, and talent pipeline
                development.
              </p>
              <p>
                Everything I build - personally and professionally - follows one belief:
                real impact comes from coherence, not noise.
              </p>
              <p>
                Over the years, I've seen organisations invest heavily in technology without cultural alignment, in
                branding without substance, and in skills training without real opportunity.
              </p>
              <p>
                The outcome is always the same: fragmentation and unrealised potential.
              </p>
              <h3 className="text-base sm:text-lg text-neutral-900 font-bold font-serif">
                My work exists to change that.
              </h3>
              <p>
                As a leader, my role is not to be the loudest voice -
                but to architect environments where people, brands, and institutions can perform at their highest level.
              </p>
            </div>
            <div className="pt-2 border-t border-neutral-200">
              <p className="text-base sm:text-lg text-neutral-900 font-medium font-sans">
                I work closely with organisations, partners, and ecosystems that are serious about long-term capability,
                meaningful transformation, and building futures that last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
