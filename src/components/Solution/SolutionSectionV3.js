"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import solutions from "@/data/solutions.json";
import SolutionCardV3 from "./SolutionCardV3";

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

export default function SolutionSectionV3() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isSolutionPage = pathname === "/solution";
  const visibleSolutions = isSolutionPage ? solutions : solutions.slice(0, 2);
  const totalValuePoints = solutions.reduce(
    (count, solution) => count + (solution.valuePoints?.length ?? 0),
    0
  );

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto overflow-hidden rounded-[40px] border border-[rgb(var(--border))]/70 bg-[linear-gradient(180deg,#f7f4ee_0%,#f9f7f2_45%,#ffffff_100%)] px-5 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-8 lg:px-12 lg:py-[4.75rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,48,73,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(181,155,90,0.12),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),transparent_32%,rgba(0,48,73,0.02)_100%)]" />

        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{ x: [0, 16, -8, 0], y: [0, -10, 6, 0] }}
              transition={{
                duration: 14,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute left-6 top-16 h-36 w-36 rounded-full border border-white/35 bg-white/40 blur-2xl"
            />
            <motion.div
              animate={{ x: [0, -14, 10, 0], y: [0, 12, -7, 0] }}
              transition={{
                duration: 16,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute right-8 top-8 h-44 w-44 rounded-full border border-white/35 bg-[#f3e6c6]/45 blur-2xl"
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.75fr)] lg:items-start">
            <motion.div
              variants={itemVariants}
              className="max-w-3xl"
            >
              <span className="inline-flex rounded-full border border-[#003049]/12 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-navy))] shadow-sm">
                {isSolutionPage ? "Solution Pathways" : "Strategic Solutions"}
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
                {isSolutionPage
                  ? "Solution pathways built as strategic tracks, not generic tiles"
                  : "Strategic solution pathways aligned to business stage, risk profile, and growth ambition"}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {isSolutionPage
                  ? "Each pathway ties together challenge, response, and commercial outcome in a more narrative format, so visitors can quickly see which route matches their stage and ambition."
                  : "From early-stage founders to established organizations, our solutions are structured to connect IP decisions with market positioning, operational priorities, and scalable business outcomes."}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid gap-4 rounded-[30px] border border-white/80 bg-white/72 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-1"
            >
              <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Tracks
                </p>
                <p className="mt-3 text-4xl font-semibold text-slate-900">
                  {solutions.length}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Strategic Solution Tracks
                </p>
              </div>
              <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Value Points
                </p>
                <p className="mt-3 text-4xl font-semibold text-slate-900">
                  {totalValuePoints}+
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tailored levers across growth stages
                </p>
              </div>
              <div className="rounded-[24px] border border-slate-200/80 bg-[rgb(var(--brand-navy))] p-5 text-white">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#e3cd95]" />
                  <p className="text-sm leading-7 text-white/82">
                    Structured to make the right solution obvious without
                    overwhelming the page.
                  </p>
                </div>
              </div>
              <Link
                href={isSolutionPage ? "/contact" : "/solution"}
                className={`inline-flex items-center justify-center gap-2 rounded-[24px] px-6 py-4 text-sm font-semibold transition-colors duration-300 ${
                  isSolutionPage
                    ? "bg-[rgb(var(--brand-navy))] text-white hover:bg-[#0a425d]"
                    : "border border-[rgb(var(--brand-navy))]/10 bg-white text-[rgb(var(--brand-navy))] hover:bg-slate-50"
                }`}
              >
                {isSolutionPage ? "Talk to our team" : "Explore all solutions"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="relative mt-10 space-y-6"
          >
            {visibleSolutions.map((solution, index) => (
              <SolutionCardV3
                key={solution.id}
                solution={solution}
                index={index}
                variants={itemVariants}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
