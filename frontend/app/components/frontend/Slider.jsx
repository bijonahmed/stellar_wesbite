"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import "../styles/HomTopslider.css";
import useCategories from "../../hooks/useCategories";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slider-arrow slider-arrow-left"
    aria-label="Previous slide"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slider-arrow slider-arrow-right"
    aria-label="Next slide"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>
);

export default function FullWidthSlider() {
  const { sliderData, loading } = useCategories();

  if (loading) {
    return (
      <div className="slider-loader">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  if (!sliderData || sliderData.length === 0) return null;

  return (
    <div>
      <div className="slider-wrapper" style={{ marginTop: "-25px" }}>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          showDots
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          swipeable
        >
          {sliderData.map((img, index) => (
            <div key={index}>
              <img
                src={img.home_slider}
                className="slider-image"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
