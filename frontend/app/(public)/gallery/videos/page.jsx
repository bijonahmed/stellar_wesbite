import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Video Gallery - Stellar Structures Limited",
  description: "Watch videos from Stellar Structures Limited. Virtual tours, construction updates, project walkthroughs, and corporate presentations from our developments in Dhaka.",
  keywords: ["Stellar Structures videos", "virtual tour Dhaka", "construction video update", "property walkthrough"],
  openGraph: { title: "Video Gallery - Stellar Structures Limited", description: "Watch videos from Stellar Structures Limited.", type: "website" },
};

const videoCategories = [
  { icon: "🎬", title: "Project Walkthroughs", description: "Immersive virtual tours of our completed and ongoing projects, guiding you through every floor, amenity, and architectural detail of our developments." },
  { icon: "🏗️", title: "Construction Updates", description: "Regular video updates from our construction sites showcasing progress, quality checks, material selection, and engineering milestones." },
  { icon: "🏠", title: "Interior Tours", description: "Detailed video walkthroughs of model apartments, showing interior design options, finishes, fixtures, and smart home features available in our residences." },
  { icon: "🌆", title: "Aerial Drone Footage", description: "Breathtaking aerial videos capturing the full scale of our projects, their surroundings, connectivity to key landmarks, and Dhaka's urban landscape." },
  { icon: "🎤", title: "Corporate Presentations", description: "Official company presentations, leadership interviews, project announcements, and corporate milestone celebrations from Stellar Structures Limited." },
  { icon: "📢", title: "Client Testimonials", description: "Hear from our valued homeowners and partners sharing their experiences, satisfaction, and journey with Stellar Structures from purchase to handover." },
];

const featuredVideos = [
  { title: "Bashundhara R/A Virtual Tour", category: "Project Walkthroughs", duration: "4:32", image: "/frontend_theme/assets/imgs/page/homepage1/img-2.png", views: "12.5K" },
  { title: "Construction Update - Q2 2026", category: "Construction Updates", duration: "6:15", image: "/frontend_theme/assets/imgs/page/homepage1/img-2.png", views: "8.2K" },
  { title: "Model Apartment - 3BHK Tour", category: "Interior Tours", duration: "5:48", image: "/frontend_theme/assets/imgs/page/homepage1/img-2.png", views: "15.3K" },
  { title: "Aerial View - Stellar Heights", category: "Aerial Drone Footage", duration: "3:20", image: "/frontend_theme/assets/imgs/page/homepage1/img-2.png", views: "22.1K" },
  { title: "Meet Our Founder", category: "Corporate Presentations", duration: "8:45", image: "/frontend_theme/assets/imgs/page/homepage1/img-2.png", views: "6.7K" },
  { title: "Homeowner Stories - Bashundhara", category: "Client Testimonials", duration: "7:10", image: "/frontend_theme/assets/imgs/page/homepage1/img-2.png", views: "9.4K" },
];

export default function VideoGalleryPage() {
  return (
    <>
      <PageHeader
        tag="Gallery"
        title="Video Gallery"
        subtitle="Explore Stellar Structures through video — virtual tours, construction progress, architectural showcases, and stories from our community."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }, { label: "Videos" }]}
      />
      <section className="section-box" style={{ padding: "80px 0", background: "#F8F8F5" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Browse By Category</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Video Categories</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>Discover our video content organized by category for an immersive experience.</p>
          </div>
          <FeatureGrid features={videoCategories} columns={3} />
        </div>
      </section>

      <section className="section-box" style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Most Watched</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Featured Videos</h2>
          </div>
          <div className="row">
            {featuredVideos.map((video, i) => (
              <div className="col-lg-4 col-md-6" key={i} style={{ marginBottom: "24px" }}>
                <div style={{ border: "1px solid #EFEFED", overflow: "hidden", transition: "all 0.3s" }}>
                  <div style={{ height: "220px", overflow: "hidden", position: "relative", cursor: "pointer" }}>
                    <img src={video.image} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "56px", height: "56px", background: "rgba(201,162,39,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "#fff", fontSize: "18px", marginLeft: "3px" }}>▶</span>
                    </div>
                    <span style={{ position: "absolute", bottom: "12px", right: "12px", padding: "4px 10px", background: "rgba(6,20,36,0.85)", color: "#fff", fontSize: "11px", fontWeight: 600 }}>{video.duration}</span>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <p style={{ fontSize: "11px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{video.category}</p>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 1.5vw, 1.15rem)", fontWeight: 600, color: "#061424", marginBottom: "8px" }}>{video.title}</h4>
                    <p style={{ fontSize: "12px", color: "#8A8A85" }}>{video.views} views</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience Stellar Structures"
        titleAlign="center"
        subtitle="Schedule a physical visit to our projects and see the quality that video can only begin to capture. Our team awaits to welcome you."
        primaryBtn={{ label: "Schedule Visit", href: "/site-visit" }}
        secondaryBtn={{ label: "View Photos", href: "/gallery/photos" }}
      />
    </>
  );
}
