import BlogPage from "@/components/Blog/BlogPage";
import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";

/* -------------------- METADATA -------------------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: blog.title,
    alternates: {
      canonical: `https://veloriqip.com/insights/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      url: `https://veloriqip.com/insights/${blog.slug}`,
      type: "article",
      images: [`https://veloriqip.com${blog.image}`],
    },
  };
}


/* -------------------- PAGE -------------------- */
export default async function Page({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  return (
    <>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `https://veloriqip.com/insights/${blog.slug}#blogposting`,

      headline: blog.title,

      image: {
        "@type": "ImageObject",
        url: `https://veloriqip.com${blog.image}`,
      },

      datePublished: blog.publishedAt?.iso ?? "2026-01-01",

      author: {
        "@type": "Organization",
        "@id": "https://veloriqip.com/#organization",
        name: "VeloriqIP",
        url: "https://veloriqip.com",
      },

      publisher: {
        "@type": "Organization",
        "@id": "https://veloriqip.com/#organization",
        name: "VeloriqIP",
        logo: {
          "@type": "ImageObject",
          url: "https://veloriqip.com/logo.svg",
        },
      },

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://veloriqip.com/insights/${blog.slug}`,
      },
    }),
  }}
/>


      <div className="mt-35">{blog && <BlogPage blog={blog} />}</div>
    </>
  );
}

/* -------------------- STATIC GENERATION -------------------- */
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
