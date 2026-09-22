"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import "../styles/HomTopslider.css";
import useCategories from "../../hooks/useCategories";

const SLIDE_CONTENT = [
  {
    eyebrow: "STELLAR STRUCTURES LIMITED",
    heading: "Building Landmarks.",
    subheading: "Creating Better Living.",
    description:
      "Crafting exceptional spaces that blend visionary architecture with enduring quality — defining skylines and enriching lives.",
    primaryCta: { label: "Explore Projects", href: "/services/upcoming-projects" },
    secondaryCta: { label: "Learn More", href: "/about" },
  },
  {
    eyebrow: "STELLAR STRUCTURES LIMITED",
    heading: "Where Vision",
    subheading: "Meets Precision.",
    description:
      "From concept to completion, we deliver developments that set new benchmarks in design, craftsmanship, and investment value.",
    primaryCta: { label: "Our Projects", href: "/services/upcoming-projects" },
    secondaryCta: { label: "Our Story", href: "/about" },
  },
  {
    eyebrow: "STELLAR STRUCTURES LIMITED",
    heading: "Redefining",
    subheading: "Modern Living.",
    description:
      "Thoughtfully designed residences and commercial spaces built for those who appreciate uncompromising quality and timeless elegance.",
    primaryCta: { label: "View Projects", href: "/services/upcoming-projects" },
    secondaryCta: { label: "Get in Touch", href: "/contact" },
  },
];

export default function FullWidthSlider() {
  const { sliderData, loading } = useCategories();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  const total = sliderData?.length || 0;

  const goTo = useCallback(
    (idx) => {
      if (isTransitioning || idx === current) return;
      setIsTransitioning(true);
      setCurrent(idx);
      setTimeout(() => setIsTransitioning(false), 900);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    if (total <= 1) return;
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    if (total <= 1) return;
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, total, next]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  if (loading) {
    return (
      <div className="ss-hero-loader">
        <div className="ss-hero-spinner" />
      </div>
    );
  }

  if (!sliderData || sliderData.length === 0) return null;

  return (
    <section
      className="ss-hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero carousel"
    >
      {sliderData.map((slide, i) => {
        const content =
          SLIDE_CONTENT[i] || SLIDE_CONTENT[SLIDE_CONTENT.length - 1];
        const isActive = i === current;

        return (
          <div
            key={i}
            className={`ss-hero-slide ${isActive ? "ss-hero-slide--active" : ""}`}
            aria-hidden={!isActive}
          >
            <div className="ss-hero-img-wrap">
              <img
                src={slide.home_slider}
                alt={`Stellar Structures project ${i + 1}`}
                className="ss-hero-img"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>

            <div className="ss-hero-overlay" />

            <div className={`ss-hero-content ${isActive ? "ss-hero-content--visible" : ""}`}>
              <span className="ss-hero-eyebrow">{content.eyebrow}</span>
             
              <p className="ss-hero-desc">{content.description}</p>
              <div className="ss-hero-actions">
                <Link href={content.primaryCta.href} className="ss-btn ss-btn--primary">
                  {content.primaryCta.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href={content.secondaryCta.href} className="ss-btn ss-btn--outline">
                  {content.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {total > 1 && (
        <>
          <button
            className="ss-hero-arrow ss-hero-arrow--left"
            onClick={prev}
            aria-label="Previous slide"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="ss-hero-arrow ss-hero-arrow--right"
            onClick={next}
            aria-label="Next slide"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {total > 1 && (
        <div className="ss-hero-dots" role="tablist" aria-label="Slide navigation">
          {sliderData.map((_, i) => (
            <button
              key={i}
              className={`ss-hero-dot ${i === current ? "ss-hero-dot--active" : ""}`}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="ss-hero-scroll" aria-hidden="true">
        <span className="ss-hero-scroll-text">Scroll</span>
        <div className="ss-hero-scroll-line" />
      </div>
    </section>
  );
}
