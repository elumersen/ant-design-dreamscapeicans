import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ title, desc }) => {
  return (
    <div className="flex-1 w-full h-auto md:w-1/2 items-center text-center p-4">
      <h2 className="pb-8 text-2xl md:text-3xl  text-center font-extrabold px-20 " style={{fontFamily:"Montserrat"}}>{title}</h2>
      <p className="pb-4 text-sm md:text-base font-normal" style={{fontFamily:"Montserrat"}}>{desc}</p>
    </div>
  );
};

const ServiceHero = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle one
  const ref = useRef(null);
  
  const [isVisible, setVisible] = useState(false);

  const services = [
    { title: "Branding", description: "Description of Service 1", color: "#dd6b31" ,img:"/lovable-uploads/brand.png"},
    { title: "Digital Marketing", description: "Description of Service 2", color: "#98c94d" ,img:"/lovable-uploads/dig.png"},
    { title: "Website Design", description: "Description of Service 3", color: "#8a4b9e" ,img:"/lovable-uploads/web.png"},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [services.length]);

  

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  return (
    <section className="">
      {/* Background Section */}
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center w-full mb-[10rem] md:mb-[15rem]">
          <img
            src="lovable-uploads/ser.jpg"
            alt="Background"
            className="w-full h-[20rem] md:h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute text-white text-center pt-12 md:pt-28">
            <p className="text-3xl md:text-4xl font-extrabold tracking-widest" style={{fontFamily:"Montserrat"}}>
              Our <span className="text-[#dd6b31]">Services</span>
            </p>
            <p className="w-[18rem] md:w-[25rem] text-center text-base pt-5 tracking-wider font-thin" style={{fontFamily:"Calibri"}}>
              Let us unleash the full potential of your business with our data-driven strategies.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="absolute top-[13rem] md:top-[22rem] flex justify-center items-center mt-10 w-full h-[200px] md:h-[250px]">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-32 md:ml-4 p-2 text-[#dd6b31] rounded-full z-20"
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>

          {services.map((service, index) => {
            let position = "scale-90 translate-x-0";
            let zIndex = "z-0";
            let style = "";

            if (index === activeIndex) {
              position = "scale-[1]";
              zIndex = "z-10";
              style = "0px 5px 5px -5px rgba(0, 0, 0, 0.25)";
            } else if (index === (activeIndex + 1) % services.length) {
              position = "translate-x-[84%] scale-[0.8]";
              style = "0px 4px 5px rgba(0, 0, 0, 0.25)";
            } else if (index === (activeIndex - 1 + services.length) % services.length) {
              position = "-translate-x-[84%] scale-[0.8]";
              style = "0px 4px 5px rgba(0, 0, 0, 0.25)";
            }

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 transform ${position} ${zIndex}`}
              >
                <div
                  className=" bg-white rounded-3xl text-center mx-auto   w-[9rem] md:w-[22rem] h-[10rem] md:h-[17rem] flex flex-col justify-center items-center"
                  style={{ boxShadow: style }}
                >
                  <div className="flex flex-row items-center justify-center text-center md:flex-row z-50">
                    <img
                      src={service.img}
                      alt="Service Icon"
                      className=" absolute top-20 left-12 w-16"
                    />
                    <h2
                      className={`text-base md:text-3xl tracking-widest flex-4 text-center px-24  items-center mx-auto font-extrabold `} 
                      style={{ color: service.color,fontFamily:"Montserrat" }}
                    >
                      {service.title}
                    </h2>
                  </div>
                  <button className="bg-[#dd6b31] bottom-2 md:px-10 md:bottom-5 lg:bottom-5 absolute p-2 md:p-3 rounded-lg text-white text-xs md:text-base lg:text-base tracking-wider font-bold" style={{fontFamily:"Montserrat"}}>
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-32 md:mr-4 p-2 text-[#dd6b31] rounded-full z-20"
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="w-full flex flex-col h-full"           style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
      >
        <div className="relative w-full flex flex-col mx-auto mt-10">
          <img
            src="/lovable-uploads/IMG_1575.PNG"
            alt="Service Icon"
            className="w-full absolute h-full object-cover"
          />
          <div className="max-w-6xl mx-auto z-30 inset-0 flex flex-col md:flex-row gap-4 md:gap-14 justify-center items-center p-4 md:p-10 text-black">
            <ServiceCard
              title={"Branding"}
              desc={
                "Develop a unique identity for your business. Includes logo design, brand strategy, and visual storytelling to create a consistent and memorable presence."
              }
            />
            <ServiceCard
              title={"Digital Marketing"}
              desc={
                "Utilize online platforms to promote brands through SEO, social media marketing, content creation, and paid advertising to drive engagement and conversions."
              }
            />
          </div>
        </div>

        <div className="relative w-full flex flex-col mx-auto">
          <img
            src="/lovable-uploads/IMG_1575.PNG"
            alt="Service Icon"
            className="w-full absolute h-full object-cover"
          />
          <div className="max-w-6xl z-20 mx-auto inset-0 flex flex-col md:flex-row gap-4 md:gap-14 justify-center items-center p-4 md:p-10 text-black">
            <ServiceCard title={"Website Design"} desc={"Crafts visually appealing and user-friendly websites optimized for performance, responsiveness, and seamless user experience across devices."} />
            <ServiceCard title={"Graphics Design"} desc={"Focuses on visual content creation for print, digital, and multimedia platforms. Includes posters, advertisements, packaging, and motion graphics."} />
          </div>
        </div>

        {/* Second Service Cards Section with Background Image */}
        <div className="relative w-full flex flex-col mx-auto mt-10">
          {/* Background Image */}
          <img
            src="/lovable-uploads/IMG_1575.PNG"
            alt="Service Background"
            className="w-full h-full object-cover absolute"
          />
          {/* Service Cards */}
          <div className="max-w-6xl mx-auto z-30 inset-0 flex flex-col md:flex-row gap-4 md:gap-14 justify-center items-center p-4 md:p-10 text-black">
            <ServiceCard
              title={"Sales"}
              desc={
                "Implements strategic approaches to generate leads, close deals, and boost revenue through effective marketing and client relationship management."
              }
            />
            <ServiceCard
              title={"Event Organizing"}
              desc={
                "Focuses on visual content creation for print, digital, and multimedia platforms. Includes posters, advertisements, packaging, and motion graphics."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;