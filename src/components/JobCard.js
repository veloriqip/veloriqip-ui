"use client"
import { useRouter } from 'next/navigation'
export default function JobCard(props) {
    const router = useRouter();
  return (
    <>
      <div className="w-full max-w-md border border-[rgb(var(--brand-navy))] bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">{props?.job?.title}</h3>
        <p className="mt-2 text-gray-600">Location: {props?.job?.location}</p>
        <p className="mt-2 text-gray-600">{props?.job?.summary}</p>
        <button key={props?.job.id} href={`/careers/${props.job.id}`} className="duration-500 mt-10 cursor-pointer px-4 py-2 bg-[rgb(var(--brand-navy))] text-white rounded-full hover:bg-[rgb(var(--btn-hover))]" onClick={() => router.push('/careers/'+ props?.job.id)}>
          Apply Now
        </button>
      </div>
    </>
  );
}
