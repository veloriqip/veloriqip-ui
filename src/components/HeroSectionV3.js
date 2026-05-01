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
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className="relative min-h-[760px] sm:min-h-[820px] lg:min-h-screen"
          >
            <Image
              fill
              priority={page === 0}
              sizes="100vw"
              src={sliderContent[page].image}
              alt={sliderContent[page].title}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(2,12,24,0.88)_0%,rgba(2,12,24,0.72)_42%,rgba(2,12,24,0.38)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(181,155,90,0.2),transparent_35%)]" />

            <div className="relative z-10 container flex min-h-[760px] items-center px-4 py-24 sm:min-h-[820px] lg:min-h-screen lg:py-32">
              <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
                <div className="max-w-3xl space-y-8">
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
                    Protecting innovation with strategy and clarity
                  </div>

                  <div className="space-y-5">
                    <h1 className="text-4xl font-heading leading-tight text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
                      {sliderContent[page].title}
                    </h1>
                    <p className="max-w-2xl text-base font-body leading-8 text-white/85 sm:text-lg 2xl:text-2xl">
                      {sliderContent[page].subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
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
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {sliderContent[page].expertise.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.12 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.16]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--brand-gold),0.2)] text-[rgb(var(--brand-gold))]">
                        <area.icon className="text-xl" />
                      </div>
                      <span className="text-sm font-medium leading-6 text-white sm:text-base">
                        {area.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSectionV3;
