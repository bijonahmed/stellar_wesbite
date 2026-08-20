"use client";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import Slider from "./Slider";

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [zoomed, setZoomed] = useState(false);

  const galleryImages = [
    { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-1.jpg", title: "Bashundhara R/A — Phase I", location: "Bashundhara, Dhaka" },
    { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-5.jpg", title: "Jolshiri R/A — Luxury Living", location: "Jolshiri, Dhaka" },
    { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-9.jpg", title: "Premium Lobby & Common Areas", location: "Elegant Interiors" },
    { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-12.jpg", title: "Rooftop Amenities & Sky Lounge", location: "Exclusive Amenities" },
    { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-16.jpg", title: "Intelligent Floor Plans", location: "1,200 – 2,800 sqft" },
    { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-20.jpg", title: "Superior Construction Quality", location: "Premium Materials" },
  ];

  const faqData = [
    {
      id: "One",
      question: "How do I book an apartment with Stellar Structures?",
      answer: "Booking an apartment with Stellar Structures is a straightforward process. Simply contact our sales team or visit our office to discuss available units. Once you select your preferred apartment, we will guide you through the booking documentation, outline the payment plan, and secure your unit with a booking confirmation.",
    },
    {
      id: "Two",
      question: "What payment plans do you offer?",
      answer: "We offer flexible payment plans tailored to suit different financial capabilities. Options include during-construction installment plans and post-handover payment schedules. Each project has its own specific plan, and our sales team will provide detailed breakdowns during your consultation.",
    },
    {
      id: "Three",
      question: "When will my project be completed?",
      answer: "We are committed to timely delivery. Each project has a defined timeline shared during the booking phase. We provide regular construction updates so you can track progress. In the unlikely event of a delay, our team communicates proactively and provides revised schedules.",
    },
    {
      id: "Four",
      question: "What materials and standards do you use?",
      answer: "We use only premium-grade materials sourced from trusted suppliers. Our construction follows national and international building codes, with third-party quality inspections at every stage to ensure structural integrity, safety, and longevity of every project.",
    },
    {
      id: "Five",
      question: "Do you offer after-sales and handover support?",
      answer: "Absolutely. Our relationship does not end at handover. We provide comprehensive post-handover support including maintenance assistance, warranty coverage on structural elements, and a dedicated customer service team to address any concerns promptly.",
    },
    {
      id: "Six",
      question: "Can non-resident Bangladeshis (NRB) invest with Stellar Structures?",
      answer: "Yes, we warmly welcome investments from non-resident Bangladeshis. We have a dedicated NRB support team that handles everything remotely — from virtual tours and documentation to payment processing and legal compliance — making the entire investment process seamless and secure.",
    },
    {
      id: "Seven",
      question: "Where are your current projects located?",
      answer: "Our current projects are located in some of Dhaka's most prestigious areas including Bashundhara R/A and Jolshiri R/A. These neighbourhoods offer excellent infrastructure, connectivity, and a premium lifestyle. Visit our projects page for detailed information on each development.",
    },
  ];

  useEffect(() => {
    const loadOwlCarousel = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import("jquery")).default;
        window.$ = window.jQuery = $;
        await import("owl.carousel/dist/owl.carousel.min.js");
        $(".partner-slides").owlCarousel({
          loop: true, margin: 20, nav: false, dots: false, autoplay: true,
          autoplayTimeout: 3000, autoplayHoverPause: true,
          responsive: { 0: { items: 2 }, 576: { items: 3 }, 768: { items: 4 }, 1200: { items: 5 } },
        });
        $(".testimonials-slides").owlCarousel({
          loop: true, margin: 30, nav: false, dots: true, autoplay: true,
          autoplayTimeout: 5000, autoplayHoverPause: true,
          responsive: { 0: { items: 1 }, 768: { items: 1 } },
        });
      }
    };
    loadOwlCarousel();
    return () => {
      if (typeof window !== "undefined" && window.$) {
        const $ = window.$;
        if ($(".partner-slides").data("owl.carousel")) $(".partner-slides").trigger("destroy.owl.carousel");
        if ($(".testimonials-slides").data("owl.carousel")) $(".testimonials-slides").trigger("destroy.owl.carousel");
      }
    };
  }, []);

  useEffect(() => {
    if (lightboxIndex === -1) return;
    const handleKey = (e) => {
      if (e.key === "Escape") { setLightboxIndex(-1); setZoomed(false); }
      if (e.key === "ArrowRight") { setZoomed(false); setLightboxIndex((p) => (p + 1) % galleryImages.length); }
      if (e.key === "ArrowLeft") { setZoomed(false); setLightboxIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length); }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  let touchStartX = 0;
  const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setZoomed(false);
      if (diff > 0) setLightboxIndex((p) => (p + 1) % galleryImages.length);
      else setLightboxIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <style>{`
        .gallery-item { cursor: pointer; overflow: hidden; position: relative; }
        .gallery-item .product-image { overflow: hidden; }
        .gallery-item .product-image img { transition: transform 0.5s ease; }
        .gallery-item:hover .product-image img { transform: scale(1.05); }
        .gallery-overlay { position: absolute; inset: 0; background: rgba(6,20,36,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-overlay-icon { width: 48px; height: 48px; border: 2px solid #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 20px; }
        .lb-backdrop { position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.92); display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .lb-close { position: absolute; top: 12px; right: 16px; z-index: 10; width: 40px; height: 40px; border: none; background: rgba(255,255,255,0.1); border-radius: 50%; color: #fff; font-size: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .lb-close:hover { background: rgba(255,255,255,0.25); }
        .lb-counter { position: absolute; top: 16px; left: 16px; z-index: 10; color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 500; letter-spacing: 2px; }
        .lb-zoom-btn { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); z-index: 10; padding: 6px 16px; border: 1px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.1); border-radius: 4px; color: #fff; font-size: 13px; cursor: pointer; transition: background 0.2s; }
        .lb-zoom-btn:hover { background: rgba(255,255,255,0.25); }
        .lb-img-wrap { max-width: 90vw; max-height: 75vh; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .lb-img-wrap img { max-width: 100%; max-height: 75vh; object-fit: contain; transition: transform 0.35s ease; user-select: none; -webkit-user-drag: none; }
        .lb-img-wrap img.lb-zoomed { transform: scale(2); cursor: zoom-out; }
        .lb-img-wrap img:not(.lb-zoomed) { cursor: zoom-in; }
        .lb-caption { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 32px 20px 20px; text-align: center; }
        .lb-caption h4 { color: #fff; font-size: 18px; font-weight: 600; margin: 0 0 4px; }
        .lb-caption p { color: rgba(255,255,255,0.6); font-size: 13px; margin: 0; }
        .lb-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 10; width: 44px; height: 44px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.4); border-radius: 50%; color: #fff; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .lb-arrow:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.4); }
        .lb-prev { left: 12px; }
        .lb-next { right: 12px; }
        @media (max-width: 768px) {
          .lb-arrow { width: 36px; height: 36px; font-size: 15px; }
          .lb-prev { left: 8px; }
          .lb-next { right: 8px; }
          .lb-close { width: 36px; height: 36px; font-size: 18px; top: 8px; right: 8px; }
          .lb-counter { font-size: 12px; top: 10px; left: 10px; }
          .lb-zoom-btn { font-size: 11px; padding: 5px 12px; top: 10px; }
          .lb-caption { padding: 24px 16px 14px; }
          .lb-caption h4 { font-size: 15px; }
          .lb-caption p { font-size: 12px; }
          .lb-img-wrap { max-width: 96vw; max-height: 65vh; }
          .lb-img-wrap img { max-height: 65vh; }
        }
        @media (max-width: 480px) {
          .lb-arrow { width: 32px; height: 32px; font-size: 14px; }
          .lb-caption h4 { font-size: 13px; }
          .lb-caption p { font-size: 11px; }
        }
      `}</style>

      <main className="main">
        {/* Hero Slider */}
        <section className="section-box">
          <Slider />
        </section>

        {/* Intro */}
        <section className="section-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12"></div>
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-2">
                <h2 className="text-heading-3 color-gray-900">
                  Crafting Premium Living Spaces<br className="d-lg-block d-none" /> Across Dhaka
                </h2>
                <p className="text-body-text color-gray-600 mt-20" style={{ textAlign: "justify" }}>
                  Stellar Structures Limited is a trusted name in Bangladesh&apos;s real estate industry, delivering exceptional residential and commercial developments built on quality, transparency, and innovation.
                </p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12"></div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do">
                <img className="bdrd-16 img-responsive" src="/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-21.jpg" alt="Stellar Structures Premium Real Estate Development in Dhaka" />
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do">
                <span className="tag-1">Who We Are</span>
                <h3 className="text-heading-3 mt-30">Building Landmarks. Creating Better Living.</h3>
                <p className="text-body-text color-gray-600 mt-30 text-justify" style={{ textAlign: "justify" }}>
                  Founded with a vision to redefine urban living in Bangladesh, Stellar Structures Limited brings together passionate professionals dedicated to creating residences that inspire. From site selection to final handover, we maintain the highest standards of construction quality, design innovation, and transparent communication.
                </p>
                <div className="line-bd-green mt-50"></div>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">Premium Residences</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">Thoughtfully designed homes with spacious floor plans and luxury finishes.</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">Prime Locations</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">Strategically chosen sites in Dhaka&apos;s most desirable neighbourhoods.</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">Transparent Process</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">Clear communication and honest pricing with no hidden charges.</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 icon-leaf">Quality Construction</h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">Premium materials and skilled craftsmanship backed by rigorous quality checks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-box mt-lg-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-1 col-12"></div>
              <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                <h2 className="text-heading-3 color-gray-900 mb-10">Our Approach to Development</h2>
                <p className="text-body-text color-gray-600 mt-20">Every project we undertake follows a meticulous process designed to deliver nothing short of excellence.</p>
              </div>
              <div className="col-lg-2 col-sm-1 col-12"></div>
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left"><img src="/frontend_theme/assets/imgs/page/homepage2/icon-acquis.svg" alt="Site Selection and Planning Process" /></span>
                    <h4 className="text-heading-4">1. Site Selection &amp; Planning</h4>
                    <p className="text-body-text color-gray-600 mt-15">We identify prime locations in Dhaka and develop comprehensive project plans that maximize value for our clients.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left"><img src="/frontend_theme/assets/imgs/page/homepage2/icon-active.svg" alt="Design and Architecture Process" /></span>
                    <h4 className="text-heading-4">2. Design &amp; Architecture</h4>
                    <p className="text-body-text color-gray-600 mt-15">Our expert architects create designs that harmonize modern aesthetics with functional living spaces and structural integrity.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="list-icons mt-50">
                  <div className="item-icon">
                    <span className="icon-left"><img src="/frontend_theme/assets/imgs/page/homepage2/icon-retent.svg" alt="Construction and Delivery Process" /></span>
                    <h4 className="text-heading-4">3. Construction &amp; Delivery</h4>
                    <p className="text-body-text color-gray-600 mt-15">Rigorous project oversight ensures superior quality standards, timely completion, and a seamless handover experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-40">
              <h3 className="text-heading-3">Frequently Asked Questions</h3>
              <p className="text-body-text color-gray-600 mt-30">Find answers to common questions about our projects, booking process, and services. If you need more help, our team is always ready to assist.</p>
              <div className="row">
                <div className="col-lg-12 mt-50">
                  <h4 className="text-heading-6 icon-leaf">Booking &amp; Payment</h4>
                  <p className="text-body-excerpt color-gray-600 mt-15">Learn about our flexible payment plans and straightforward booking process.</p>
                </div>
                <div className="col-lg-12 mt-50">
                  <h4 className="text-heading-6 icon-leaf">Project Updates</h4>
                  <p className="text-body-excerpt color-gray-600 mt-15">Stay informed about construction progress and milestone achievements.</p>
                </div>
              </div>
            
            </div>
            <div className="col-lg-7">
              <div className="accordion" id="accordionFAQ">
                {faqData.map((faq, i) => (
                  <div className="accordion-item" key={faq.id}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button text-heading-5 ${i > 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.id}`}
                        aria-expanded={i === 0 ? "true" : "false"}
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                      id={`collapse${faq.id}`}
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        

        {/* Newsletter */}
        <section className="section-box overflow-visible mb-100 d-none">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="bg-2 box-newsletter position-relative">
                  <div className="row">
                    <div className="col-lg-5 col-md-7">
                      <span className="text-body-capitalized color-gray-500 text-uppercase">Stay Updated</span>
                      <h4 className="text-heading-2 mb-10 mt-10">Subscribe to Our Newsletter</h4>
                      <p className="text-body-text color-gray-500">Get the latest updates on our projects, construction milestones, and exclusive offers delivered to your inbox.</p>
                      <div className="box-form-newsletter mt-30">
                        <form className="form-newsletter">
                          <input className="input-newsletter" type="text" defaultValue="" placeholder="Enter your email address" />
                          <button className="btn btn-send"></button>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                      <div className="block-chart shape-1"><img src="/frontend_theme/assets/imgs/template/chart.png" alt="Newsletter Updates" /></div>
                      <img className="img-responsive img-newsletter" src="/frontend_theme/assets/imgs/template/img-newsletter.png" alt="Stellar Structures Newsletter" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
