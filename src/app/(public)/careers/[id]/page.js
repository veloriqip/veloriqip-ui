import jobs from "@/data/jobs.json";
import Link from "next/link";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const {id} = await params
  const job = jobs.find((j) => j.id.toString() === id);
  if (!job) return {};

  return {
    title: `${job.title} – ${job.location}`,
    description: `Apply for the ${job.title} role at VeloriqIP. ${job.summary}`,
    alternates: {
      canonical: `https://veloriqip.com/careers/${job.id}`,
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const job = jobs.find((j) => j.id.toString() === id);

  if (!job) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            description: `
        ${job.summary}
        Responsibilities: ${job.responsibilities.join(", ")}
        Requirements: ${job.requirements.join(", ")}
      `,
            employmentType: "FULL_TIME",
            datePosted: job.postedOn,
            validThrough: "2026-06-30",
            hiringOrganization: {
              "@type": "Organization",
              name: "VeloriqIP",
              sameAs: "https://veloriqip.com",
              logo: "https://veloriqip.com/logo.svg",
            },
            "jobLocationType": "TELECOMMUTE",
            applicantLocationRequirements: {
              "@type": "Country",
              name: "India",
            },
            applicationContact: {
              "@type": "ContactPoint",
              contactType: "HR",
              email: job.applicationDetails.applyVia,
            },
            identifier: {
              "@type": "PropertyValue",
              name: "VeloriqIP Job ID",
              value: job.id,
            },
          }),
        }}
      />
      <section className="mt-35 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/careers"
            className="text-sm text-gray-500 hover:text-[rgb(var(--brand-gold))]"
          >
            ← Back to Careers
          </Link>

          <h1 className="text-3xl font-semibold mt-4">{job.title}</h1>
          <p className="text-gray-600 mt-2">
            {job.department} · {job.location} · {job.employmentType}
          </p>

          <div className="mt-10 space-y-10">
            <Section title="Role Summary">
              <p>{job.summary}</p>
            </Section>

            <Section title="Responsibilities">
              <ul className="list-disc pl-5 space-y-2">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title="Requirements">
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title="Key Skills">
              <div className="flex flex-wrap gap-2">
                {job.keySkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            <div className="mt-16 p-6 border rounded-2xl bg-gray-50 flex flex-col sm:flex-row justify-between gap-6">
              <div>
                <h3 className="text-lg font-medium">Apply for this role</h3>
                <p className="text-sm text-gray-600">
                  Send your resume to{" "}
                  <strong>{job.applicationDetails.applyVia}</strong>
                </p>
              </div>

              <a
                href={`mailto:${job.applicationDetails.applyVia}?subject=Application for ${job.title}`}
                className="px-6 py-3 bg-[rgb(var(--brand-navy))] text-white rounded-full text-center hover:bg-[rgb(var(--btn-hover))]"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-medium mb-3">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
