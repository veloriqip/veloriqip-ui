"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import StatsBarChart from "./StatsBarChart";
import { RetentionChart } from "./RetentionChart";

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const animate = () => {
      let start = 0;
      const duration = 1200;
      const step = 16;
      const increment = value / (duration / step);

      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(intervalRef.current);
        } else {
          setCount(Math.floor(start));
        }
      }, step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0); 
          animate();
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [value]);

  return (
    <span
      ref={ref}
      className="text-4xl text-[rgb(var(--brand-gold))] font-semibold"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  const pathname = usePathname();
  const stats = [
    { value: 4, suffix: "+", label: "Years Experience" },
    { value: 14, suffix: "+", label: "IP Service Verticals" },
    { value: 29, suffix: "+", label: "Clients Served" },
    { value: 96, suffix: "%", label: "Client Retention" },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <Image
            src="/metrics.png"
            className="rounded-lg"
            alt=""
            width={576}
            height={384}
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Delivering Measurable Impact Through Consistent Performance
            </h3>
            <p className="mt-3 max-w-xl">
              Key metrics that reflect our experience, scale, and commitment to
              reliable outcomes.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <Counter value={item.value} suffix={item.suffix} />
                  <p className="mt-3 font-medium">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {pathname !== "/metrics" ? (
          <Link
            href="/metrics"
            className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-300 "
            aria-label={`See more Metrics`}
          >
            See more
          </Link>
        ) : (
          <div >
            <p className="flex flex-wrap items-center justify-center gap-8 pt-12 mb-20 text-gray-800 text-3xl font-semibold sm:text-4xl">Metrics</p>
            <div className="grid md:grid-cols-2 gap-50 px-10">
              <StatsBarChart />
              <RetentionChart />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
