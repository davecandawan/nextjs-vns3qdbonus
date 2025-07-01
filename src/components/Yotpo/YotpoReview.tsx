'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Review {
  name: string;
  date: string;
  title: string;
  body: string;
}

const YotpoReview: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewWidth = 350; // Adjust based on actual review card width + margin

  // Original reviews list
  const reviews: Review[] = [
    {
      name: 'Graciano O.',
      date: '03/29/25',
      title: 'Fits my Glock 43x perfectly!',
      body: "Fits my Glock 43x perfectly. I don't have any attachments to it but it should not be a problem.",
    },
    {
      name: 'Michael M.',
      date: '03/29/25',
      title: "I'm very satisfied, way more!",
      body: "I'm very satisfied, way more comfortable than expected. I will purchase another so I can rotate them out during washes.",
    },
    {
      name: 'Jay P.',
      date: '03/29/25',
      title: 'Fits well, soft and comfortable!',
      body: 'Fits well, soft and comfortable, secures the pistol and magazines! I am very happy with this product.',
    },
    {
      name: 'Allen C.',
      date: '03/29/25',
      title: "I've purchased a lot of belts!",
      body: "I've purchased a lot of belts, this one is by far the best one I've purchased and will stick to. I've recommended it to my coworkers.",
    },
    {
      name: 'China B.',
      date: '03/29/25',
      title: 'Best comfort out there.',
      body: 'Best comfort out there. After some time you forget you have it on. Quick draw the holster is a bit snug. Spots for extra clips! 10 out of 10.',
    },
  ];

  // Duplicate the reviews array for seamless looping
  const loopingReviews = [...reviews, ...reviews];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex + 1 >= reviews.length) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            setTimeout(() => {
              setCurrentIndex(0);
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
              }
            }, 100);
            return prevIndex;
          }
        }
        return (prevIndex + 1) % reviews.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const slideCarousel = (direction: 'left' | 'right') => {
    setCurrentIndex(prevIndex => {
      if (direction === 'right') {
        return (prevIndex + 1) % reviews.length;
      } else {
        return (prevIndex - 1 + reviews.length) % reviews.length;
      }
    });
  };

  // Calculate transform value for the carousel
  const transformValue = `translateX(calc(-${currentIndex * (100 / 3)}% - ${(currentIndex * 20) / 3}px))`;

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        <span className="text-orange-500">What Our Customers Are Saying</span>
      </h2>

      <div className="relative overflow-hidden w-full">
        {/* Left Arrow */}
        <button
          onClick={() => slideCarousel('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-10 text-white rounded-full w-10 h-10 items-center justify-center hover:bg-opacity-40 transition-all duration-300"
          aria-label="Previous review"
        >
          &larr;
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out gap-5"
          style={{ transform: transformValue }}
        >
          {loopingReviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-5 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex text-orange-400 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="mr-1">
                      ★
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">{review.name}</span>
                  <span className="mx-1">•</span>
                  <span>{review.date}</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">{review.title}</h4>
              <p className="text-gray-600 text-sm mt-auto">{review.body}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => slideCarousel('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-10 text-white rounded-full w-10 h-10 items-center justify-center hover:bg-opacity-40 transition-all duration-300"
          aria-label="Next review"
        >
          &rarr;
        </button>
      </div>

      {/* Mobile Indicators */}
      <div className="flex justify-center mt-6 space-x-2 md:hidden">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex % reviews.length === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default YotpoReview;
