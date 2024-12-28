"use client"
import { useState } from "react";


const Carousel = () => {
  const slides = [
    {
      "img":"/background.jpg",
      "Title" : "Finance",
      "Description" : "Offering finance specialists to maximize investment opportunities.",
    },
    {   
        "img":"/background.jpg",
        "Title" : "BPO",
        "Description" : "Providing efficient resources for streamlined customer support and service.",
    },
    {
      "img":"/background.jpg",
        "Title" : "IT & Technology",
        "Description" : "Delivering talented tech professionals for cutting-edge solutions.",
    },
    {
      "img":"/background.jpg",
        "Title" : "Hospitality",
        "Description" : "Supplying committed staff to ensure exceptional guest experiences.",
    },
    {
      "img":"/background.jpg",
        "Title" : "Banking",
        "Description" : "Offers financial services including deposits, loans, and money management to individuals and businesses.",
    },
    {
      "img":"/background.jpg",
        "Title" : "Edutech",
        "Description" : "Equipping businesses with educators and developers for impactful learning solutions.",
    },
    {
      "img":"/background.jpg",
        "Title" : "Fintech",
        "Description" : "Enabling access to innovators driving advancements in financial technology.",
    },
    {
      "img":"/background.jpg",
        "Title" : "Retail",
        "Description" : "Bringing in marketing and sales experts to elevate customer engagement.",
    },
    {
      "img":"/background.jpg",
        "Title" : "FMCG",
        "Description" : "Industry focused on the production and distribution of everyday consumer goods like food, beverages, and personal care products.",
    },
    {
      "img":"/background.jpg",
        "Title" : "NBFC",
        "Description" : "Providing financial services like loans and investments without holding a banking license.",
    },
    {
      "img":"/background.jpg",
        "Title" : "Telecom",
        "Description" : "Enhancing connectivity with professionals skilled in telecommunications.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-3 relative h-96 rounded-md w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-96 w-full flex-shrink-0 bg-cover bg-center gradient-hover-box rounded-lg drop-shadow shadow-md mx-5"
            style={{
              backgroundImage: `url(${slide.img})`,
            }}
          >
            <h1 className="font-bold text-xl text-center py-24 text-white">{slide.Title}</h1>
            <p className="text-white text-center">{slide.Description}</p>
          </div>
        ))}
      </div>

     

      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div> */}
    </div>

     {/* Previous Button */}
     <button
     className="text-black ring-2 ring-black px-6 py-5 rounded-full m-5 hover:bg-black hover:text-white duration-500"
     onClick={prevSlide}
   >
     &larr; Previous
   </button>

   {/* Next Button */}
   <button
     className="text-black ring-2 ring-black px-6 py-5 rounded-full m-5 hover:bg-black hover:text-white duration-500"
     onClick={nextSlide}
   >
     Next &rarr; 
   </button>
   </>
  );
};

export default Carousel;