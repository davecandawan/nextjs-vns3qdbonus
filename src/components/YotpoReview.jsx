import React, { useState, useEffect, useRef } from "react";
import "./YotpoReview.css";

const ReviewsSection = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewWidth = 350; // Adjust based on actual review card width + margin

  // Original reviews list
  const reviews = [
    {
      name: "Graciano O.",
      date: "03/29/25",
      title: "Fits my Glock 43x perfectly!",
      body: "Fits my Glock 43x perfectly. I don’t have any attachments to it but it should not be a problem.",
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

  // **Duplicate the reviews array for seamless looping**
  const loopingReviews = [
    {
      name: "Graciano O.",
      date: "03/29/25",
      title: "Fits my Glock 43x perfectly!",
      body: "Fits my Glock 43x perfectly. I don’t have any attachments to it but it should not be a problem.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex + 1 >= loopingReviews.length / 2) {
          carouselRef.current.style.transition = "none";
          setTimeout(() => {
            setCurrentIndex(0); 
            carouselRef.current.style.transition = "transform 0.5s ease-in-out";
          }, 100);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideCarousel = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "right") {
        return prevIndex + 1 >= loopingReviews.length / 2 ? 0 : prevIndex + 1;
      }
      return prevIndex - 1 < 0 ? loopingReviews.length / 2 - 1 : prevIndex - 1;
    });
  };

  return (
    <>
      <div className="msg-text textmarginyotpo" style={{ paddingTop: "20px" }}>
        <span className="color-orange reviewheader">What Our Customers Are Saying</span>
      </div>

      <div className="carousel-containeryotpo">
        <button className="arrowleftyotpo left-arrowyotpo" onClick={() => slideCarousel("left")}>
          ❮
        </button>
        <button className="arrowrightyotpo right-arrowyotpo" onClick={() => slideCarousel("right")}>
          ❯
        </button>

        <div className="reviewtotalyotpo">
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/reviewstars.webp?v=1743498402"
            alt="Review Check"
            height="17"
            width="95"
          />
          <p style={{ paddingTop: "5px", paddingLeft: "10px" }}>7246 reviews</p>
        </div>

        <div
          className="carouselyotpo"
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentIndex * reviewWidth}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {loopingReviews.map((review, index) => (
            <div className="reviewyotpo" key={index}>
              <div className="review-contentyotpo">
                <div className="reviewnameyotpo">
                  <h4>{review.name}</h4>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/small_green_check.webp?v=1743438178"
                    alt="Green Check"
                    height="10"
                    width="10"
                  />
                  <p style={{ color: "gray" }}>Verified Buyer</p>
                  <p style={{ color: "gray" }}>{review.date}</p>
                </div>
                <p className="staryotpo">★★★★★</p>
                <div className="revdescriptionyotpo">
                  <p className="revtitleyotpo">{review.title}</p>
                  <p className="revbodyyotpo">{review.body}</p>
                  <div className="productimgyotpo">
                    <img
                      src="https://cdn-yotpo-images-production.yotpo.com/Product/738532585/621151684/square.png?1729090428"
                      alt="VNSH Holster"
                      height="25"
                      width="25"
                      style={{ paddingRight: "5px" }}
                    />
                    <p style={{ color: "gray", fontSize: "15px", paddingTop: "5px" }}>
                      The VNSH Holster
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;