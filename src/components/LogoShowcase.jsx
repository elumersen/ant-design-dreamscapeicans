
import { Modal } from 'antd';
import { motion } from "framer-motion";

import React, { useEffect, useRef,useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

  const [isMortageModalOpen, setMortageModalOpen] = useState(false);
  const [isDentalModalOpen, setDentalModalOpen] = useState(false);
  const [isElecModalOpen, setElecModalOpen] = useState(false);
  const [isPodcastModalOpen, setPodcastModalOpen] = useState(false);

  const handlMortageModal = ()=>{
    setMortageModalOpen(true);
  }
  const handlDentalModal = ()=>{
    setDentalModalOpen(true);
  }
  const handlElecModal = ()=>{
    setElecModalOpen(true);
  }
  const handlPodcastModal = ()=>{
    setPodcastModalOpen(true);
  }

  const dentalImage =    [
    "/lovable-uploads/dental_care_1.webp",
    "/lovable-uploads/dental_care_4.avif",
    "/lovable-uploads/dental_care_2.avif",
  ];
  const mortageImage =    [
    "/lovable-uploads/mortgage_1.avif",
    "/lovable-uploads/mortgage_2.jpg",
  ];
  const elecImage =    [
    "/lovable-uploads/electric_car_3.avif",
    "/lovable-uploads/electric_4.avif",
    "/lovable-uploads/electric_car_1.webp",

  ];
  const podcastImage =    [
    "/lovable-uploads/podcast.avif",
   
  ];
const MortageModal = ({images,isOpen,closeModal}) => {
  const [index, setIndex] = useState(0);
 

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Modal open={isOpen} footer={null} closeIcon={null} className='modal' onCancel={closeModal} >
      <div className="carousel">
        <div className="carousel-image-container">
          <motion.img
            key={index} // Key helps trigger animation when index changes
            src={images[index]}
            alt={`Slide ${index}`}
            initial={{ opacity: 0, x: 100 }} // Start off-screen
            animate={{ opacity: 1, x: 0 }} // Animate into view
            exit={{ opacity: 0, x: -100 }} // Exit animation
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="carousel-image"
          />
        </div>
        {/* <div className="carousel-controls">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div> */}
        <div className="pagination">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${index === idx ? "active" : ""}`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};


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
// 
    if (titleRef.current) observer.observe(titleRef.current);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className=" md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef} 
          className="text-center mb-10 opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
                    <h3 className="$text-xl font-normal mb-4">OUR WORK IN ACTION</h3>

          <h2 className="text-3xl font-bold mb-4">Logo Creations That Speak for Your <span style={{color:"#dd6b31"}}>Brand</span> </h2>
        </div>

        <div 
          ref={containerRef} 
          className="rounded-lg gap-6 opacity-0 w-full md:p-20  lg:p-20 p-5  radi"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards',backgroundColor:"#eaf4e6" }}
        >
          <div className='w-full h-[15rem] bg-white flex justify-center rounded-3xl p-8 mb-10'         onClick={handlMortageModal}
        >
           
          <img src="/lovable-uploads/mortage.png" alt="mortage Image" />

          </div>
          <div class="flex flex-col md:flex-row md:gap-8 px-4 md:px-8 gap-8">
  <div class="w-full  md:w-1/3 lg:w-1/2 bg-white p-10 text-white text-center rounded-3xl  " onClick={handlPodcastModal}>
  <img src="/lovable-uploads/pod.png" alt="AVIF Image"/>

  </div>
  <div class="w-full  md:w-1/3 lg:w-1/2 bg-white p-10 text-white text-center rounded-3xl " onClick={handlDentalModal}>
  <img src="/lovable-uploads/dental.png" alt="dental Image" />
  </div>
  <div class="w-full  md:w-1/3 lg:w-1/2 bg-white pt-20 p-5 text-white text-center rounded-3xl " onClick={handlElecModal}>
  <img src="/lovable-uploads/elec.png" alt="AVIF Image" />
  </div>
</div>

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
      <MortageModal images={dentalImage} isOpen={isDentalModalOpen} closeModal={()=>setDentalModalOpen(false)}/>
      <MortageModal images={mortageImage} isOpen={isMortageModalOpen} closeModal={()=>setMortageModalOpen(false)}/>
      <MortageModal images={elecImage} isOpen={isElecModalOpen} closeModal={()=>setElecModalOpen(false)}/>
      <MortageModal images={podcastImage} isOpen={isPodcastModalOpen} closeModal={()=>setPodcastModalOpen(false)}/>

    </section>
  );
};

export default LogoShowcase;
