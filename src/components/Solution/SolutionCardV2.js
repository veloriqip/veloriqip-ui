import Image from "next/image";
import { LOCAL_ASSET_VERSION } from "@/lib/assetVersion";
import Link from "next/link";
export default function SolutionCardV2(props) {
  const solution = props.solution;

  return (
    <div className="group relative max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
      <Image
        width={300}
        height={150}
        src={`/solutions/${solution.audience}.png?v=${LOCAL_ASSET_VERSION}`}
        alt="Product"
        className="h-48 w-full object-cover"
      />
      <div className="space-y-4 p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          {solution.audience}
        </h3>
      </div>
      <button
        className="absolute inset-0 z-10 flex items-center justify-center 
                 bg-black/20 text-white opacity-0 transition-all duration-300 
                 group-hover:opacity-100 hover:bg-black/30"
      >
        <Link
          href={"/solution/" + solution.slug}
          className="cursor-pointer px-4 py-2 border-2 border-white rounded-full font-semibold uppercase tracking-wider"
        >
          Know more
        </Link>
      </button>
    </div>
  );
}
