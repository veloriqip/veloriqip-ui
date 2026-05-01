import Image from "next/image";
import Link from "next/link";
import { LOCAL_ASSET_VERSION } from "@/lib/assetVersion";

export default function SolutionCard(props) {
  const solution = props.solution;
  return (
    <div
      key={solution.id}
      className="group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 mb-10"
    >
      <Image
        width={300}
        height={150}
        alt=""
        src={`/solutions/${solution.audience}.png?v=${LOCAL_ASSET_VERSION}`}
      />
      <div className="relative z-10 mx-auto max-w-md md-5">
        
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300">
          <p>{solution.audience}</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <Link
              href={"/solution/" + solution.slug}
              className="text-[rgb(var(--brand-navy))] transition-all duration-300 hover:text-[rgb(var(--brand-gold))]"
            >
              Know more &rarr;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
