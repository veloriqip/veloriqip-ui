"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import services from "@/data/services.json";
import ServiceCardV2 from "./ServiceCardV2";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function getLastRowAlignmentClass(index, total) {
  const remainder = total % 3;

  if (remainder === 1 && index === total - 1) {
    return "xl:col-start-3";
  }

  if (remainder === 2 && index === total - 2) {
    return "xl:col-start-2";
  }

  if (remainder === 2 && index === total - 1) {
    return "xl:col-start-4";
  }

  return "";
}

export default function ServiceSectionV2() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isServicePage = pathname === "/service";
  const visibleServices = isServicePage ? services : services.slice(0, 3);
  const totalServices = visibleServices.length;
  const totalCapabilities = services.reduce(
    (count, service) => count + (service.features?.length ?? 0),
    0
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto overflow-hidden rounded-[36px] border border-[rgb(var(--border))]/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,245,242,0.96))] px-5 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-8 lg:px-12 lg:py-[4.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,155,90,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,48,73,0.10),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_40%,rgba(0,48,73,0.03)_100%)]" />

        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{ x: [0, 18, -12, 0], y: [0, -14, 8, 0] }}
              transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -left-16 top-20 h-44 w-44 rounded-full bg-[#b59b5a]/10 blur-3xl"
            />
            <motion.div
              animate={{ x: [0, -16, 10, 0], y: [0, 16, -10, 0] }}
              transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute right-0 top-10 h-52 w-52 rounded-full bg-[#003049]/8 blur-3xl"
            />
          </>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
            <motion.div variants={itemVariants} className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#b59b5a]/20 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-navy))] shadow-sm">
                {isServicePage ? "Service Portfolio" : "IP Services"}
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[2.8rem]">
                {isServicePage
                  ? "Services designed to move ideas from concept to defensible assets"
                  : "Business-focused IP services built to protect innovation and support growth"}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {isServicePage
                  ? "Every engagement is built to stay technically sharp, legally aligned, and commercially useful, with motion and interaction kept deliberately lightweight so the experience still feels fast."
                  : "We help businesses secure core innovations, reduce avoidable IP risk, and create stronger foundations for commercialization, investment readiness, and long-term competitive advantage."}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-start lg:justify-end"
            >
              <div className="min-w-[170px] rounded-[24px] border border-white/80 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm">
                <p className="text-3xl font-semibold text-slate-900">
                  {services.length}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Core Service Verticals
                </p>
              </div>
              <div className="min-w-[170px] rounded-[24px] border border-white/80 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm">
                <p className="text-3xl font-semibold text-slate-900">
                  {totalCapabilities}+
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Practical Capability Blocks
                </p>
              </div>
              <Link
                href={isServicePage ? "/contact" : "/service"}
                className={`inline-flex items-center justify-center gap-2 rounded-[24px] px-6 py-4 text-sm font-semibold transition-colors duration-300 ${
                  isServicePage
                    ? "border border-[rgb(var(--brand-navy))]/10 bg-white text-[rgb(var(--brand-navy))] hover:bg-slate-50"
                    : "bg-[rgb(var(--brand-navy))] text-white hover:bg-[#0a425d]"
                }`}
              >
                {isServicePage ? "Talk to our team" : "Explore all services"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-6"
          >
            {visibleServices.map((service, index) => (
              <ServiceCardV2
                key={service.id}
                service={service}
                index={index}
                variants={itemVariants}
                className={`xl:col-span-2 ${getLastRowAlignmentClass(
                  index,
                  totalServices
                )}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
