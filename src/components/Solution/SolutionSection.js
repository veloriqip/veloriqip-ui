import SolutionCard from "./SolutionCard";
import solutions from "@/data/solutions.json";
import SolutionCardV2 from "./SolutionCardV2";

export default function SolutionsSection() {

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Tailored IP Solutions for Every Innovator
      </h1>
      <p className="text-md text-slate-500 text-center mt-2 max-w-md mx-auto">
        From concept to commercialization, we provide strategic guidance and protection to accelerate innovation, secure ideas, and maximize impact across startups, businesses, and institutions
      </p>
      <div className="flex items-center justify-center flex-wrap gap-6 mt-15 mb-20 px-20">
      {solutions &&
        solutions.map((solution) => (
          <SolutionCardV2 key={solution.id} solution={solution}/>
        ))}
    </div>
    </>
    
  );
}
