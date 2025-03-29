
import React, { useEffect, useRef } from 'react';

const designData = [
  {
    id: 1,
    title: "Hiring Campaign",
    imgSrc: "https://placehold.co/400x400/222/fff?text=Hiring+Campaign",
  },
  {
    id: 2,
    title: "Product Launch",
    imgSrc: "https://placehold.co/400x400/222/fff?text=Product+Launch",
  },
  {
    id: 3,
    title: "Event Promotion",
    imgSrc: "https://placehold.co/400x400/222/fff?text=Event+Promotion",
  },
];

const SocialMediaDesigns = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const designsRef = useRef(null);

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
    if (designsRef.current) observer.observe(designsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (designsRef.current) observer.unobserve(designsRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className="text-center mb-12 opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
          <h2 className="text-3xl font-bold mb-4">Engaging Social Media Designs</h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div 
          ref={designsRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          {designData.map((design) => (
            <div 
              key={design.id} 
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={design.imgSrc}
                  alt={design.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{design.title}</h3>
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

export default SocialMediaDesigns;
