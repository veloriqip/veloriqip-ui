"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileAlt,
  FaLaptopCode,
  FaLightbulb,
  FaSearch,
  FaGavel,
  FaChessKnight,
  FaTrademark,
  FaClipboardCheck,
  FaUserCog,
  FaBalanceScale,
  FaSitemap,
  FaHandsHelping,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LOCAL_ASSET_VERSION } from "@/lib/assetVersion";

const HeroSectionV3 = () => {
  const router = useRouter();
  const [[page, direction], setPage] = useState([0, 0]);
  const [dragStart, setDragStart] = useState(null);

  const sliderContent = [
    {
      title: "Turning Ideas Into Protectable Innovations",
      subtitle:
        "We help innovators, startups, and enterprises transform technical ideas into structured, defensible intellectual property.",
      image: `/hero1.png?v=${LOCAL_ASSET_VERSION}`,
      expertise: [
        {
          label: "Patent Drafting & Filing",
          icon: FaFileAlt,
        },
        {
          label: "Technical Documentation",
          icon: FaLaptopCode,
        },
        {
          label: "Innovation Advisory",
          icon: FaLightbulb,
        },
        {
          label: "Prior Art Research",
          icon: FaSearch,
        },
      ],
    },
    {
      title: "Securing Intellectual Property With Precision and Authority",
      subtitle:
        "From filing to prosecution, we ensure your intellectual assets are protected with accuracy, strategy, and compliance.",
      image: `/hero2.png?v=${LOCAL_ASSET_VERSION}`,
      expertise: [
        {
          label: "Patent Prosecution",
          icon: FaGavel,
        },
        {
          label: "IP Filing Strategy",
          icon: FaChessKnight,
        },
        {
          label: "Trademark & Design Filings",
          icon: FaTrademark,
        },
        {
          label: "IP Compliance & Due Diligence",
          icon: FaClipboardCheck,
        },
      ],
    },
    {
      title: "Expert-Led IP Solutions Backed by Experience",
      subtitle:
        "Our multidisciplinary professionals combine technical knowledge, legal insight, and industry experience to deliver reliable IP outcomes.",
      image: `/hero3.png?v=${LOCAL_ASSET_VERSION}`,
      expertise: [
        {
          label: "Patent Analysts & Engineers",
          icon: FaUserCog,
        },
        {
          label: "IP Attorneys & Consultants",
          icon: FaBalanceScale,
        },
        {
          label: "Enterprise IP Management",
          icon: FaSitemap,
        },
        {
          label: "Ongoing IP Support",
          icon: FaHandsHelping,
        },
      ],
    },
  ];
  const paginate = (newDirection) => {
    setPage(([currentPage]) => {
      const nextPage = (currentPage + newDirection + 3) % 3;
      return [nextPage, newDirection];
    });
  };
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [page]);

  const handleDragStart = (event) => {
    setDragStart(event.clientX);
  };

  const handleDragEnd = (event) => {
    if (dragStart !== null) {
      const diff = dragStart - event.clientX;
      if (Math.abs(diff) > 100) {
        paginate(diff > 0 ? 1 : -1);
      }
    }
    setDragStart(null);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[rgb(var(--brand-navy))]" />

      <div className="relative">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.9}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="relative min-h-[760px] sm:min-h-[820px] lg:min-h-screen"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={sliderContent[page].image}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                fill
                priority={page === 0}
                sizes="100vw"
                src={sliderContent[page].image}
                alt={sliderContent[page].title}
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,12,24,0.35)_0%,rgba(2,12,24,0.62)_38%,rgba(2,12,24,0.78)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(181,155,90,0.18),transparent_30%)]" />

          <div className="relative z-10 flex min-h-[760px] items-center justify-center px-4 py-24 sm:min-h-[820px] sm:px-6 lg:min-h-screen lg:px-8 lg:py-32">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-8 text-center"
              >
                <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6">
                  <div className="inline-flex items-center justify-center self-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
                    Protecting innovation with strategy and clarity
                  </div>

                  <div className="mx-auto flex max-w-4xl flex-col items-center space-y-5 text-center">
                    <h1 className="text-4xl font-heading leading-tight text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
                      {sliderContent[page].title}
                    </h1>
                    <p className="mx-auto max-w-3xl text-base font-body leading-8 text-white/85 sm:text-lg 2xl:text-2xl">
                      {sliderContent[page].subtitle}
                    </p>
                  </div>
                </div>

                <div className="mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-xl bg-[rgb(var(--brand-gold))] px-8 py-4 text-base font-semibold text-[rgb(var(--brand-navy))] shadow-lg shadow-black/20 transition-colors duration-300 hover:bg-[#d3ba7c]"
                    onClick={() => router.push("/contact/")}
                  >
                    Get started
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-xl border border-white/30 bg-white/[0.08] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.16]"
                    onClick={() => router.push("/service/")}
                  >
                    Explore services
                  </motion.button>
                </div>

                {/* <div className="mx-auto flex w-full max-w-4xl flex-wrap items-stretch justify-center gap-4">
                  {sliderContent[page].expertise.map((area, index) => (
                    <motion.div
                      key={`${page}-${index}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                      className="flex min-h-[150px] w-full max-w-xs flex-col items-center justify-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 text-center text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.16]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--brand-gold),0.2)] text-[rgb(var(--brand-gold))]">
                        <area.icon className="text-xl" />
                      </div>
                      <span className="text-sm font-medium leading-6 text-white sm:text-base">
                        {area.label}
                      </span>
                    </motion.div>
                  ))}
                </div> */}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionV3;
