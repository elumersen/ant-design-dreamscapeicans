
import React, { useEffect, useRef } from 'react';

const logoData = [
  {
    id: 1,
    name: "Logo 1",
    imgSrc: "https://placehold.co/200x100/f1f1f1/333333?text=Logo+1",
  },
  {
    id: 2,
    name: "Logo 2",
    imgSrc: "https://placehold.co/200x100/f1f1f1/333333?text=Logo+2",
  },
  {
    id: 3,
    name: "Logo 3",
    imgSrc: "https://placehold.co/200x100/f1f1f1/333333?text=Logo+3",
  },
  {
    id: 4,
    name: "Logo 4",
    imgSrc: "https://placehold.co/200x100/f1f1f1/333333?text=Logo+4",
  },
];

const LogoShowcase = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

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
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className="text-center mb-10 opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
                    <h3 className="text-xl font-normal mb-4">OUR WORK IN ACTION</h3>

          <h2 className="text-3xl font-bold mb-4">Logo Creations That Speak for Your <span style={{color:"#dd6b31"}}>Brand</span> </h2>
        </div>

        <div 
          ref={containerRef} 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 w-full p-10 radi"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards',backgroundColor:"#eaf4e6" }}
        >
          <p>dkdk</p>
          {/* {logoData.map((logo) => (
            <div key={logo.id} className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={logo.imgSrc}
                alt={logo.name}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
