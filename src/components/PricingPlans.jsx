
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Check, X } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  currency = "ETB", 
  duration = "mo", 
  features, 
  popular = false, 
  delay = 0 ,
  type,
  

}) => {
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
      className={`rounded-2xl overflow-hidden opacity-0 relative ${
        popular ? 'border-2 border-brand-orange shadow-lg' : 'border border-gray-200 shadow-sm  bg-white'
      }`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {popular && (
        <div className="bg-brand-orange text-white text-center py-2 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="pt-3 p-8 bg-white">
        <div className='ml-5'>
        <p className="text-2xl font-bold">{type}</p>
        <p className="text-base font-semibold">{title}</p>
        </div>
        
        <p className=" text-xs font-medium">Delivery in {duration} business days</p>
        <div className="flex items-baseline mb-3">
          <span className="text-lg md:text-lg font-bold"> {price} {currency}</span>
          <span className="text-gray-500 ml-2 text-xs">/month</span>
        </div>

        <ul className="space-y-2 mb-4 pb-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              ) : (
                <X size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              )}
              <span className={feature.included ? "text-gray-900 font-bold  text-sm" : "text-gray-400 text-sm"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
<div className='flex justify-center'>
        <Button 
          className={`w-1/2 absolute bottom-2  mb-2 ${
            popular 
              ? "bg-brand-orange hover:bg-brand-orange/90 text-white"
              : "bg-white text-brand-orange border border-brand-orange hover:bg-gray-50 hover:bg-brand-orange/90 hover:text-white"
          }`}
        >
          {popular ? "Get Started" : "Get Started"}
        </Button>
        </div>
      </div>
    </div>
  );
};

const PricingPlans = () => {
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

  const basicFeatures = [
    { text: "Basic logo design & guidelines", included: true },
    { text: "Social media management ( 1 platforms)", included: true },
    { text: "1-page static website", included: false },
    { text: "3 basic design", included: true },
    { text: "2 basic promotional video", included: true },
    { text: "Basic event promo content", included: false },
    { text: "Setup and 1 basic ad", included: false },
    { text: "Basic Keyword research (SEO Services)", included: false },
    { text: "SMS Management (10,000/month)", included: false },
  ];

  const proFeatures = [
    { text: "Advanced logo design, color palette, typography", included: true },
    { text: "Socail media management (3 platforms)", included: true },
    { text: "Multi-page website with reponsive design", included: false },
    { text: "8 designs with revisions", included: true },
    { text: "8 videos/month (up to 1 mintue each)", included: true },
    { text: "Event promotion content", included: true },
    { text: "3 ads", included: true },
    { text: "Keyword research - on-page SEO", included: false },
    { text: "SMS Management", included: true },
    { text: "SM Calendar organization", included: true },

  ];

  const premium = [
    { text: "Full branding kit: logo, guidelines, templates, brand story", included: true },
    { text: "Socail media management (5 platforms), ad campaigns", included: true },
    { text: "Full-featured Website with SEO, and analytics", included: true },
    { text: "10 design, animated graphics, and priority delivery", included: true },
    { text: "10 videos/month (up to 2 mintue each)", included: true },
    { text: "Event promotion, and on-site coordination", included: true },
    { text: "5 ads with advanced targeting and monthly reports", included: true },
    { text: "Keyword research - on-page SEO", included: true },
    { text: "SMS Management", included: true },
    { text: "SM Calendar organization", included: true },

  ];
  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-[#f9f9f7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className="text-center mb-16 opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
          <p className="text-base  mb-1 font-medium text-gray-600"> PRICING TABLE</p>
          <h2 className="text-3xl font-semibold mb-4">Choose the plan that's right for you</h2>
           <div className='w-[100px] h-[4px] bg-brand-orange/90 mx-auto'>

           </div>
        </div>
        <div className=' rounded-2xl p-16 bg-[#fff4ec] '>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto pb-10">
          <PricingCard
          type="ልሞክር"
            title="Basic"
            price="14,999"
            currency="ETB"
            duration="10-15"
            features={basicFeatures}
            delay={100}
          />
          <PricingCard
          type="ሃገርኛ"
            title="Standard"
            price="34,999"
            currency="ETB"
            duration="7-10"
            features={proFeatures}
            delay={300}
          />
      
        </div>
        <div class="flex flex-col md:flex-row gap-8 bg-white  max-w-4xl mx-auto rounded-2xl p-4 ">
  <div class="flex-[1]  rounded-lg pt-10 relative text-center">
    <div className='ml-3'> 
    <p className="text-2xl font-bold">ልዪ</p>
    <p className="text-base font-semibold">Premium</p> 
    </div>
 
   
    <p className=" text-sm font-normal text-start pl-2"> Quick Delivery in 3-5 bussiness days</p>
    <div className="flex items-baseline mb-3 pt-2  text-center justify-center">
          <span className="text-lg md:text-lg font-bold">59,999+ ETB</span>
          <span className="text-gray-500 ml-2 text-xs">/month</span>
        </div>
    
    <Button className="w-full  left-0 bottom-1 bg-white text-brand-orange border border-brand-orange hover:bg-gray-50 hover:bg-brand-orange/90 hover:text-white mt-10 text-sm font-semibold ">
      Get Started
    </Button>
    

   </div>
  <div class="flex-[2] text-white  flex justify-center text-center rounded-lg">
  <ul className="space-y-1 ">
          {premium.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <X size={18} className="text-red-500 mr-2 flex-shrink-0" />
              )}
              <span className={feature.included ? "text-gray-900 font-bold  text-sm" : "text-gray-400 text-sm"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
    </div>
</div>
</div>
      </div>
    </section>
  );
};

export default PricingPlans;
