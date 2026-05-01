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

const HeroSectionV2 = () => {
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
    <div className="relative min-h-310 md:min-h-350 lg:min-h-250 xl:min-h-200 2xl:min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[rgb(var(--brand-navy))] opacity-5 bg-cover bg-center mix-blend-overlay" />

      <div className="container px-4 py-20 lg:py-28">
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
            className="absolute inset-0 grid lg:grid-cols-2 gap-6 items-center"
          >
            <div className="space-y-10 px-15 xl:mt-10 mt-25 md:mt-35">
              <div>
                <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-heading text-card-foreground mb-6 leading-tight">
                  {sliderContent[page].title}
                </h1>
                <p className="text-lg 2xl:text-2xl text-muted-foreground/90">
                  {sliderContent[page].subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {sliderContent[page].expertise.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.5 }}
                    className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <area.icon className="text-[rgb(var(--brand-gold))] text-2xl" />
                    <span className="text-md font-body text-card-foreground">
                      {area.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              
            </div>

            <motion.div className="space-y-10 px-15">
              <Image
                src={sliderContent[page].image}
                alt="Tech Training"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-white/10 backdrop-blur-sm"
                width={715}
                height={392}
              />
              <div className="flex flex-col sm:flex-row-reverse">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 cursor-pointer bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] text-white rounded-xl font-body shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  onClick={() => router.push("/contact/")}
                >
                  Get started
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSectionV2;
