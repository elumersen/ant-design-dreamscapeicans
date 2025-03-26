
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
      className={`service-card  p-10 shadow-xl m-2` } 
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' ,backgroundColor:`${color}`}}
    >

      <div className=" relative flex items-center justify-center">
       <div className='absolute item-center '>
       {icon}
       </div>
      
        <h3 className="mt-4 text-xl font-bold text-white z-10 text-center">{title}</h3>
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
    <section id="services" className="py-20 bg-white  ">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-60 relative">
       
        <div 
          className="text-center mb-16 opacity-0" 
          ref={titleRef}
          style={{ animationFillMode: 'forwards' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Provide The Best
            
          <span className="text-[#dd6b31]"> Services</span></h2>
          <p className="text-gray-500 mx-40">Let us unleash the full potential of your business with our data-driven strategies</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=' p-2  blur-lg  shadow-2xl top-10  custom-shadow' >

</div>
<div className=' p-2  blur-lg  shadow-2xl top-10  custom-shadow-blue' >

</div>
          <ServiceCard 
            color="#dd6b31"
            title="Branding" 
            icon={
              <img 
              src="/lovable-uploads/Layer 2.png" 
              alt="Digital Marketing" 
              className="w-full max-w-md mx-auto"
            />
          }
            delay={100}
          />
          <ServiceCard 
            color="#97c94d"
            title="Digital Marketing" 
            icon={
              <img 
              src="/lovable-uploads/Layer 3.png" 
              alt="Digital Marketing" 
              className="w-full max-w-md mx-auto"
            />}
            delay={200}
          />
          <ServiceCard 
            color="#894b9d"
            title="Website Design" 
            icon={
              <img 
              src="/lovable-uploads/Layer 4.png" 
              alt="Digital Marketing" 
              className="w-full max-w-md mx-auto"
            />
                        }            delay={300}
          />
          <ServiceCard 
            color="#25abe7"
            title="Graphic Design" 
            icon={
              <img 
              src="/lovable-uploads/Layer 5.png" 
              alt="Digital Marketing" 
              className="w-full max-w-md mx-auto"
            />
                        }            delay={400}
          />
          <ServiceCard 
            color="#45c9c9"
            title="Sales" 
            icon={
              <img 
              src="/lovable-uploads/sales.png" 
              alt="Digital Marketing" 
              className="w-full max-w-md mx-auto pt-9"
            />
                        }            delay={500}
          />
          <ServiceCard 
            color="#53a545"
            title="Event Organizing" 
            icon={
              <img 
              src="/lovable-uploads/Layer 6.png" 
              alt="Digital Marketing" 
              className="w-full max-w-md mx-auto"
            />
                        }            delay={600}
          />
        </div>

        <div className="text-center mt-12 z-100 relative">
          <Button className="btn-primary group z-100 " style={{backgroundColor:"#dd6b31" , fontFamily: "Montserrat"}}>
            Learn More 
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
