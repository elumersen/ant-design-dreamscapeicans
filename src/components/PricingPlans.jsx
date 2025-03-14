
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
  delay = 0 
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
      className={`rounded-2xl overflow-hidden opacity-0 ${
        popular ? 'border-2 border-brand-orange shadow-lg' : 'border border-gray-200 shadow-sm'
      }`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {popular && (
        <div className="bg-brand-orange text-white text-center py-2 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-6 md:p-8 bg-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-3xl md:text-4xl font-bold">{currency} {price}</span>
          <span className="text-gray-500 ml-2">/{duration}</span>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              ) : (
                <X size={18} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              )}
              <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Button 
          className={`w-full ${
            popular 
              ? "bg-brand-orange hover:bg-brand-orange/90 text-white"
              : "bg-white text-brand-orange border border-brand-orange hover:bg-gray-50"
          }`}
        >
          {popular ? "Get Started" : "Choose Plan"}
        </Button>
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
    { text: "5 social media post designs", included: true },
    { text: "2 Facebook ads", included: true },
    { text: "Basic logo design", included: true },
    { text: "Email support", included: true },
    { text: "Up to 2 revisions", included: true },
    { text: "Premium illustrations", included: false },
    { text: "Website design", included: false },
  ];

  const proFeatures = [
    { text: "15 social media post designs", included: true },
    { text: "5 Facebook & Instagram ads", included: true },
    { text: "Professional logo design", included: true },
    { text: "Email and phone support", included: true },
    { text: "Unlimited revisions", included: true },
    { text: "Premium illustrations", included: true },
    { text: "Basic website design", included: true },
    { text: "SEO optimization", included: true },
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className="text-center mb-16 opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
          <h2 className="text-4xl font-bold mb-4">Choose the plan that's right for you</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect package to elevate your brand's digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Basic"
            price="1000"
            currency="ETB"
            duration="mo"
            features={basicFeatures}
            delay={100}
          />
          <PricingCard
            title="Pro"
            price="3500"
            currency="ETB"
            duration="mo"
            features={proFeatures}
            popular={true}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
