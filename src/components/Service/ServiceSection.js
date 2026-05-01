import ServiceCard from "./ServiceCard";
import services from "@/data/services.json";

export default function ServiceSection() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Our Services
      </h1>
      <p className="text-md text-slate-500 text-center mt-2 max-w-md mx-auto">
        End-to-end solutions to protect, manage, and grow your intellectual property
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-15 px-8">
        {services &&
          services.map((service) => (
            <ServiceCard service={service} key={service.id}/>
          ))}
      </div>
    </>
  );
}
