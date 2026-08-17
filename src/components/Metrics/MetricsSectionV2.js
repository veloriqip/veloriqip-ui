"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { statsData } from "@/data/stats";
import { LOCAL_ASSET_VERSION } from "@/lib/assetVersion";
import StatsBarChart from "./StatsBarChart";
import { RetentionChart } from "./RetentionChart";

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const highlightStats = [
  {
    label: "IP Service Verticals",
    value: 14,
    suffix: "+",
    note: "Coverage across patents, trademarks, strategy, and more.",
  },
  {
    label: "IP Matters Executed",
    value: 124,
    suffix: "+",
    note: "A growing body of work handled with consistency.",
  },
  {
    label: "Clients Served",
    value: 29,
    suffix: "+",
    note: "Support across founders, MSMEs, institutions, and teams.",
  },
];

function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimated(true);

        if (shouldReduceMotion) {
          setCount(value);
          observer.disconnect();
          return;
        }

        const duration = 1200;
        let startTime;

        const tick = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          }
        };

        window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, shouldReduceMotion, value]);

  return (
    <span
      ref={ref}
      className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
    >
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ stat }) {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-[26px] border border-white/80 bg-white/82 p-5 shadow-[0_14px_35px_rgba(15,23,42,0.06)] backdrop-blur-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {stat.label}
      </p>
      <div className="mt-4">
        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{stat.note}</p>
    </motion.div>
  );
}

function ChartShell({ title, subtitle, children, footer }) {
  return (
    <motion.div
      variants={itemVariants}
      className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Metrics View
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">
            {title}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="mt-6">{children}</div>
      {footer ? (
        <div className="mt-5 border-t border-slate-200/80 pt-4 text-sm leading-6 text-slate-600">
          {footer}
        </div>
      ) : null}
    </motion.div>
  );
}

export default function MetricsSectionV2() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isMetricsPage = pathname === "/metrics";
  const totalMetrics = statsData.length;

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto overflow-hidden rounded-[40px] border border-[rgb(var(--border))]/70 bg-[linear-gradient(180deg,#f7f4ee_0%,#f9f7f2_45%,#ffffff_100%)] px-5 py-14 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:px-8 lg:px-12 lg:py-[4.75rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,48,73,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(181,155,90,0.12),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_32%,rgba(0,48,73,0.02)_100%)]" />

        {!shouldReduceMotion && (
          <>
            <motion.div
              animate={{ x: [0, 14, -8, 0], y: [0, -10, 6, 0] }}
              transition={{
                duration: 14,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute left-8 top-14 h-36 w-36 rounded-full border border-white/35 bg-white/40 blur-2xl"
            />
            <motion.div
              animate={{ x: [0, -14, 8, 0], y: [0, 12, -7, 0] }}
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.82fr)] lg:items-start">
            <motion.div variants={itemVariants} className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#003049]/12 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgb(var(--brand-navy))] shadow-sm">
                {isMetricsPage ? "Performance Metrics" : "Performance Metrics"}
              </span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
                {isMetricsPage
                  ? "Metrics that make execution feel tangible, not just claimed"
                  : "Performance indicators that reflect execution capacity, client confidence, and delivery consistency"}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {isMetricsPage
                  ? "These metrics reflect the scale of execution, continuity of client relationships, and operational discipline that support Veloriq IP's work across innovation-led engagements."
                  : "These numbers are intended to show how Veloriq IP supports business decisions with dependable execution, growing domain coverage, and strong long-term client relationships."}
              </p>

              {!isMetricsPage ? (
                <motion.div
                  variants={containerVariants}
                  className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {highlightStats.map((stat) => (
                    <StatCard key={stat.label} stat={stat} />
                  ))}
                </motion.div>
              ) : null}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[30px] border border-white/80 bg-[rgb(var(--brand-navy))] p-6 text-white shadow-[0_16px_45px_rgba(0,48,73,0.18)]"
            >
              {!isMetricsPage ? (
                <div className="mb-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/8">
                  <div className="relative aspect-[16/9]">
                    <Image
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      src={`/metrics.png?v=${LOCAL_ASSET_VERSION}`}
                      alt="Veloriq IP metrics overview"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/62">
                    Data Panel
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">
                    Operational confidence backed by repeatable delivery
                  </h3>
                </div>
                <TrendingUp className="mt-1 h-5 w-5 shrink-0 text-[#e3cd95]" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[22px] border border-white/10 bg-white/8 p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#e3cd95]" />
                    <p className="text-sm leading-7 text-white/82">
                      {isMetricsPage
                        ? "Metrics are presented as a signal of consistency, coverage, and client trust rather than vanity growth alone."
                        : "Business outcomes improve when IP support is repeatable, measurable, and aligned with operational priorities."}
                    </p>
                  </div>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/8 p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#e3cd95]" />
                    <p className="text-sm leading-7 text-white/82">
                      {isMetricsPage
                        ? `${totalMetrics} tracked indicators currently surface the firm's delivery footprint and retention strength.`
                        : "The preview highlights a concise set of signals that matter to founders, operators, and innovation-led teams evaluating capability."}
                    </p>
                  </div>
                </div>
              </div>

              {!isMetricsPage ? (
                <Link
                  href="/metrics"
                  className="mt-6 inline-flex items-center gap-2 rounded-[22px] bg-white px-5 py-3 text-sm font-semibold text-[rgb(var(--brand-navy))] transition-colors duration-300 hover:bg-[#f8f4e8]"
                >
                  Explore full metrics
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </motion.div>
          </div>

          {isMetricsPage ? (
            <motion.div
              variants={containerVariants}
              className="relative mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
            >
              {highlightStats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </motion.div>
          ) : null}

          {isMetricsPage ? (
            <motion.div
              variants={containerVariants}
              className="relative mt-12 space-y-6"
            >
              <motion.div variants={itemVariants} className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Expanded View
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-slate-900">
                  A clearer read on coverage and retention
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  The charts below turn the snapshot into a more digestible
                  story: breadth across core indicators and the stickiness of
                  client relationships.
                </p>
              </motion.div>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
                <ChartShell
                  title="Operational footprint"
                  subtitle="A comparative view across the firm’s current headline metrics."
                  footer="Useful for quickly seeing which areas reflect the broadest current scale."
                >
                  <div className="h-[360px]">
                    <StatsBarChart />
                  </div>
                </ChartShell>
              </div>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
