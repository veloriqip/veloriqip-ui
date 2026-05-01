"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LOCAL_ASSET_VERSION } from "@/lib/assetVersion";

export default function ServiceCard(props) {
  const router = useRouter();
  const service = props.service;
  return (
    <div
      onClick={() => router.push("/service/" + service.slug)}
      className="flex flex-col items-center text-center rounded-xl p-6 border border-violet-200 cursor-pointer w-72 h-96 sm:w-80 sm:h-96 md:w-72 md:h-96 lg:w-80 lg:h-96 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mt-6 aspect-square w-20 sm:w-24 rounded-full overflow-hidden">
        <Image
          width={96}
          height={96}
          alt={service.title}
          src={`/services/${service.title}.png?v=${LOCAL_ASSET_VERSION}`}
          className="object-contain"
        />
      </div>
      <div className="mt-6 space-y-2 flex flex-col justify-between">
        <h3 className="text-base font-semibold text-slate-700">
          {service.title}
        </h3>
        <p className="text-md mt-2 text-slate-600">{service.description}</p>
      </div>
    </div>
  );
}
