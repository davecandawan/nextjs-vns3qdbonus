import React, { useState, useEffect, useRef } from 'react';
import styles from './YotpoReview.module.css';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Review {
  name: string;
  date: string;
  title: string;
  body: string;
}

const YotpoReview: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Original reviews list
  const reviews: Review[] = [
    {
      name: "Graciano O.",
      date: "03/29/25",
      title: "Fits my Glock 43x perfectly!",
      body: "Fits my Glock 43x perfectly. I don't have any attachments to it but it should not be a problem.",
    },
    {
      name: "Michael M.",
      date: "03/29/25",
      title: "I'm very satisfied, way more!",
      body: "I'm very satisfied, way more comfortable than expected. I will purchase another so I can rotate them out during washes.",
    },
    {
      name: "Jay P.",
      date: "03/29/25",
      title: "Fits well, soft and comfortable!",
      body: "Fits well, soft and comfortable, secures the pistol and magazines! I am very happy with this product.",
    },
    {
      name: "Allen C.",
      date: "03/29/25",
      title: "I've purchased a lot of belts!",
      body: "I've purchased a lot of belts, this one is by far the best one I've purchased and will stick to. I've recommended it to my coworkers.",
    },
    {
      name: "China B.",
      date: "03/29/25",
      title: "Best comfort out there.",
      body: "Best comfort out there. After some time you forget you have it on. Quick draw the holster is a bit snug. Spots for extra clips! 10 out of 10.",
    },
  ];

  // Duplicate reviews for infinite loop effect
  const loopingReviews = [...reviews, ...reviews];

  // Auto-advance carousel
  useEffect(() => {
    if (isHovered) return; // Pause on hover
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 >= reviews.length) {
          // Reset to start for smooth loop
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              setCurrentIndex(0);
              if (carouselRef.current) {
                carouselRef.current.style.transition = "transform 0.5s ease-in-out";
              }
            }, 50);
            return prevIndex;
          }
        }
        return (prevIndex + 1) % reviews.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, reviews.length]);

  const slideCarousel = (direction: 'left' | 'right') => {
    setCurrentIndex(prevIndex => {
      if (direction === 'right') {
        return (prevIndex + 1) % reviews.length;
      } else {
        return prevIndex === 0 ? reviews.length - 1 : prevIndex - 1;
      }
    });
  };

  // Calculate transform for the carousel
  const getTransform = () => {
    if (typeof window === 'undefined') return 'translateX(0)';
    
    const cardWidth = 350; // Width of each review card + gap
    const offset = -currentIndex * cardWidth;
    return `translateX(${offset}px)`;
  };

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.reviewHeader}>
        What Our <span className={styles.colorOrange}>Customers</span> Say
      </h2>
      
      <div 
        className={styles.carouselContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          className={styles.arrowLeft} 
          onClick={() => slideCarousel('left')}
          aria-label="Previous review"
        >
          <FaChevronLeft />
        </button>
        
        <div className={styles.carouselWrapper}>
          <div 
            ref={carouselRef}
            className={styles.carousel}
            style={{
              transform: getTransform(),
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {loopingReviews.map((review, index) => (
              <div key={`${review.name}-${index}`} className={styles.review}>
                <div className={styles.starRating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                  ))}
                </div>
                <h4 className={styles.reviewTitle}>{review.title}</h4>
                <p className={styles.reviewBody}>{review.body}</p>
                <div className={styles.reviewFooter}>
                  <span className={styles.reviewName}>{review.name}</span>
                  <span className={styles.reviewDate}>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className={styles.arrowRight} 
          onClick={() => slideCarousel('right')}
          aria-label="Next review"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default YotpoReview;
