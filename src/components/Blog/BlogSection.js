"use client";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import blogs from "@/data/blogs.json";

export default function BlogSection() {
  const pathname = usePathname();

  return (
    <div className="mt-35 mb-20">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Insights you trust
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Strategic analysis and evidence-based insights to support your most
        important intellectual property decisions
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
        {pathname !== "/insights" && (
          <Link
            href="/insights/"
            className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-[rgb(var(--brand-navy))] hover:bg-[rgb(var(--btn-hover))] rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-300 "
          >
            Explore Insights
          </Link>
        )}
      </div>
    </div>
  );
}
