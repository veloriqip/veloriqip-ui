"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard(props) {

  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      key={props?.blog?.id}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
      className="flex flex-col items-center text-center rounded-xl border border-violet-200 w-80 h-150 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Tooltip */}
      <span
        className="absolute px-2 py-1 z-10 whitespace-nowrap text-sm rounded bg-white/20 border border-gray-200 backdrop-blur-[4px] text-gray-900 font-medium pointer-events-none"
        style={{
          top: position.y + 10,
          left: position.x + 10,
          opacity: tooltipVisible ? 1 : 0,
          transform: tooltipVisible ? "scale(1)" : "scale(0.6)",
          transition: "all 0.2s ease-out",
        }}
      >
        Author: {props?.blog?.author.name}
      </span>

      {/* Image */}
      <Image
        width={382}
        height={224}
        className="rounded-t-lg w-full h-56 object-cover object-top"
        src={props.blog.image}
        alt={props.blog.title || ""}
      />

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h5 className="text-base font-semibold text-slate-700">
          {props?.blog?.title}
        </h5>
        <p className="text-md mt-2 text-slate-600">
          {props?.blog?.description}
        </p>
        <div className="mt-auto">
          <Link
            href={"/insights/" + props.blog.slug}
            className="inline-flex items-center text-sm font-medium text-center text-[rgb(var(--brand-navy))] hover:text-[rgb(var(--btn-hover))] rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-300"
            aria-label={"Read full article about" + props.blog.title}
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
