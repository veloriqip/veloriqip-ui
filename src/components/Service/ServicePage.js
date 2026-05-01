import { CheckCircle } from "lucide-react";

export default function ServicePage(props) {
  const service = props.service;

  return (
    <section className="mt-35 mb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        {service.title}
      </h1>
      <p className="mb-10 text-md text-slate-500 text-center mt-2 max-w-md mx-auto">
        {service.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {service?.features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
          >
            <CheckCircle className="text-[rgb(var(--brand-gold))] w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-base font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
