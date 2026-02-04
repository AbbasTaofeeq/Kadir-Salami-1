import Image from "next/image";

export default function Partners() {
  return (
    <section
      id="partners"
      className="w-full bg-neutral-50 text-neutral-900 py-20 sm:py-16 lg:py-18"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-xs tracking-[0.22em] uppercase text-neutral-500 mb-4">
            Partners & Collaborators
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight text-neutral-900 mb-6"
            style={{ fontFamily: "var(--fancy-heading)" }}
          >
            Trusted by leading institutions
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            My work is strengthened by partnerships with world-class organizations that share my commitment to building coherent systems - systems that drive lasting impact and sustainable growth.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden bg-neutral-100/50 rounded-2xl py-12">
          {/* Gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-100/50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-100/50 to-transparent z-10" />

          {/* Track */}
          <div className="relative">
            <div className="flex items-center gap-12 animate-slide-slow hover:animation-pause">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={64}
                    height={64}
                    className="h-12 sm:h-14 lg:h-16 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Logo data */
const logos = [
  {
    src: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769426792/ITF_rqhfac.jpg",
    alt: "ITF",
  },
  {
    src: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769426792/AFIA_LOGO_BLACK_ORANGE_hdgc5k.jpg",
    alt: "AFIA",
  },
  {
    src: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769426792/Nigeria-Employers-Consultative-Association-NECA_kvx6mj.jpg",
    alt: "NECA",
  },
  {
    src: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769426792/FCMB_yudazl.png",
    alt: "FCMB",
  },
  {
    src: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769426792/Nigerian_Climate_Innovation_Center_NCIC_rshv2t.png",
    alt: "NCIC",
  },
  {
    src: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769426792/Bill_Melinda_Gates_Foundation_yv8lvq.png",
    alt: "Bill & Melinda Gates Foundation",
  },
];
