"use client";

import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    icon: "fi fi-rr-comments",
    description:
      "Your journey begins with a one-on-one consultation with our experienced sales advisors. We take the time to understand your lifestyle needs, budget range, preferred locations, and investment goals to recommend the most suitable options from our portfolio.",
    details: [
      "Discuss your family size and space requirements",
      "Review budget and financing options",
      "Explore available projects and locations",
      "Get answers to all your initial questions",
    ],
  },
  {
    num: "02",
    title: "Unit Selection",
    icon: "fi fi-rr-home",
    description:
      "Choose your ideal apartment or commercial unit from our carefully curated inventory. We provide comprehensive information including detailed floor plans, exact area breakdowns, facing directions, and virtual walkthroughs so you can make an informed decision.",
    details: [
      "Detailed floor plans with measurements",
      "Virtual tours and site visit arrangements",
      "Comparison of available units and floors",
      "Guidance on best-value selections",
    ],
  },
  {
    num: "03",
    title: "Documentation",
    icon: "fi fi-rr-file-lines",
    description:
      "Complete the booking paperwork with full transparency and zero hidden complications. Our documentation team walks you through every document, explains each clause, and ensures everything is in order before you sign.",
    details: [
      "Booking application form submission",
      "KYC and identity verification",
      "Allocation letter and agreement review",
      "Legal guidance on all terms",
    ],
  },
  {
    num: "04",
    title: "Payment Plan",
    icon: "fi fi-rr-wallet",
    description:
      "Select a flexible payment structure that aligns with your financial planning. We offer multiple options including during-construction installments, post-handover schedules, and special NRB packages to make your investment comfortable.",
    details: [
      "Customizable installment schedules",
      "During-construction payment milestones",
      "Post-handover payment options",
      "Special early-bird and NRB discounts",
    ],
  },
  {
    num: "05",
    title: "Confirmation",
    icon: "fi fi-rr-badge-check",
    description:
      "Receive your official booking confirmation along with a dedicated relationship manager who will be your single point of contact throughout the construction and handover period. Stay updated with regular progress reports.",
    details: [
      "Official booking confirmation letter",
      "Dedicated relationship manager assigned",
      "Regular construction progress updates",
      "Handover scheduling and coordination",
    ],
  },
];

const documents = [
  { label: "National ID Card (NID) or Passport", icon: "fi fi-rr-id" },
  { label: "Passport-size Photographs (4 copies)", icon: "fi fi-rr-camera" },
  { label: "Proof of Income / Bank Statements", icon: "fi fi-rr-bank" },
  { label: "Signed Booking Application Form", icon: "fi fi-rr-document" },
  { label: "Initial Deposit Receipt", icon: "fi fi-rr-receipt" },
  { label: "NID of Nominee (if applicable)", icon: "fi fi-rr-user" },
];

const benefits = [
  {
    icon: "fi fi-rr-shield-check",
    title: "RERA Registered",
    description: "All projects are fully registered with Bangladesh Real Estate Regulatory Authority.",
  },
  {
    icon: "fi fi-rr-hand-holding-usd",
    title: "Zero Hidden Costs",
    description: "Transparent pricing with no surprise charges. What you see is what you pay.",
  },
  {
    icon: "fi fi-rr-headset",
    title: "Dedicated Support",
    description: "A personal relationship manager assigned from booking to handover and beyond.",
  },
  {
    icon: "fi fi-rr-time-forward",
    title: "On-Time Delivery",
    description: "Proven track record of delivering projects on or before the committed schedule.",
  },
];

const faqs = [
  {
    q: "How much is the initial booking amount?",
    a: "The initial booking amount varies by project and unit size. Typically it starts from 10% of the total unit price. Contact our sales team for project-specific details.",
  },
  {
    q: "Can NRBs book apartments remotely?",
    a: "Yes. We offer a complete remote booking process for Non-Resident Bangladeshis. All documentation can be completed digitally with notarized copies accepted.",
  },
  {
    q: "Is the booking amount refundable?",
    a: "Yes, a full refund is available within the cooling-off period as per our refund policy. After allocation confirmation, standard refund terms apply as outlined in the agreement.",
  },
  {
    q: "How long does the booking process take?",
    a: "From consultation to confirmation, the process typically takes 3-5 business days, subject to document verification and payment clearance.",
  },
];

export default function BookingProcessClient() {
  return (
    <>
      {/* Timeline Steps */}
      <section style={{ padding: "clamp(48px, 6vw, 96px) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "40px", position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "70px" }}>
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #C9A227 0%, #A8841A 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "#fff",
                      flexShrink: 0,
                      boxShadow: "0 4px 20px rgba(201,162,39,0.3)",
                    }}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ width: "2px", flex: 1, background: "linear-gradient(180deg, #C9A227 0%, rgba(201,162,39,0.15) 100%)", minHeight: "48px" }} />
                  )}
                </div>

                <div style={{ paddingBottom: i < steps.length - 1 ? "56px" : "0", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                    <i className={step.icon} style={{ fontSize: "22px", color: "#C9A227" }} />
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(26px, 3vw, 34px)",
                        fontWeight: 700,
                        color: "#061424",
                        margin: 0,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: "17px", color: "#8A8A85", lineHeight: 1.85, marginBottom: "20px" }}>
                    {step.description}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px 28px" }}>
                    {step.details.map((detail, j) => (
                      <li key={j} style={{ fontSize: "16px", color: "#061424", display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: 1.7 }}>
                        <span style={{ color: "#C9A227", fontWeight: 700, fontSize: "12px", marginTop: "6px", flexShrink: 0 }}>&#9670;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section style={{ padding: "clamp(48px, 6vw, 88px) 0", background: "#FAFAF8" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ display: "block", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#C9A227", fontSize: "14px", marginBottom: "14px" }}>Documentation</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#061424", marginBottom: "20px" }}>
              What You Will Need
            </h2>
            <p style={{ fontSize: "18px", color: "#8A8A85", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
              Keep these documents ready to ensure a smooth and hassle-free booking experience.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
                {documents.map((doc, i) => (
                  <div
                    key={i}
                    className="ss-doc-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "18px",
                      padding: "24px 28px",
                      background: "#fff",
                      border: "1px solid #EFEFED",
                      transition: "border-color 0.2s",
                      cursor: "default",
                    }}
                  >
                    <i className={doc.icon} style={{ fontSize: "22px", color: "#C9A227", flexShrink: 0 }} />
                    <span style={{ fontSize: "17px", color: "#061424", fontWeight: 500 }}>{doc.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "clamp(48px, 6vw, 88px) 0", background: "#061424" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ display: "block", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#C9A227", fontSize: "14px", marginBottom: "14px" }}>Trust & Transparency</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#fff", marginBottom: "20px" }}>
              Why Book With Stellar Structures
            </h2>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
              We make property ownership easy with a process built on trust, clarity, and unwavering customer support.
            </p>
          </div>
          <div className="row">
            {benefits.map((b, i) => (
              <div className="col-lg-3 col-md-6" key={i} style={{ marginBottom: "24px" }}>
                <div
                  className="ss-benefit-card"
                  style={{
                    padding: "40px 28px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    textAlign: "center",
                    height: "100%",
                    transition: "border-color 0.3s",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "rgba(201,162,39,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                    }}
                  >
                    <i className={b.icon} style={{ fontSize: "26px", color: "#C9A227" }} />
                  </div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "14px" }}>
                    {b.title}
                  </h4>
                  <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "clamp(48px, 6vw, 88px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{ textAlign: "center", marginBottom: "56px" }}>
                <span style={{ display: "block", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#C9A227", fontSize: "14px", marginBottom: "14px" }}>Quick Answers</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#061424", marginBottom: "20px" }}>
                  Frequently Asked Questions
                </h2>
              </div>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    padding: "28px 0",
                    borderBottom: i < faqs.length - 1 ? "1px solid #EFEFED" : "none",
                  }}
                >
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, color: "#061424", marginBottom: "12px" }}>
                    {faq.q}
                  </h4>
                  <p style={{ fontSize: "17px", color: "#8A8A85", lineHeight: 1.85, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ss-doc-card:hover { border-color: #C9A227 !important; }
        .ss-benefit-card:hover { border-color: rgba(201,162,39,0.3) !important; }
      `}</style>
    </>
  );
}
