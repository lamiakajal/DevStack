import { useEffect, useState } from "react";
import type { Technology } from "./types/technologies";
import { toast } from "react-toastify";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("./technologies.json")
      .then((res) => {
        if (!res.ok) {
          return fetch("/technologies.json");
        }
        return res;
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies.json");
        }
        return res.json();
      })
      .then((data: Technology[]) => {
        setTimeout(() => {
          setTechnologies(data);
          setLoading(false);
        }, 300);
      })
      .catch((err) => {
        console.error("Error loading JSON:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveItem = (id: string, name: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info(`${name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("All technologies removed from your stack.");
  };

  const getBadgeStyle = (badge: string) => {
    switch (badge?.toLowerCase()) {
      case "popular":
        return "bg-sky-50 text-sky-500 border-sky-100";
      case "versatile":
        return "bg-emerald-50 text-emerald-500 border-emerald-100";
      case "fast":
      case "cache":
        return "bg-orange-50 text-orange-500 border-orange-100";
      case "ssr / edge":
        return "bg-purple-50 text-purple-600 border-purple-100";
      case "standard":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "top sql":
      case "essential":
      case "modern":
      case "containers":
      case "robust":
        return "bg-sky-50 text-sky-600 border-sky-100";
      case "ubiquitous":
        return "bg-amber-50 text-amber-600 border-amber-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  return (
    <section className="bg-white pt-0 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1527] tracking-tight">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 font-normal">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-28 gap-4">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500 text-sm font-medium animate-pulse">
              Loading technologies...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isSelected = selectedStack.some(
                  (item) => item.id === tech.id,
                );

                return (
                  <div
                    key={tech.id}
                    className="bg-white rounded-2xl p-6 border border-gray-100/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-9 h-9 object-contain"
                        />
                        <span
                          className={`text-[11px] font-medium px-3 py-1 rounded-full border ${getBadgeStyle(
                            tech.badge,
                          )}`}
                        >
                          {tech.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed min-h-12 mb-6">
                        {tech.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-5">
                        <span className="bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md text-gray-600 font-medium text-[11px]">
                          {tech.category}
                        </span>
                        <span className="text-[11px]">{tech.difficulty}</span>
                        <div className="flex items-center gap-1 font-bold text-gray-700 text-xs">
                          <span className="text-amber-400 text-sm">★</span>{" "}
                          {tech.rating}
                        </div>
                      </div>

                      <button
                        onClick={() => handleAddToStack(tech)}
                        disabled={isSelected}
                        className={`w-full py-2.5 rounded-xl font-medium text-xs transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                            : "bg-[#0B1527] hover:bg-slate-800 text-white active:scale-98 shadow-xs"
                        }`}
                      >
                        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] sticky top-24">
              <h3 className="text-base font-bold text-gray-900">Your Stack</h3>
              <p className="text-xs text-gray-400 mb-6">
                {selectedStack.length}{" "}
                {selectedStack.length === 1 ? "Technology" : "Technologies"}{" "}
                Selected
              </p>

              {selectedStack.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-xl py-12 px-4 text-center">
                  <p className="text-gray-400 text-xs">
                    No technology selected yet.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-3 max-h-105 overflow-y-auto pr-1">
                    {selectedStack.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-7 h-7 object-contain"
                          />
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 leading-tight">
                              {item.name}
                            </h4>
                            <p className="text-[10px] text-gray-400">
                              {item.category}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer transition-colors"
                          aria-label="Remove item"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* button start */}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologySection;
