
import React, { useEffect, useRef } from 'react';

const Portfolio = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className="text-center mb-16 opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
          <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
          <p className="text-xl text-gray-600">Our latest work showcases our skills and creativity</p>
          <div className="w-20 h-1 bg-brand-orange mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`https://placehold.co/600x450/eee/ccc?text=Project+${index + 1}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-semibold">Project {index + 1}</h3>
                    <p className="text-sm text-white/80">Category</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
