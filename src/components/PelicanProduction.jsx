
import React, { useEffect, useRef, useState } from 'react';

const categories = [
  {
    id: 1,
    title: "Explainers",
    imgSrc: "https://placehold.co/300x200/ffa500/fff?text=Explainer+Video",
  },
  {
    id: 2,
    title: "Next-Level Promos",
    imgSrc: "https://placehold.co/300x200/4cb963/fff?text=Promo+Video",
  },
  {
    id: 3,
    title: "Stories",
    imgSrc: "https://placehold.co/300x200/9b5de5/fff?text=Story+Video",
  },
];

const VideoPlayer = ({width = "w-full", src} )=>{
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // useRef to access the video DOM element

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play(); // Play the video
  };

  // Pause the video
  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause(); // Pause the video
  };
  const handleEnded = () => {
    setIsPlaying(false);
    videoRef.current.currentTime = 0; // Reset video to start
  };
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const progress = (video.currentTime / video.duration) * 100;
    document.getElementById("seek-bar").value = progress;
  };
  return(

  <div className={`video-container ${width}  max-w-full  relative inline-block rounded-lg overflow-hidden group mt-8`}>
  <video 
  ref={videoRef}
  onEnded={handleEnded}
  onTimeUpdate={handleTimeUpdate}
  controls width="900" 
  preload="metadata" 
  className='w-full rounded-3xl'
   id="myVideo">
 
 <source src={src} type="video/mp4" />
 </video>
<button
onClick={isPlaying ? handlePause : handlePlay}
className="pause-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white rounded-full p-4 text-2xl group-hover:block hidden"
>
{isPlaying ? "❚❚" : "▶"}
</button>
</div>
  )
}

const PelicanProduction = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const categoriesRef = useRef(null);
  const videoSources = [
    "/video/Pelicans Production.mp4",
    "/video/Kabnes Promo.mp4",
    "/video/Pelicans Production.mp4",
    "/video/Kabnes Promo.mp4",
  ];

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
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (categoriesRef.current) observer.observe(categoriesRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (categoriesRef.current) observer.unobserve(categoriesRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 ">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-4">
          <h2 
            ref={titleRef} 
            className="text-3xl font-bold mb-2 opacity-0"
            style={{ animationFillMode: 'forwards' }}
          >
           <span className="text-[#dd6b31]"> Pelican Production </span>  in Motion
          </h2>

        </div>
        
        <div className='bg-[rgba(138,75,158,0.10196078431372549)] text-center p-8 py-12 rounded-2xl'>
        <p 
            ref={subtitleRef} 
            className="text-2xl tracking-wider text-gray-600 opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Crafting Quality Visuals
          </p>
          <div className="w-20 h-1 bg-brand-orange mx-auto mt-4"></div>
          <VideoPlayer width='w-1/2' src="/video/Pelicans Production.mp4"/>

        <div 
          ref={categoriesRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          {categories.map((category) => (
            <div> 
              <p className='text-gray-500  text-2xl  tracking-wider' >{category.title}</p>
               {/* <div 
              key={category.id} 
              className="rounded-2xl w-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            > */}
               <VideoPlayer src={videoSources[category.id]}/>
              
            {/* </div> */}
            </div>
           
          ))}
        </div>
        </div>
      </div>
  
    </section>
  );
};



export default PelicanProduction;
