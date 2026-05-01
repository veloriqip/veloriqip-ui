export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      category: "Startup & Founder",
      title: "Deep-Tech Startup Founder",
      testimonial:
        "VeloriqIP supported us from idea structuring to filing a well-defined patent application. Their technical inputs strengthened our claims and overall IP strategy. A reliable partner for innovation-driven startups.",
    },
    {
      id: 2,
      category: "Startup & Founder",
      title: "Early-Stage Startup",
      testimonial:
        "What impressed us about VeloriqIP was their ability to understand the technology before drafting. Their technical enhancement approach clearly improved our patent scope.",
    },
    {
      id: 3,
      category: "Startup & Founder",
      title: "SaaS Startup",
      testimonial:
        "The VeloriqIP team ensured clarity at every step—from prior art analysis to filing. Communication was structured and timelines were respected.",
    },
    {
      id: 4,
      category: "Startup & Founder",
      title: "Hardware Startup",
      testimonial:
        "VeloriqIP helped convert early concepts into a patent-ready invention. Their claim drafting reflected both technical depth and commercial foresight.",
    },
    {
      id: 5,
      category: "MSME & Industrial",
      title: "Manufacturing MSME",
      testimonial:
        "We approached VeloriqIP with an existing product. Their technical gap analysis and claim optimization added measurable value to our IP.",
    },
    {
      id: 6,
      category: "MSME & Industrial",
      title: "R&D Head – Industrial Firm",
      testimonial:
        "VeloriqIP handled prior-art searches and prosecution with professionalism. Examination responses were well-reasoned and strategically drafted.",
    },
    {
      id: 7,
      category: "MSME & Industrial",
      title: "Engineering Services Company",
      testimonial:
        "VeloriqIP aligns IP strategy with business objectives, making them a dependable long-term IP partner.",
    },
    {
      id: 8,
      category: "University & Academia",
      title: "University Professor",
      testimonial:
        "VeloriqIP translated academic research into industry-grade patent documentation while preserving technical integrity.",
    },
    {
      id: 9,
      category: "University & Academia",
      title: "PhD Research Scholar",
      testimonial:
        "As a researcher, I appreciated VeloriqIP’s structured guidance on disclosures, drawings, and claims. The process was transparent and well-managed.",
    },
    {
      id: 10,
      category: "University & Academia",
      title: "Technology Transfer Office",
      testimonial:
        "VeloriqIP’s systematic approach to invention disclosures and patent filing has supported our commercialization efforts.",
    },
    {
      id: 11,
      category: "Client Experience",
      title: "Multi-Patent Client",
      testimonial:
        "Across multiple filings, VeloriqIP maintained consistent drafting quality and strong prosecution support.",
    },
    {
      id: 12,
      category: "Client Experience",
      title: "First-Time Inventor",
      testimonial:
        "VeloriqIP explained the patent process clearly, including risks and scope, which helped set realistic expectations.",
    },
    {
      id: 13,
      category: "Client Experience",
      title: "Long-Term Client",
      testimonial:
        "VeloriqIP combines technical strength with a client-first approach, making them stand out in the IP services space.",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg bg-gray-800 mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
      <div className="flex gap-2">
        {/* <Image className="size-11 rounded-full" src={card.image} alt="User Image" width={44} height={44}/> */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-white">
            <p>{card.title}</p>
            <svg
              className="mt-0.5 fill-blue-500"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
              />
            </svg>
          </div>
          {/* <span className="text-xs text-slate-500">{card.handle}</span> */}
        </div>
      </div>
      <p className="text-sm py-4 text-white">{card.testimonial}</p>
    </div>
  );

  return (
    <>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
            .marquee-inner:hover {
                animation-play-state: paused;
            }
        `}</style>
      <div className="mb-20">
        <h1 className="font-semibold text-gray-900 text-3xl sm:text-4xl text-center mx-auto">
          Don&apos;t just take our words
        </h1>
        <p className="text-sm/relaxed text-gray-600 text-center mt-2 max-w-xl mx-auto">
          Hear directly from clients who have experienced our approach, expertise, and commitment firsthand.
        </p>
        <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...testimonials, ...testimonials].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...testimonials, ...testimonials].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </>
  );
}
