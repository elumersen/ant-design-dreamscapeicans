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
      className="pt-10 pb-16 md:pt-5 md:pb-24 overflow-hidden bg-[#ffffff]"
      ref={heroRef}
    >
      <div className="relative w-full h-screen bg-[#ebf3e6] flex justify-center items-center">
        {/* <div className="absolute top-0 left-0 w-[80%] h-[60%] bg-green-500 rounded-lg clip-path-custom"></div> */}
      </div>
      <div className="bg-[#ebf3e6] flex mt-20 ml-10 mr-20 ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div
              className="opacity-0"
              ref={textRef}
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <div className="relative text-center max-w-[60rem] py-8">
                {/* <!-- Turning Text --> */}
                <p className="text-[3rem] font-semibold leading-none tracking-[0.2em] -mb-1">
                  turning
                </p>

                {/* <!-- Ideas Box --> */}
                <div className="relative inline-block transform rotate-3 -mt-1">
                  <div className="bg-white border-[1.5px] border-[#00008B] rounded-lg px-4 py-1 shadow-[0px_0px_0_0_rgba(0,0,0,1)]">
                    <p className="text-[38px] font-black tracking-[0.2em] leading-tight">
                      Ideas
                    </p>
                  </div>
                </div>

                {/* <!-- Into Text --> */}
                <p className="text-[42px] font-semibold leading-none -mt-2 tracking-[0.2em]">
                  into
                </p>

                {/* <!-- Popular Tag --> */}
                <div className="inline-block bg-[#9FE65C] border-[1.5px] border-[#00008B] rounded-lg px-6 py-1 shadow-[0px_0px_0_0_rgba(0,0,0,1)] -mt-1.5 mr-5">
                  <p className="text-[24px] font-semibold tracking-[0.1em]">
                    # Popular
                  </p>
                </div>

                {/* <!-- Brands Text --> */}
                <div className="relative -mt-4">
                  <p className="text-[3rem] font-semibold leading-none tracking-[0.39em] ml-9">
                    brands
                  </p>
                  <div className="absolute left-1 -bottom-4 w-5 h-[6px] bg-[#3B82F6] -translate-x-1/2 ml-11"></div>
                </div>
              </div>
            </div>
            <div
              className="relative flex justify-center opacity-0"
              ref={imageRef}
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <img
                src="/megaphone-image.png"
                alt="Megaphone Announcement"
                className="w-[40rem] h-3/4 object-contain transform scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
