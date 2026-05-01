export default function SolutionPage(props) {
  const solution = props.solution;
  return (
    <section className="py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[rgb(var(--brand-gold))]">
            {solution.audience}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[rgb(var(--brand-navy))]">
            {solution.headline}
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Challenge */}
          <div className="bg-white border border-[rgb(var(--brand-gold))] rounded-xl p-6">
            <h3 className="text-base font-semibold text-slate-800">
              The Challenge
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {solution.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-white border border-[rgb(var(--brand-gold))] rounded-xl p-6">
            <h3 className="text-base font-semibold text-slate-800">
              Our Solution
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {solution.solution}
            </p>
          </div>

          {/* Value Points */}
          <div className="bg-white border border-[rgb(var(--brand-gold))] rounded-xl p-6">
            <h3 className="text-base font-semibold text-slate-800">
              How We Deliver Value
            </h3>
            <ul className="mt-4 space-y-4">
              {solution.valuePoints.map((point, index) => (
                <li key={index} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--brand-gold))] flex-shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcome */}
        <div className="mt-10 rounded-xl bg-[rgb(var(--bg-surface))] border border-[rgb(var(--brand-gold))] p-6">
          <h3 className="text-base font-semibold text-slate-800">Outcome</h3>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            {solution.outcome}
          </p>
        </div>
      </div>
    </section>
  );
}
