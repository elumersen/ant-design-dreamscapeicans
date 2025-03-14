
import React, { useEffect, useRef } from 'react';

const categories = [
  {
    id: 1,
    title: "Explainers",
    imgSrc: "https://placehold.co/300x200/ffa500/fff?text=Explainer+Video",
  },
  {
    id: 2,
    title: "Next-Level Promos",
    imgSrc: "https://placehold.co/300x200/4cb963/fff?text=Promo+Video",
  },
  {
    id: 3,
    title: "Stories",
    imgSrc: "https://placehold.co/300x200/9b5de5/fff?text=Story+Video",
  },
];

const PelicanProduction = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const categoriesRef = useRef(null);

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
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (categoriesRef.current) observer.observe(categoriesRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (categoriesRef.current) observer.unobserve(categoriesRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#f3f3f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 
            ref={titleRef} 
            className="text-3xl font-bold mb-2 opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
            Pelican Production in Motion
          </h2>
          <p 
            ref={subtitleRef} 
            className="text-xl text-gray-600 opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Crafting Quality Visuals
          </p>
          <div className="w-20 h-1 bg-brand-orange mx-auto mt-4"></div>
        </div>

        <div 
          ref={categoriesRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={category.imgSrc}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-center">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PelicanProduction;
