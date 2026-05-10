"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CircleAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { LOCAL_ASSET_VERSION } from "@/lib/assetVersion";

const cardThemes = [
  {
    panel: "from-[#032f45] to-[#0d4863]",
    chip: "bg-white/12 text-white/82",
    accent: "text-[#2a536e]",
    border: "border-[#d8e7ef]",
  },
  {
    panel: "from-[#5e4920] to-[#8c7040]",
    chip: "bg-white/14 text-white/84",
    accent: "text-[#7a6133]",
    border: "border-[#ece2cc]",
  },
  {
    panel: "from-[#18384a] to-[#2a5b72]",
    chip: "bg-white/12 text-white/82",
    accent: "text-[#244a61]",
    border: "border-[#dbe7ef]",
  },
];

export default function SolutionCardV3({
  solution,
  index,
  variants,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();
  const theme = cardThemes[index % cardThemes.length];
  const previewPoints = solution.valuePoints?.slice(0, 3) ?? [];

  return (
    <motion.div
      variants={variants}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={`h-full ${className}`}
    >
      <Link
        href={`/solution/${solution.slug}`}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] border bg-white/[0.96] shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] ${theme.border}`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_38%)]" />

        <div className="relative grid min-h-full lg:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)]">
          <div
            className={`relative overflow-hidden bg-gradient-to-br ${theme.panel} p-6 text-white sm:p-7`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_44%)]" />
            <div className="relative flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${theme.chip}`}
                >
                  Solution {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                  Tailored Track
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/62">
                  Built For
                </p>
                <h3 className="mt-3 max-w-sm text-2xl font-semibold leading-tight sm:text-[2rem]">
                  {solution.audience}
                </h3>
              </div>

              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { y: [0, -4, 0], scale: [1, 1.02, 1] }
                }
                transition={{
                  duration: 6.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.16,
                }}
                className="relative mt-8 overflow-hidden rounded-[28px] border border-white/12 bg-white/10 p-4 backdrop-blur-[2px]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.1),transparent_55%)]" />
                <div className="relative flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[20px] border border-white/14 bg-white/10">
                    <Image
                      fill
                      sizes="80px"
                      src={`/solutions/${solution.audience}.png?v=${LOCAL_ASSET_VERSION}`}
                      alt={solution.audience}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                      Focus
                    </p>
                    <p className="mt-1 max-w-[13rem] text-sm leading-6 text-white/82">
                      IP strategy aligned to growth stage, risk exposure, and commercial direction.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="mt-8 border-t border-white/12 pt-5">
                <p className="text-sm leading-7 text-white/78">
                  {solution.outcome}
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Strategic Direction
                </p>
                <h4 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-slate-900">
                  {solution.headline}
                </h4>
              </div>
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-transform duration-300 group-hover:translate-x-1 lg:flex">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="rounded-[26px] border border-slate-200/85 bg-slate-50/90 p-4">
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#9f8549]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Challenge
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {solution.challenge}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] border border-slate-200/85 bg-white p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className={`mt-0.5 h-4 w-4 shrink-0 ${theme.accent}`} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Response
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {solution.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {previewPoints.map((point) => (
                <div
                  key={point}
                  className="inline-flex items-start gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5"
                >
                  <Sparkles className={`mt-0.5 h-4 w-4 shrink-0 ${theme.accent}`} />
                  <span className="text-sm leading-6 text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-200/85 pt-4">
              <span className="text-sm font-medium text-slate-500">
                {solution.valuePoints?.length ?? 0} value levers
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--brand-navy))] transition-transform duration-300 group-hover:translate-x-1">
                Explore solution
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
