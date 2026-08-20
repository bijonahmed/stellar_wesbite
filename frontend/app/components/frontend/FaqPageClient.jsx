"use client";

import { useState } from "react";

const faqCategories = [
  {
    category: "Booking & Purchase",
    icon: "fi fi-rr-home",
    items: [
      {
        q: "How do I book an apartment with Stellar Structures?",
        a: "Booking an apartment with Stellar Structures is a straightforward process. Simply contact our sales team or visit our office to discuss available units. Once you select your preferred apartment, we will guide you through the booking documentation, outline the payment plan, and secure your unit with a booking confirmation.",
      },
      {
        q: "What documents do I need for booking?",
        a: "You will need your National ID Card (NID) or passport, passport-size photographs, proof of income or bank statements, a signed booking application form, and the initial deposit receipt. If applying with a nominee, their NID is also required.",
      },
      {
        q: "Can non-resident Bangladeshis (NRB) invest with Stellar Structures?",
        a: "Yes, we warmly welcome investments from non-resident Bangladeshis. We have a dedicated NRB support team that handles everything remotely — from virtual tours and documentation to payment processing and legal compliance — making the entire investment process seamless and secure.",
      },
      {
        q: "How can I schedule a site visit?",
        a: "You can schedule a site visit by contacting our sales team via phone, email, or through the booking form on our website. We offer flexible visiting hours including weekends and will arrange a guided tour of our ongoing projects with a dedicated sales consultant.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    icon: "fi fi-rr-wallet",
    items: [
      {
        q: "What payment plans do you offer?",
        a: "We offer flexible payment plans tailored to suit different financial capabilities. Options include during-construction installment plans and post-handover payment schedules. Each project has its own specific plan, and our sales team will provide detailed breakdowns during your consultation.",
      },
      {
        q: "Is there a discount for early payment?",
        a: "Yes, we offer attractive early-bird discounts and special NRB packages. The discount percentage varies by project and payment timeline. Contact our sales team for the latest offers available for your preferred project.",
      },
      {
        q: "What is the booking amount?",
        a: "The initial booking amount typically starts from 10% of the total unit price, though it may vary by project. The remaining amount is spread across flexible installment plans during and after construction.",
      },
    ],
  },
  {
    category: "Construction & Quality",
    icon: "fi fi-rr-hammer",
    items: [
      {
        q: "When will my project be completed?",
        a: "We are committed to timely delivery. Each project has a defined timeline shared during the booking phase. We provide regular construction updates so you can track progress. In the unlikely event of a delay, our team communicates proactively and provides revised schedules.",
      },
      {
        q: "What materials and construction standards do you use?",
        a: "We use only premium-grade materials sourced from trusted suppliers. Our construction follows national and international building codes, with third-party quality inspections at every stage to ensure structural integrity, safety, and longevity of every project.",
      },
      {
        q: "Do your apartments come with smart home features?",
        a: "Yes, our luxury and premium residential projects include smart home technology as a standard feature. Residents can control lighting, climate, security systems, and entertainment through a single smartphone application, providing convenience and modern living at their fingertips.",
      },
    ],
  },
  {
    category: "Property & Projects",
    icon: "fi fi-rr-building",
    items: [
      {
        q: "What types of properties does Stellar Structures offer?",
        a: "We offer a diverse portfolio including premium apartments, luxury flats, duplex houses, penthouses, commercial office spaces, retail shops, and land plots. Our developments range from 800 to 2,800 square feet, catering to first-time homebuyers, growing families, and luxury seekers alike.",
      },
      {
        q: "Where are your current projects located?",
        a: "Our current projects are located in some of Dhaka's most prestigious areas including Bashundhara R/A and Jolshiri R/A. These neighbourhoods offer excellent infrastructure, connectivity, and a premium lifestyle. Visit our projects page for detailed information on each development.",
      },
    ],
  },
  {
    category: "After-Sales & Support",
    icon: "fi fi-rr-headset",
    items: [
      {
        q: "Do you offer after-sales and handover support?",
        a: "Absolutely. Our relationship does not end at handover. We provide comprehensive post-handover support including maintenance assistance, warranty coverage on structural elements, and a dedicated customer service team to address any concerns promptly.",
      },
      {
        q: "How do I get construction updates for my booked unit?",
        a: "Once you book an apartment, your dedicated relationship manager will share regular construction updates via phone, email, and WhatsApp. You can also visit the site at any time to inspect progress firsthand.",
      },
    ],
  },
];

export default function FaqPageClient() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <>
      {/* FAQ Accordion */}
      <section style={{ padding: "clamp(48px, 6vw, 96px) 0", background: "#FAFAF8" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              {faqCategories.map((cat, ci) => {
                return (
                  <div key={ci} style={{ marginBottom: ci < faqCategories.length - 1 ? "48px" : "0" }}>
                    {/* Category header */}
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          background: "rgba(201,162,39,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <i className={cat.icon} style={{ fontSize: "20px", color: "#C9A227" }} />
                      </div>
                      <h3
                        style={{
                          fontSize: "clamp(18px, 2vw, 24px)",
                          fontWeight: 500,
                          color: "#061424",
                          margin: 0,
                        }}
                      >
                        {cat.category}
                      </h3>
                    </div>

                    {/* Items */}
                    {cat.items.map((item, ii) => {
                      const idx = globalIndex++;
                      const isOpen = active === idx;
                      return (
                        <div
                          key={ii}
                          className="ss-faq-item"
                          style={{
                            marginBottom: "12px",
                            border: "1px solid #EFEFED",
                            background: "#fff",
                            transition: "border-color 0.3s",
                          }}
                        >
                          <div
                            onClick={() => toggle(idx)}
                            style={{
                              cursor: "pointer",
                              padding: "24px 28px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "16px",
                            }}
                          >
                            <h4
                              style={{
                                fontSize: "clamp(15px, 1.6vw, 18px)",
                                fontWeight: 500,
                                color: isOpen ? "#C9A227" : "#061424",
                                margin: 0,
                                transition: "color 0.3s",
                              }}
                            >
                              {item.q}
                            </h4>
                            <span
                              style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                background: isOpen ? "#C9A227" : "rgba(201,162,39,0.1)",
                                color: isOpen ? "#fff" : "#C9A227",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "20px",
                                fontWeight: 300,
                                flexShrink: 0,
                                transition: "all 0.3s",
                              }}
                            >
                              {isOpen ? "−" : "+"}
                            </span>
                          </div>
                          <div
                            style={{
                              maxHeight: isOpen ? "400px" : "0",
                              overflow: "hidden",
                              transition: "max-height 0.4s ease, padding 0.4s ease",
                              padding: isOpen ? "0 28px 24px" : "0 28px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "17px",
                                color: "#8A8A85",
                                lineHeight: 1.85,
                                margin: 0,
                                paddingTop: isOpen ? "4px" : 0,
                              }}
                            >
                              {item.a}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ss-faq-item:hover { border-color: #C9A227 !important; }
      `}</style>
    </>
  );
}
