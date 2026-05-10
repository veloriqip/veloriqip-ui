"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    category: "Startup & Founder",
    title: "Deep-Tech Startup Founder",
    testimonial:
      "Veloriq IP supported us from idea structuring to filing a well-defined patent application. Their technical inputs strengthened our claims and overall IP strategy. A reliable partner for innovation-driven startups.",
  },
  {
    id: 2,
    category: "Startup & Founder",
    title: "Early-Stage Startup",
    testimonial:
      "What impressed us about Veloriq IP was their ability to understand the technology before drafting. Their technical enhancement approach clearly improved our patent scope.",
  },
  {
    id: 3,
    category: "Startup & Founder",
    title: "SaaS Startup",
    testimonial:
      "The Veloriq IP team ensured clarity at every step—from prior art analysis to filing. Communication was structured and timelines were respected.",
  },
  {
    id: 4,
    category: "Startup & Founder",
    title: "Hardware Startup",
    testimonial:
      "Veloriq IP helped convert early concepts into a patent-ready invention. Their claim drafting reflected both technical depth and commercial foresight.",
  },
  {
    id: 5,
    category: "MSME & Industrial",
    title: "Manufacturing MSME",
    testimonial:
      "We approached Veloriq IP with an existing product. Their technical gap analysis and claim optimization added measurable value to our IP.",
  },
  {
    id: 6,
    category: "MSME & Industrial",
    title: "R&D Head – Industrial Firm",
    testimonial:
      "Veloriq IP handled prior-art searches and prosecution with professionalism. Examination responses were well-reasoned and strategically drafted.",
  },
  {
    id: 7,
    category: "MSME & Industrial",
    title: "Engineering Services Company",
    testimonial:
      "Veloriq IP aligns IP strategy with business objectives, making them a dependable long-term IP partner.",
  },
  {
    id: 8,
    category: "University & Academia",
    title: "University Professor",
    testimonial:
      "Veloriq IP translated academic research into industry-grade patent documentation while preserving technical integrity.",
  },
  {
    id: 9,
    category: "University & Academia",
    title: "PhD Research Scholar",
    testimonial:
      "As a researcher, I appreciated Veloriq IP’s structured guidance on disclosures, drawings, and claims. The process was transparent and well-managed.",
  },
  {
    id: 10,
    category: "University & Academia",
    title: "Technology Transfer Office",
    testimonial:
      "Veloriq IP’s systematic approach to invention disclosures and patent filing has supported our commercialization efforts.",
  },
  {
    id: 11,
    category: "Client Experience",
    title: "Multi-Patent Client",
    testimonial:
      "Across multiple filings, Veloriq IP maintained consistent drafting quality and strong prosecution support.",
  },
  {
    id: 12,
    category: "Client Experience",
    title: "First-Time Inventor",
    testimonial:
      "Veloriq IP explained the patent process clearly, including risks and scope, which helped set realistic expectations.",
  },
  {
    id: 13,
    category: "Client Experience",
    title: "Long-Term Client",
    testimonial:
      "Veloriq IP combines technical strength with a client-first approach, making them stand out in the IP services space.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function getInitials(title) {
  return title
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({ item, featured = false }) {
  const shouldReduceMotion = useReducedMotion();

  if (featured) {
    return (
      <motion.article
        variants={itemVariants}
        whileHover={shouldReduceMotion ? undefined : { y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[32px] border border-white/80 bg-[rgb(var(--brand-navy))] p-7 text-white shadow-[0_18px_50px_rgba(0,48,73,0.18)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-sm font-semibold tracking-[0.18em] text-white/88">
              {getInitials(item.title)}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                Featured Voice
              </p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-white/68">{item.category}</p>
            </div>
          </div>
          <Quote className="h-8 w-8 shrink-0 text-[#e3cd95]" />
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/88">
          &ldquo;{item.testimonial}&rdquo;
        </p>

        <div className="mt-8 flex items-center gap-3 border-t border-white/12 pt-5 text-sm text-white/74">
          <BadgeCheck className="h-4 w-4 text-[#e3cd95]" />
          Trusted for technically grounded and commercially aware IP work.
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout
      variants={itemVariants}
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[28px] border border-white/80 bg-white/86 p-5 shadow-[0_14px_36px_rgba(15,23,42,0.06)] backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50 text-xs font-semibold tracking-[0.16em] text-[rgb(var(--brand-navy))]">
            {getInitials(item.title)}
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{item.category}</p>
          </div>
        </div>
        <Quote className="h-5 w-5 shrink-0 text-[#b59b5a]" />
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600">
        &ldquo;{item.testimonial}&rdquo;
      </p>
    </motion.article>
  );
}

export default function TestimonialsSectionV2() {
  const pathname = usePathname();
  const isTestimonialsPage = pathname === "/testimonials";
  const categories = useMemo(() => {
    const counts = testimonials.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { label: "All Voices", value: "all", count: testimonials.length },
      ...Object.entries(counts).map(([label, count]) => ({
        label,
        value: label,
        count,
      })),
    ];
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials = useMemo(() => {
    if (activeCategory === "all") return testimonials;
    return testimonials.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const homepageItems = filteredTestimonials.slice(0, 5);
  const visibleItems = isTestimonialsPage
    ? filteredTestimonials
    : homepageItems;
  const [featured, ...restItems] = visibleItems;

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto overflow-hidden rounded-[40px] border border-[rgb(var(--border))]/70 bg-[linear-gradient(180deg,#f7f4ee_0%,#f9f7f2_45%,#ffffff_100%)] px-5 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-8 lg:px-12 lg:py-[4.75rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,155,90,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,48,73,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_32%,rgba(0,48,73,0.02)_100%)]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.82fr)] lg:items-start">
            <motion.div variants={itemVariants} className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#003049]/12 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-navy))] shadow-sm">
                {isTestimonialsPage ? "Client Testimonials" : "Client Trust"}
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
                {isTestimonialsPage
                  ? "Feedback shaped by technical depth, clarity, and dependable delivery"
                  : "Client feedback that reflects technical credibility, responsiveness, and long-term working confidence"}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {isTestimonialsPage
                  ? "A more structured view of client experience across founders, MSMEs, academia, and repeat innovators, without the noise of an auto-scrolling carousel."
                  : "From first-time inventors to established organizations, these perspectives show how Veloriq IP is experienced as a practical business partner, not just a filing support provider."}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[30px] border border-white/80 bg-white/78 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                What Stands Out
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#b59b5a]" />
                    <p className="text-sm leading-7 text-slate-600">
                      {isTestimonialsPage
                        ? "Clients consistently highlight technical understanding before drafting, not just paperwork execution."
                        : "Clients repeatedly point to stronger technical understanding, better communication, and commercially aware guidance."}
                    </p>
                  </div>
                </div>
                <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--brand-navy))]" />
                    <p className="text-sm leading-7 text-slate-600">
                      {isTestimonialsPage
                        ? `${categories.length - 1} audience groups represented across ${testimonials.length} testimonial statements.`
                        : "The homepage preview surfaces cross-section feedback from different client types while the dedicated page expands the full voice set."}
                    </p>
                  </div>
                </div>
              </div>
              {!isTestimonialsPage ? (
                <Link
                  href="/testimonials"
                  className="mt-5 inline-flex items-center gap-2 rounded-[22px] bg-[rgb(var(--brand-navy))] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0a425d]"
                >
                  Explore client feedback
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="relative mt-10 flex flex-wrap gap-3"
          >
            {categories.map((category) => {
              const isActive = category.value === activeCategory;
              return (
                <motion.button
                  key={category.value}
                  type="button"
                  variants={itemVariants}
                  onClick={() => setActiveCategory(category.value)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "border-[rgb(var(--brand-navy))] bg-[rgb(var(--brand-navy))] text-white"
                      : "border-slate-200 bg-white/86 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs ${
                      isActive ? "bg-white/14 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {category.count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${pathname}-${activeCategory}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
              className="relative mt-8 space-y-6"
            >
              {featured ? <TestimonialCard item={featured} featured /> : null}

              <motion.div
                variants={containerVariants}
                className={`grid gap-5 ${
                  isTestimonialsPage ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-4"
                }`}
              >
                {restItems.map((item) => (
                  <TestimonialCard key={item.id} item={item} />
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
