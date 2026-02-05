import Image from "next/image";

const AUDIENCE = [
	{
		title: "Executive Teams",
		desc: "Designing clarity across roles, decisions, and operating rhythms.",
		img: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1770221473/WhatsApp_Image_2026-02-04_at_17.00.42_1_ezucvs.jpg",
		alt: "Executive team in meeting",
	},
	{
		title: "Advisors & Boards",
		desc: "Providing structured thinking to guide complex strategic decisions.",
		img: "https://res.cloudinary.com/daqmbfctv/image/upload/e_improve,e_sharpen/v1769431482/Screenshot_2286_ivnuzz.png",
		alt: "Boardroom discussion",
	},
	{
		title: "Founders & CEOs",
		desc: "Helping leaders align vision, structure, and execution as organisations scale.",
		img: "https://res.cloudinary.com/daqmbfctv/image/upload/v1769431484/Screenshot_2288_cqdosu.png",
		alt: "Founder presenting",
	},
	{
		title: "Institutions & Organisations",
		desc: "Supporting long-term transformation without disruption or noise.",
		img: "https://res.cloudinary.com/daqmbfctv/image/upload/v1769011670/Screenshot_2282_jtmjce.png",
		alt: "Institutional leaders",
	},
];

export default function WhoIWorkWithSection() {
	return (
		<section
			id="who-i-work-with"
			className="w-full bg-gradient-to-b from-white via-amber-50 to-white text-slate-900 py-16 sm:py-20 md:py-20 lg:py-24"
		>
			<div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
				{/* Section heading */}
				<div className="text-center mb-10">
					<h1
						className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3"
						style={{
							fontFamily: "Playfair Display, serif",
							letterSpacing: "-0.02em",
						}}
					>
						Leaders I Partner With
					</h1>
					<div className="mx-auto h-0.5 w-20 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
					<p
						className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
						style={{
							fontFamily:
								'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
						}}
					>
						I work alongside leaders who shape the future, navigate key decisions, and sustain meaningful transformation in their institutions.
					</p>
				</div>

				{/* Audience grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{AUDIENCE.map((item) => (
						<div
							key={item.title}
							className="relative flex flex-col md:flex-row items-start gap-4 p-4 sm:p-5 rounded-xl border border-neutral-200 bg-white/95 shadow-sm hover:shadow-md transition-transform duration-150 transform hover:-translate-y-0.5"
						>
							<div className="absolute inset-y-0 left-0 w-1 rounded-l-md bg-gradient-to-b from-amber-500 to-amber-400" />

							<div className="flex-shrink-0 w-full md:w-28 h-28 md:h-20 rounded-md overflow-hidden relative bg-slate-100">
								<Image
									src={item.img}
									alt={item.alt}
									fill
									sizes="(max-width: 640px) 100vw, 120px"
									className="object-cover"
								/>
							</div>

							<div className="pl-2 md:pl-4 pr-2">
								<h3
									className="text-lg font-semibold mb-1 text-amber-600"
									style={{
										fontFamily: "Playfair Display, serif",
										letterSpacing: "-0.01em",
									}}
								>
									{item.title}
								</h3>
								<p
									className="text-sm text-slate-600 leading-relaxed"
									style={{
										fontFamily:
											'Inter, Roboto, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
									}}
								>
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

