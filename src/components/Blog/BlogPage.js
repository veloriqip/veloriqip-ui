import Image from "next/image";

export default function BlogPage({
  blog
}) {
  const { title, content, author, publishedAt, image } = blog;

  return (
    <>
      {blog && (
        <div>
          <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
              <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                {/* HEADER */}
                <header className="mb-4 lg:mb-6 not-prose">
                  <address className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                      <Image
                        width={64}
                        height={64}
                        className="mr-4 w-16 h-16 rounded-full"
                        src={author?.avatar}
                        alt={author?.name}
                      />
                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          {author?.name}
                        </p>
                        <p className="text-base text-gray-500">
                          {author?.role}
                        </p>
                        <p className="text-base text-gray-500">
                          <time dateTime={publishedAt?.iso}>
                            {publishedAt?.label}
                          </time>
                        </p>
                      </div>
                    </div>
                  </address>

                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                    {title}
                  </h1>

                  <Image width={650} height={250} src={image} alt="" />
                </header>

                {/* BLOG BODY */}
                <BlogContent content={content} />
              </article>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Content Renderer                             */
/* -------------------------------------------------------------------------- */

function BlogContent({ content }) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="text-2xl font-bold text-gray-900 mt-10"
              >
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="text-base leading-relaxed text-gray-700"
              >
                {block.text}
              </p>
            );

          case "list":
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
