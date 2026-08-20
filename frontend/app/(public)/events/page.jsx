import Link from "next/link";
import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";
import StatBar from "../../components/frontend/PageElements/StatBar";

export const metadata = {
  title: "Events - Stellar Structures Limited",
  description: "Stay updated with upcoming and past events by Stellar Structures Limited. Property exhibitions, launch events, community gatherings, and corporate milestones.",
  keywords: ["Stellar Structures events", "property exhibition Dhaka", "real estate events", "project launch"],
  openGraph: { title: "Events - Stellar Structures Limited", description: "Stay updated with upcoming and past events by Stellar Structures Limited.", type: "website" },
};

const upcomingEvents = [
  { title: "Bashundhara R/A Phase 2 Launch Event", date: "15th August 2026", time: "11:00 AM - 3:00 PM", location: "Stellar Structures Sales Gallery, Bashundhara R/A", description: "Join us for the exclusive launch of Phase 2 of our flagship Bashundhara development. Meet our architects, explore floor plans, and take advantage of early-bird pricing offers.", category: "Project Launch", featured: true },
  { title: "Property Investment Seminar 2026", date: "28th August 2026", time: "6:00 PM - 9:00 PM", location: "Radisson Blu Water Garden, Dhaka", description: "A comprehensive seminar on real estate investment opportunities in Dhaka featuring industry experts, market analysis, and exclusive Stellar Structures portfolio insights.", category: "Seminar", featured: false },
  { title: "Community Iftar Gathering", date: "10th March 2026", time: "5:30 PM - 8:00 PM", location: "Stellar Structures Head Office", description: "An evening of community bonding with our valued clients, partners, and team members. Join us for a special Iftar dinner and networking event.", category: "Community", featured: false },
];

const pastEvents = [
  { title: "Jolshiri R/A Groundbreaking Ceremony", date: "12th May 2026", time: "10:00 AM", location: "Jolshiri R/A Site, Uttara", description: "Official groundbreaking ceremony for our upcoming luxury residential project at Jolshiri R/A, attended by distinguished guests and project stakeholders.", category: "Milestone", featured: false },
  { title: "Real Estate Expo Dhaka 2026", date: "22nd - 24th February 2026", time: "10:00 AM - 8:00 PM", location: "Bangabandhu International Conference Center", description: "Stellar Structures showcased our complete portfolio at the largest real estate exhibition in Bangladesh, with exclusive show offers and project walkthroughs.", category: "Exhibition", featured: false },
  { title: "Year-End Client Appreciation Dinner", date: "28th December 2025", time: "7:00 PM - 11:00 PM", location: "InterContinental Dhaka", description: "A grand evening celebrating our partnerships and achievements with valued clients, featuring dinner, entertainment, and exclusive announcements.", category: "Corporate", featured: false },
  { title: "Bashundhara R/A Phase 1 Completion Ceremony", date: "15th November 2025", time: "11:00 AM - 2:00 PM", location: "Stellar Heights, Bashundhara R/A", description: "Celebration of the successful completion and handover of Stellar Heights, our first delivered project, with resident families and project team.", category: "Milestone", featured: false },
];

function EventCard({ event, featured }) {
  return (
    <div style={{ padding: featured ? "32px" : "28px", border: featured ? "2px solid #C9A227" : "1px solid #EFEFED", background: featured ? "rgba(201,162,39,0.03)" : "#fff", marginBottom: "20px", transition: "all 0.3s" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
        <span style={{ padding: "4px 12px", background: featured ? "#C9A227" : "#061424", color: "#fff", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{event.category}</span>
        <span style={{ fontSize: "13px", color: "#8A8A85", fontWeight: 500 }}>{event.date}</span>
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.15rem, 2vw, 1.4rem)", fontWeight: 600, color: "#061424", marginBottom: "8px" }}>{event.title}</h3>
      <p style={{ fontSize: "13px", color: "#C9A227", fontWeight: 500, marginBottom: "4px" }}>{event.time}</p>
      <p style={{ fontSize: "13px", color: "#8A8A85", marginBottom: "12px" }}>{event.location}</p>
      <p style={{ fontSize: "14px", color: "#8A8A85", lineHeight: 1.7, marginBottom: "16px" }}>{event.description}</p>
      {featured && (
        <Link href="/contact" style={{ display: "inline-block", padding: "12px 28px", background: "#C9A227", color: "#fff", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>Register Now</Link>
      )}
    </div>
  );
}

export default function EventsPage() {
  return (
    <>
      <PageHeader
        tag="Latest Updates"
        title="Events"
        subtitle="Stay connected with Stellar Structures Limited through our property launches, exhibitions, community gatherings, and corporate events."
        breadcrumbs={[{ label: "Events" }]}
      />
      <StatBar stats={[{ value: "3", label: "Upcoming" }, { value: "4", label: "Past Events" }, { value: "500+", label: "Attendees" }, { value: "12", label: "Annual Events" }]} />

      <section className="section-box" style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Mark Your Calendar</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Upcoming Events</h2>
          </div>
          {upcomingEvents.map((event, i) => (
            <EventCard key={i} event={event} featured={event.featured} />
          ))}
        </div>
      </section>

      <section className="section-box" style={{ padding: "80px 0", background: "#F8F8F5" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Recap</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Past Events</h2>
          </div>
          <div className="row">
            {pastEvents.map((event, i) => (
              <div className="col-lg-6 col-md-6" key={i} style={{ marginBottom: "20px" }}>
                <EventCard event={event} featured={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Never Miss an Event"
        subtitle="Subscribe to our newsletter or follow us on social media to receive updates about upcoming events, launches, and exclusive invitations."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "Follow Us", href: "#" }}
      />
    </>
  );
}
