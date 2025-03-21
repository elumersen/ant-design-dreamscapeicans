import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

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
      className="relative pt-20 pb-16 md:pt-24 md:pb-24 bg-[#ffffff]"
      ref={heroRef}
    >
      <div className="relative w-full max-w-[90rem] mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/hero-bgg.png"
            alt="Background"
            className="w-full h-full object-fill"
          />
          
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 sm:px-8 lg:px-0 py-12 md:py-0">
          <div
            className="w-full md:w-1/2 opacity-0 mb-60 ml-20"
            ref={textRef}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="relative text-center md:text-left max-w-[70rem] py-8 md:py-12 ml-40">
              {/* Turning Text */}
              <p className="text-[4rem] md:text-[5rem] font-semibold leading-none tracking-[0.2em] -mb-2">
                turning
              </p>

              {/* Ideas Box */}
              <div className="relative inline-block transform rotate-3 -mt-1 ml-10">
                <div className="bg-white border-[2px] border-[#00008B] rounded-xl px-6 py-2 shadow-[0px_0px_0_0_rgba(0,0,0,1)]">
                  <p className="text-[48px] md:text-[56px] font-black tracking-[0.2em] leading-tight">
                    Ideas
                  </p>
                </div>
              </div>

              {/* Into Text */}
              <p className="text-[52px] md:text-[64px] font-semibold leading-none -mt-3 tracking-[0.2em] ml-20">
                into
              </p>

              {/* Popular Tag */}
              <div className="inline-block bg-[#9FE65C] border-[2px] border-[#00008B] rounded-xl px-8 py-2 shadow-[0px_0px_0_0_rgba(0,0,0,1)] -mt-2.5 ml-11">
                <p className="text-[32px] md:text-[36px] font-normal tracking-[0.1em]">
                  # Popular
                </p>
              </div>

              {/* Brands Text */}
              <div className="relative -mt-7">
                <p className="text-[4rem] md:text-[5rem] font-semibold leading-none tracking-[0.3em] ml-4">
                  brands
                </p>
                <div className="absolute left-6 -bottom-6 w-8 h-[8px] bg-[#3B82F6] -translate-x-1/2"></div>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-1/2 relative flex justify-center opacity-0 mt-8 md:mt-0 mr-40"
            ref={imageRef}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <img
              src="/megaphone.png"
              alt="Megaphone Announcement"
              className="w-[48rem] md:w-[56rem] object-contain transform scale-110"
            />
          </div>
        </div>

        {/* Person with Phone Image */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/3 z-20">
          <img
            src="/downward-arrow.png"
            alt="Person with Phone"
            className="w-[300px] h-auto "
          />
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <p className="text-center text-5xl font-bold ml-80 mb-5 tracking-[0.1em]" style={{color:"#838383"}}>Create to INSPIRE</p>
        <p className="text-center text-xl font-medium mt-2 ml-10" style={{color:"#838383"}}>WHO ARE WE?</p>
        <p className="text-center text-xl font-bold mt-2">Redefining connections in <span className="text-2xl tracking-[0.1em] ">Ethiopia’s </span> digital landscape.</p>
        <div className="w-8 h-1 bg-orange-500 mx-auto mt-1"></div>
      </div>

      <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-white mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/world-map-bg.png"
            alt="World Map Background"
            className="w-full max-w-4xl opacity-70"
          />
        </div>

       
        {/* Content */}
        <div className="relative max-w-2xl mx-auto">
          {/* Orange Accent Line */}
          {/* <span className="font-bold">Pelicans</span> */}
          {/* Text Content */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            At Pelicans we&apos;re more than just a digital agency—we&apos;re 
            your partners in growth. Powered by a team of skilled and forward-thinking professionals, we 
            stay ahead of industry trends to help your brand stand out, connect with your audience, and 
            achieve your goals.
          </p>

          {/* Button */}
          <div className="mt-6"> 
            <Button className="bg-brand-orange text-white ">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
