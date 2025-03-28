import React, { useEffect, useRef, useState } from "react";
import ProductLaunch from "/duolingo.png";
import HiringCampaign from "/hiring.png";
import NewYear from "/newyear.png";
const designData = [
  {
    id: 1,
    title: "Hiring Campaign",
    imgSrc: NewYear,
  },
  {
    id: 2,
    title: "Product Launch",
    imgSrc: ProductLaunch,
  },
  {
    id: 3,
    title: "Job Opening",
    imgSrc: HiringCampaign,
  },
];

const SocialMediaDesigns = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const designsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (designsRef.current) observer.observe(designsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (designsRef.current) observer.unobserve(designsRef.current);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % designData.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? designData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className="text-center mb-12 opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Engaging{" "}
            <span className="text-3xl text-orange-500">Social Media</span> Designs
          </h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div
          ref={designsRef}
          className="relative flex items-center justify-center opacity-0"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards",
            backgroundColor: "#fbf0eb",
            minHeight: "600px",
          }}
        >
          <button
            onClick={handlePrevious}
            className="absolute left-0 z-10 bg-orange-500 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <div className="flex space-x-4">
            {designData.map((design, index) => (
              <div
                key={design.id}
                className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
                  index === activeIndex ? "scale-110" : "scale-90"
                }`}
              >
                <div className="relative aspect-square">
                  <img
                    src={design.imgSrc}
                    alt={design.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0  flex items-end">
                    <div className="p-6 text-white">
                      {/* <h3 className="text-xl font-bold">{design.title}</h3> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-orange-500 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaDesigns;