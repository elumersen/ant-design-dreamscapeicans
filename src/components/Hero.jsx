
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

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

    if (heroRef.current) observer.observe(heroRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#f6f9f4]"
      ref={heroRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div 
            className="opacity-0" 
            ref={textRef}
            style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">turning</span> 
              <span className="block">ideas into</span> 
              <span className="block text-green-600">remarkable brands</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Create to INSPIRE
            </p>
            <p className="text-base text-gray-600 mb-8 max-w-lg">
              Redefining creativity in Ethiopia's digital landscape.
              Our passion is growth. Fueled by a desire to
              see your business succeed, we craft exceptional
              digital solutions that resonate with your audiences.
            </p>
            <Button className="btn-primary group">
              Get Started
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div 
            className="relative flex justify-center opacity-0" 
            ref={imageRef}
            style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}
          >
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/9d827098-26a9-4c81-8723-847e51d63258.png" 
                alt="Digital Marketing" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute top-0 right-0 -z-10 w-64 h-64 rounded-full bg-green-100 blur-3xl opacity-40 animate-rotate-slow"></div>
            <div className="absolute bottom-10 left-10 -z-10 w-40 h-40 rounded-full bg-orange-100 blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full opacity-10">
        <img 
          src="/lovable-uploads/0d221665-9607-4d49-8343-834722394a52.png" 
          alt="World Map" 
          className="w-full max-w-5xl mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
