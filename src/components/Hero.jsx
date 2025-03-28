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
    <section>

   
    <section
      id="home"
      className=" pt-28 pb-16 w-full mx-auto bg-[#ffffff]"
      ref={heroRef}
    >
      <div className="max-w-5xl mx-auto   relative">
      <img
            src="/hero-bgg.png"
            alt="Background"
            className="md:h-[30rem]  lg:h-[30rem]  h-[15rem] w-full  inset-0 " 
          />
             <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <img
            src="/arrow.png"
            alt="Person with Phone"
            className="w-[280px] h-auto rotate-[-2deg]"
          />
        </div>
           <div className="absolute z-10 flex lg:top-28 md:top-28 top-20 flex-col md:flex-row items-center justify-between px-6 sm:px-8 lg:px-0 py-12 md:py-0">
                   <div
                     className="w-full md:w-1/2 opacity-0 lg:-mt-20 md:-mt-20 -mt-36"
                     ref={textRef}
                     style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                       <div className="relative text-center md:text-left max-w-3xl py-8 md:py-12 md:ml-28 lg:ml-40  ml-10">
                       {/* Turning Text */}
                       <p className="text-4xl  md:text-[4rem] lg:text-[4rem] font-semibold leading-none tracking-[0.2em] mb-1 md:-mb-2 lg:-mb-2">
                         turning
                       </p>
           
           
                       {/* Ideas Box */}
                       <div className="relative inline-block transform rotate-3 md:-mt-1 lg:-mt-1 -mt-3 lg:ml-10 md:ml-10">
                         <div className="bg-white border-[2px] border-[#00008B] rounded-xl px-2 py-1 md:px-6  md:py-2 lg:px-6  lg:py shadow-[0px_0px_0_0_rgba(0,0,0,1)]">
                           <p className="text-3xl md:text-5xl lg:text-5xl font-black tracking-[0.2em] leading-tight">
                             Ideas
                           </p>
                         </div>
                       </div>
           
                       {/* Into Text */}
                       <p className="text-3xl md:text-5xl lg:text-5xl md:text-[64px] font-semibold leading-none md:-mt-3 lg:-mt-2 -mt-1 tracking-[0.2em] lg:ml-10 md:ml-10 -ml-10">
                        <span className="text-3xl  md:text-[4rem]  lg:text-5xl font-semibold leading-none tracking-[0.2em] " style={{color:"#3B82F6"}}>*</span>into
                       </p>
                       
                       {/* Popular Tag */}
                       <div className="inline-block bg-[#a0cc3c] border-[2px] border-[#00008B] md:rounded-xl lg:rounded-xl rounded-lg px-2  py-1 md:py-2  lg:py-2 shadow-[0px_0px_0_0_rgba(0,0,0,1)] -mt-2 lg:-mt-2.5 md:-mt-2.5  lg:ml-11 md:ml-11 -ml-5">
                         <p className="text-md md:text-4xl lg:text-4xl  text-center lg:w-[13rem] md:w-[13rem]  font-normal tracking-[0.1em]">
                           # Popular
                         </p>
                       </div>
           
                       {/* Brands Text */}
                       <div className="relative -mt-2 ml-3">
                         <p className="text-xl  md:text-4xl lg:text-[4rem] pb-4 font-semibold leading-none tracking-[0.3em] ml-4">
           
                           brands
                         </p>
                         <div className="absolute left-6 -bottom-6 w-10 h-[8px] bg-[#3B82F6] -translate-x-1/2"></div>
                       </div>
                   </div>  
                 </div>

          </div>

          <div
          className=" md:right-20 right-5 lg:right-20  -top-3  md:w-1/2 absolute z-20 flex justify-start opacity-0 lg:mt11 md:mt-0 "
          ref={imageRef}
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <img
            src="/megaphone.png"
            alt="Megaphone Announcement"
            className="md:w-[80rem] w-[0rem] lg:w-[35-rem] object-contain transform scale-100"
          />
        </div>
          
      </div>

      {/* <div className="relative w-full max-w-[90rem] mx-auto mt-10 " > */}
        {/* Background Image */}
        {/* <div className="absolute inset-0 w-[80rem] h-[40rem] ">
          <img
            src="/hero-bgg.png"
            alt="Background"
            className="w-full h-full  ml-20" 
          />
          
        </div> */}

        {/* Content */}
       
          {/* <div
            className="w-full md:w-1/2 relative flex justify-start opacity-0 mt-8 md:mt-0 mr-40"
            ref={imageRef}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <img
              src="/megaphone.png"
              alt="Megaphone Announcement"
              className="w-[48rem] md:w-[56rem] object-contain transform scale-110 mt-8"
            />
          </div> */}
        

        {/* Person with Phone Image */}
        {/* <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <img
            src="/arrow.png"
            alt="Person with Phone"
            className="w-[280px] h-auto rotate-[-2deg]"
          />
        </div> */}
      {/* </div> */}

      <div className="relative z-10 mt-10">
        <p className="text-center text-5xl font-bold ml-80 mb-5 tracking-[0.1em]" style={{color:"#838383"}}>Create to INSPIRE</p>
        <p className="text-center text-xl font-medium mb-2 mr-6" style={{color:"#838383"}}>WHO ARE WE?</p>
        <p className="text-center text-xl font-bold mt-2 traking-[0.8em]">Redefining connections in <span className="text-2xl tracking-[0.12em] ">Ethiopia’s </span> digital landscape.</p>
        <div className="w-8 h-1 bg-orange-500 mx-auto mt-1"></div>
      </div>

     
    </section>
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-white -mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/world-map-bg.png"
            alt="World Map Background"
            className="w-full max-w-4xl h-full opacity-70"
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
