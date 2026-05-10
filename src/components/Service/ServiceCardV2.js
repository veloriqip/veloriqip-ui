"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { LOCAL_ASSET_VERSION } from "@/lib/assetVersion";

const cardThemes = [
  {
    glow: "from-[#d8c48d]/45 via-white/90 to-[#e9eef4]",
    chip: "bg-[#f7f0df] text-[#7f6530]",
    ring: "shadow-[0_0_0_1px_rgba(181,155,90,0.14)]",
  },
  {
    glow: "from-[#dbeaf3]/70 via-white/92 to-[#f4efe2]",
    chip: "bg-[#e8f2f8] text-[#29506a]",
    ring: "shadow-[0_0_0_1px_rgba(0,48,73,0.10)]",
  },
  {
    glow: "from-[#efe7d1]/70 via-white/92 to-[#eef5f1]",
    chip: "bg-[#f5efdd] text-[#7d6132]",
    ring: "shadow-[0_0_0_1px_rgba(181,155,90,0.12)]",
  },
];

export default function ServiceCardV2({
  service,
  index,
  variants,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();
  const theme = cardThemes[index % cardThemes.length];
  const previewFeatures = service.features?.slice(0, 3) ?? [];

  return (
    <motion.div
      variants={variants}
      whileHover={shouldReduceMotion ? undefined : { y: -10 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={`h-full ${className}`}
    >
      <Link
        href={`/service/${service.slug}`}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/[0.88] p-6 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] ${theme.ring}`}
      >
        <div
          className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${theme.glow}`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.4),transparent_55%)]" />

        <div className="relative flex items-start justify-between gap-4">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -5, 0], rotate: [0, -2, 0] }
            }
            transition={{
              duration: 6.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.18,
            }}
            className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-white/70 bg-white/90 p-3 shadow-sm"
          >
            <Image
              width={72}
              height={72}
              alt={service.title}
              src={`/services/${service.title}.png?v=${LOCAL_ASSET_VERSION}`}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          <div className="flex flex-col items-end gap-3">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${theme.chip}`}
            >
              Service {String(index + 1).padStart(2, "0")}
            </span>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { rotate: 8, scale: 1.05 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 transition-colors duration-300 group-hover:border-[#b59b5a]/40 group-hover:text-[rgb(var(--brand-navy))]"
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>

        <div className="relative mt-7 flex flex-1 flex-col">
          <h3 className="max-w-[18rem] text-xl font-semibold leading-snug text-slate-900">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {service.description}
          </p>

          <div className="mt-6 space-y-3">
            {previewFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 px-3.5 py-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[rgb(var(--brand-gold))]" />
                <p className="text-sm leading-6 text-slate-700">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4">
          <span className="text-sm font-medium text-slate-600">
            {service.features?.length ?? 0} focus areas
          </span>
          <span className="text-sm font-semibold text-[rgb(var(--brand-navy))] transition-transform duration-300 group-hover:translate-x-1">
            Explore
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
