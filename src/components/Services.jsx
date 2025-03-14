
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ color, title, icon, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`service-card rounded-2xl p-6 ${color} opacity-0`} 
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="text-white">
        {icon}
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

const Services = () => {
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
    <section id="services" className="py-20 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16 opacity-0" 
          ref={titleRef}
          style={{ animationFillMode: 'forwards' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Provide The Best Services</h2>
          <p className="text-gray-600">Let us elevate the key benefits of your business</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            color="bg-brand-orange"
            title="Branding" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 17.99l9.88.01"></path><path d="M13.5 17.5v-5.21a2 2 0 01.84-1.63L15.2 10"></path><path d="M11.55 12.5a2.82 2.82 0 01-3.93-.38l-.7-.71a2.2 2.2 0 010-3.12l.7-.71a2.82 2.82 0 013.93-.38"></path><path d="M8 6l.88.01"></path><path d="M15.82 12.5a2.82 2.82 0 003.93-.38l.7-.71a2.2 2.2 0 000-3.12l-.7-.71a2.82 2.82 0 00-3.93-.38"></path><path d="M17.99 6L17 6.01"></path></svg>}
            delay={100}
          />
          <ServiceCard 
            color="bg-brand-green"
            title="Digital Marketing" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 012-2h2"></path><path d="M17 3h2a2 2 0 012 2v2"></path><path d="M21 17v2a2 2 0 01-2 2h-2"></path><path d="M7 21H5a2 2 0 01-2-2v-2"></path><path d="M16 16v-3a2 2 0 00-2-2h-4a2 2 0 00-2 2v3"></path><circle cx="12" cy="7" r="2"></circle></svg>}
            delay={200}
          />
          <ServiceCard 
            color="bg-brand-purple"
            title="Website Design" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9.5V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><path d="M2 14h6"></path><path d="M8 20H2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h6"></path><path d="M10 10h10"></path><path d="M10 14h4"></path><path d="m5 17-1 1"></path><path d="M4 18v-5"></path></svg>}
            delay={300}
          />
          <ServiceCard 
            color="bg-brand-blue"
            title="Graphic Design" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.15 4.94A16.92 16.92 0 0 0 12 3c-6.64 0-12 3-12 7 0 4.35 6.3 7.5 12.5 7"></path><path d="M6.53 6.54C5.59 8.32 5 10.62 5 13c0 4.42 5 8 12 8 .35 0 .69 0 1.02-.03"></path><circle cx="19" cy="13" r="3"></circle><circle cx="13" cy="18" r="3"></circle><circle cx="18" cy="8" r="3"></circle></svg>}
            delay={400}
          />
          <ServiceCard 
            color="bg-brand-cyan"
            title="Sales" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>}
            delay={500}
          />
          <ServiceCard 
            color="bg-gray-700"
            title="Event Organizing" 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>}
            delay={600}
          />
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary group">
            Learn More 
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
