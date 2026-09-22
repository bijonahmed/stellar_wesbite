"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "./Slider";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api";

/* ---- Palette ----
  ink        #10202F   deep navy-charcoal (headlines, dark sections)
  paper      #FAF7F1   warm ivory (base background, replaces stark white)
  stone      #F2ECE0   warm sand (alternating sections, replaces flat grey)
  brass      #A9822E   muted brass gold (accent)
  brass-deep #7C5F22   brass hover / pressed state
  slate      #5C6670   body copy
  line       #E3DCC9   warm hairline border
*/

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A9822E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Premium Residences",
    desc: "Thoughtfully designed homes with spacious floor plans and luxury finishes.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A9822E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Prime Locations",
    desc: "Strategically chosen sites in Dhaka's most desirable neighbourhoods.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A9822E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Transparent Process",
    desc: "Clear communication and honest pricing with no hidden charges.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A9822E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Quality Construction",
    desc: "Premium materials and skilled craftsmanship backed by rigorous quality checks.",
  },
];

const steps = [
  { num: "01", icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2", title: "Site Selection & Planning", desc: "We identify prime locations in Dhaka and develop comprehensive project plans that maximize value for our clients." },
  { num: "02", icon: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", title: "Design & Architecture", desc: "Our expert architects create designs that harmonize modern aesthetics with functional living spaces and structural integrity." },
  { num: "03", icon: "M2 20h20 M5 20V8l7-5 7 5v12 M9 20v-6h6v6", title: "Construction & Delivery", desc: "Rigorous project oversight ensures superior quality standards, timely completion, and a seamless handover experience." },
];

function ProjectCard({ project, status, href = "/projects", fullWidth }) {
  const isOngoing = status === "Ongoing";
  return (
    <Link href={href} className="ss-card">
      <div className={fullWidth ? "ss-card-media ss-card-media-wide" : "ss-card-media"}>
        {project.thumnail_img && (
          <img src={project.thumnail_img} alt={project.name} />
        )}
        <span className={`ss-badge ${isOngoing ? "ss-badge-brass" : "ss-badge-ink"}`}>{status}</span>
        <div className="ss-card-overlay">
          <h3>{project.name}</h3>
          <span className="ss-card-link">
            View project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const [homeData, setHomeData] = useState(null);
  const [whoWeAre, setWhoWeAre] = useState(null);
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [upcomingProjects, setUpcomingProjects] = useState([]);
  const [loadingOngoing, setLoadingOngoing] = useState(true);
  const [loadingUpcoming, setLoadingUpcoming] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/public/getsPost`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          const homePosts = data.data.filter((p) => p.categoryId === 22);
          homePosts.forEach((post) => {
            if (post.id === 1) setHomeData(post);
            if (post.id === 2) setWhoWeAre(post);
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch(`${API_BASE}/public/getsPost?slug=ongoing-projects`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) setOngoingProjects(data.data);
        setLoadingOngoing(false);
      })
      .catch(() => setLoadingOngoing(false));
  }, []);

  useEffect(() => {
    fetch(`${API_BASE}/public/getsPost?slug=upcoming-projects`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) setUpcomingProjects(data.data);
        setLoadingUpcoming(false);
      })
      .catch(() => setLoadingUpcoming(false));
  }, []);

  return (
    <>
      <main className="ss-main">
        {/* Hero Slider */}
        <section>
          <Slider />
        </section>

        {/* Intro Section */}
        <section className="ss-section ss-section-paper">
          <div className="container">
            <div className="ss-intro">
              <h2>
                {homeData?.name || <>Crafting premium living spaces across Dhaka</>}
              </h2>
              <div className="ss-rule" />
              <p>
                Stellar Structures Limited is a trusted name in Bangladesh&apos;s real estate industry,
                delivering exceptional residential and commercial developments built on quality,
                transparency, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="ss-section ss-section-paper ss-section-tight">
          <div className="container">
            <div className="ss-features-grid">
              {features.map((f, i) => (
                <div key={i} className="ss-feature">
                  <div className="ss-feature-plate">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="ss-section ss-section-stone">
          <div className="container">
            <div className="ss-section-head">
              <span className="ss-eyebrow">Active developments</span>
              <h2>Ongoing Projects</h2>
              <div className="ss-rule" />
              <p>Explore our active developments bringing premium living spaces to Dhaka&apos;s most prestigious addresses.</p>
            </div>

            {loadingOngoing ? (
              <div className="ss-loading"><div className="ss-spinner" /></div>
            ) : ongoingProjects.length > 0 ? (
              <ProjectCard project={ongoingProjects[ongoingProjects.length - 1]} status="Ongoing" href="/services/ongoing-projects" fullWidth />
            ) : (
              <p className="ss-empty">No ongoing projects found.</p>
            )}

            {ongoingProjects.length > 0 && (
              <div className="ss-center">
                <Link href="/services/ongoing-projects" className="ss-btn ss-btn-brass">
                  View all ongoing
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="ss-section ss-section-paper">
          <div className="container">
            <div className="ss-section-head">
              <span className="ss-eyebrow">Coming soon</span>
              <h2>Upcoming Projects</h2>
              <div className="ss-rule" />
              <p>Be the first to discover our exciting new developments coming soon to Dhaka&apos;s most prestigious addresses.</p>
            </div>

            {loadingUpcoming ? (
              <div className="ss-loading"><div className="ss-spinner" /></div>
            ) : upcomingProjects.length > 0 ? (
              <div className="ss-project-grid">
                {upcomingProjects.slice(-2).map((p, i) => (
                  <ProjectCard key={p.id || i} project={p} status="Upcoming" href="/services/upcoming-projects" />
                ))}
              </div>
            ) : (
              <p className="ss-empty">No upcoming projects found.</p>
            )}

            {upcomingProjects.length > 0 && (
              <div className="ss-center">
                <Link href="/services/upcoming-projects" className="ss-btn ss-btn-brass">
                  View all upcoming
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Our Approach */}
        <section className="ss-section ss-section-stone">
          <div className="container">
            <div className="ss-section-head">
              <h2>Our approach to development</h2>
              <div className="ss-rule" />
              <p>Every project we undertake follows a meticulous process designed to deliver nothing short of excellence.</p>
            </div>
            <div className="row">
              {steps.map((step, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12 ss-step-col">
                  <div className="ss-step">
                    <span className="ss-step-num">{step.num}</span>
                    <div className="ss-step-icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A9822E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={step.icon} /></svg>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="ss-cta">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-sm-12 ss-cta-copy">
                <span className="ss-eyebrow ss-eyebrow-light">Get started</span>
                <h2>Ready to find your dream home?</h2>
                <p>Explore our premium residential and commercial developments designed for those who appreciate uncompromising quality.</p>
              </div>
              <div className="col-lg-4 col-sm-12 ss-cta-action">
                <Link href="/services/upcoming-projects" className="ss-btn ss-btn-outline-light">
                  Explore projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        :root {
          --ss-ink: #10202F;
          --ss-ink-soft: #1B3247;
          --ss-paper: #FAF7F1;
          --ss-stone: #F2ECE0;
          --ss-brass: #A9822E;
          --ss-brass-deep: #7C5F22;
          --ss-slate: #5C6670;
          --ss-line: #E3DCC9;
        }

        .ss-main { overflow: hidden; background: var(--ss-paper); }

        .ss-section { padding: clamp(32px, 4vw, 48px) 0; }
        .ss-section-tight { padding-top: 0; }
        .ss-section-paper { background: var(--ss-paper); }
        .ss-section-stone { background: var(--ss-stone); }

        .ss-rule { width: 44px; height: 2px; background: var(--ss-brass); margin: 16px 0 18px; }
        .ss-intro .ss-rule, .ss-section-head .ss-rule { margin-left: auto; margin-right: auto; }

        .ss-eyebrow {
          display: inline-block;
          font-family: 'Chivo', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: var(--ss-brass-deep);
          letter-spacing: 2px;
          margin-bottom: 14px;
        }
        .ss-eyebrow-light { color: rgba(201,162,39,0.9); }

        .ss-intro { max-width: 760px; margin: 0 auto; text-align: center; }
        .ss-intro h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: var(--ss-ink);
          line-height: 1.25;
          margin: 0;
        }
        .ss-intro p {
          font-family: 'Chivo', sans-serif;
          font-size: clamp(15px, 1.6vw, 17px);
          color: var(--ss-slate);
          line-height: 1.8;
          margin: 0 auto;
          max-width: 640px;
        }

        .ss-section-head { text-align: center; max-width: 620px; margin: 0 auto 32px; }
        .ss-section-head h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(24px, 3.5vw, 38px);
          font-weight: 700;
          color: var(--ss-ink);
          margin: 0;
        }
        .ss-section-head p {
          font-family: 'Chivo', sans-serif;
          font-size: clamp(14px, 1.4vw, 16px);
          color: var(--ss-slate);
          line-height: 1.7;
          margin: 0;
        }

        /* Features */
        .ss-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--ss-line);
          border-left: 1px solid var(--ss-line);
        }
        .ss-feature {
          padding: clamp(24px, 2.5vw, 32px) clamp(18px, 2vw, 24px);
          border-right: 1px solid var(--ss-line);
          border-bottom: 1px solid var(--ss-line);
        }
        .ss-feature-plate {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(169,130,46,0.08);
          border: 1px solid rgba(169,130,46,0.25);
          margin-bottom: 14px;
        }
        .ss-feature h3 {
          font-family: 'Chivo', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--ss-ink);
          margin: 0 0 10px;
        }
        .ss-feature p {
          font-family: 'Chivo', sans-serif;
          font-size: 14px;
          color: var(--ss-slate);
          line-height: 1.7;
          margin: 0;
        }

        /* Project cards */
        .ss-project-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ss-card { text-decoration: none; display: block; }
        .ss-card-media {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          cursor: pointer;
          border: 1px solid var(--ss-line);
        }
        .ss-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .ss-card:hover .ss-card-media img { transform: scale(1.06); }
        .ss-card:hover .ss-card-overlay { opacity: 1; }

        .ss-card-media-wide {
          aspect-ratio: 21 / 6;
          animation: ss-fadeSlideUp 0.6s ease both;
        }
        .ss-card-media-wide .ss-card-overlay { opacity: 1; }
        .ss-card-media-wide .ss-card-overlay h3 {
          font-size: clamp(1.4rem, 3vw, 2rem);
        }

        @keyframes ss-fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ss-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 5px 16px;
          color: #fff;
          font-family: 'Chivo', sans-serif;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          z-index: 2;
        }
        .ss-badge-brass { background: var(--ss-brass); }
        .ss-badge-ink { background: var(--ss-ink); }

        .ss-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(16,32,47,0.9) 0%, rgba(16,32,47,0.25) 55%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(20px, 3vw, 32px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .ss-card-overlay h3 {
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 700;
          color: #fff;
          font-family: 'Chivo', sans-serif;
          margin: 0 0 6px;
          line-height: 1.3;
        }
        .ss-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ss-brass);
          font-family: 'Chivo', sans-serif;
          font-size: 13px;
          font-weight: 700;
        }

        .ss-loading { padding: 60px 0; text-align: center; }
        .ss-empty {
          color: #9A9280;
          text-align: center;
          font-family: 'Chivo', sans-serif;
          font-size: 15px;
          padding: 40px 0;
        }
        .ss-center { text-align: center; margin-top: 28px; }

        .ss-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          font-family: 'Chivo', sans-serif;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ss-btn-brass { background: var(--ss-brass); color: #fff; }
        .ss-btn-brass:hover { background: var(--ss-brass-deep); }
        .ss-btn-outline-light {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.35);
        }
        .ss-btn-outline-light:hover {
          background: var(--ss-brass);
          border-color: var(--ss-brass);
        }

        /* Process steps */
        .ss-step-col { margin-bottom: 16px; }
        .ss-step {
          padding: 28px 22px;
          background: var(--ss-paper);
          border: 1px solid var(--ss-line);
          text-align: center;
          height: 100%;
          position: relative;
        }
        .ss-step-num {
          position: absolute;
          top: 20px;
          right: 24px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--ss-brass);
          letter-spacing: 1px;
        }
        .ss-step-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(169,130,46,0.08);
          border: 1px solid rgba(169,130,46,0.25);
          margin: 0 auto 12px;
        }
        .ss-step h3 {
          font-family: 'Chivo', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--ss-ink);
          margin: 0 0 10px;
        }
        .ss-step p {
          font-family: 'Chivo', sans-serif;
          font-size: 14px;
          color: var(--ss-slate);
          line-height: 1.6;
          margin: 0;
        }

        /* CTA */
        .ss-cta {
          background: linear-gradient(135deg, #10202F 0%, #16293B 55%, #10202F 100%);
          padding: clamp(36px, 5vw, 56px) 0;
        }
        .ss-cta-copy { margin-bottom: 24px; }
        .ss-cta-copy h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px;
          line-height: 1.25;
        }
        .ss-cta-copy p {
          font-family: 'Chivo', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.62);
          margin: 0;
          max-width: 500px;
        }
        .ss-cta-action { text-align: right; }

        @media (max-width: 991px) {
          .ss-features-grid { grid-template-columns: repeat(2, 1fr); }
          .ss-cta-action { text-align: left; margin-top: 8px; }
        }
        @media (max-width: 767px) {
          .ss-project-grid { grid-template-columns: 1fr; }
          .ss-features-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
