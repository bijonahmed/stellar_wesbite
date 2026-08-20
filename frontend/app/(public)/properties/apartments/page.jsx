import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Premium Apartments - Stellar Structures Limited",
  description: "Explore premium apartments in Bashundhara R/A and Jolshiri R/A, Dhaka. 1200-2800 sqft with modern amenities.",
  keywords: ["apartments Dhaka", "Bashundhara apartments", "Jolshiri apartments", "residential apartments Bangladesh"],
  openGraph: {
    title: "Premium Apartments - Stellar Structures",
    description: "Premium apartments in Dhaka's most prestigious neighbourhoods.",
    type: "website"
  }
};

const features = [
  {
    icon: "🏠",
    title: "Spacious Layouts",
    description: "Every apartment at Stellar Structures is designed with generous floor plans ranging from 1,200 to 2,800 square feet, thoughtfully planned to maximize natural light, cross-ventilation, and usable living space. Our architectural team crafts open-concept living and dining areas, well-proportioned bedrooms with ample closet space, efficient kitchen layouts with dedicated utility zones, and bathrooms finished with premium fixtures — ensuring that every square foot serves a purpose and every family member enjoys the comfort and privacy they deserve in their Dhaka home."
  },
  {
    icon: "✨",
    title: "Premium Finishes",
    description: "We believe that the quality of a home is defined by the details that surround you every day. That is why every Stellar Structures apartment features high-quality imported marble or vitrified tile flooring, contemporary modular kitchen systems with durable countertops, designer bathroom fixtures with rain showers and premium sanitaryware, custom wooden cabinetry with soft-close mechanisms, and carefully selected paint finishes and wall treatments that create an atmosphere of understated elegance throughout each residence."
  },
  {
    icon: "🔒",
    title: "24/7 Security",
    description: "The safety of your family and your home is our highest priority. Every Stellar Structures residential complex is protected by a comprehensive security ecosystem that operates around the clock, including high-definition CCTV surveillance covering all common areas and entry points, biometric fingerprint access control at building entrances and parking levels, video intercom systems connecting every apartment to the main gate, trained security personnel stationed at all access points, and fire detection and suppression systems that meet international safety standards."
  },
  {
    icon: "🅿️",
    title: "Dedicated Parking",
    description: "We understand that convenient and secure parking is an essential part of modern urban living in Dhaka. Every apartment in our developments comes with a dedicated covered parking space in a well-lit, multi-level parking facility with easy elevator access to your floor. The parking complex also includes designated visitor parking bays, EV charging provisions for electric vehicles, and clearly marked pedestrian walkways that ensure the safety of residents moving between their vehicles and the building entrance."
  },
  {
    icon: "⚡",
    title: "Backup Power",
    description: "Uninterrupted power supply is a necessity in Dhaka, and every Stellar Structures apartment building is equipped with a full-building diesel generator backup system that activates automatically within seconds of a mains power failure. This ensures that every apartment receives continuous electricity for lighting, air conditioning, refrigeration, and all essential appliances, while common area systems including elevators, water pumps, CCTV, and security lighting remain fully operational at all times, giving residents complete peace of mind."
  },
  {
    icon: "🌿",
    title: "Green Spaces",
    description: "In a city as dynamic as Dhaka, access to nature and outdoor recreation is a vital component of quality living. Every Stellar Structures residential complex is designed with thoughtfully landscaped gardens featuring native plantings and shaded seating areas, a rooftop terrace garden that provides panoramic views and a peaceful retreat from the bustle below, a dedicated children's play area with safe, modern equipment, and tree-lined walking paths that encourage an active outdoor lifestyle for residents of all ages."
  },
];

const projects = [
  {
    name: "Bashundhara R/A",
    subtitle: "Premium Residential Living",
    status: "Ongoing",
    description: "Premium residential apartments in the heart of Bashundhara with spacious 2-4 BHK configurations, modern amenities, and excellent connectivity to major roads and shopping centres.",
    size: "1,200 - 2,200 sqft",
    type: "2-4 BHK",
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-ikhlasalfahim-35250765.jpg",
    location: "Bashundhara, Dhaka",
    units: "150+",
    paragraphs: [
      "The Bashundhara R/A apartment project by Stellar Structures Limited offers a rare opportunity to own a premium residence in one of Dhaka's most established and well-connected neighborhoods. Bashundhara Residential Area has long been recognized as a preferred address for families who value tranquility, green surroundings, and convenient access to schools, hospitals, shopping centers, and major arterial roads. This ongoing development brings together thoughtful architectural planning, modern construction standards, and a deep understanding of how families in Dhaka live and grow.",
      "The project features a carefully curated selection of 2BHK, 3BHK, and 4BHK apartments, with floor plans ranging from 1,200 to 2,200 square feet designed to maximize usable living space, natural ventilation, and daylight penetration. Each unit has been planned by experienced architects who understand the needs of modern Bangladeshi families, ensuring generous bedroom dimensions, efficient kitchen layouts with provisions for modern appliances, well-ventilated bathrooms with high-quality sanitary fittings, and spacious living and dining areas that serve as the heart of family life.",
      "Residents of the Bashundhara R/A apartments will enjoy access to a comprehensive suite of lifestyle amenities including a temperature-controlled swimming pool, a fully equipped gymnasium with dedicated cardio and strength training zones, a landscaped children's play area, a multipurpose community hall for family celebrations and resident events, beautifully maintained green spaces with walking paths, and a rooftop terrace designed for relaxation and social gatherings. The development also includes practical features that families value daily, such as covered multi-level parking with assigned spots, 24/7 CCTV surveillance with biometric access control, reliable backup power generation, and high-speed elevator systems serving every floor.",
      "With construction progressing steadily, the Bashundhara R/A apartment project continues to attract strong interest from homebuyers seeking quality residential living in a location that offers the perfect balance between peaceful neighborhood living and urban convenience. Whether you are a young professional seeking your first apartment, a growing family needing additional space, or an investor looking for a property with strong appreciation potential in Dhaka's premium residential corridor, the Bashundhara R/A project delivers exceptional value and a living experience designed to exceed expectations."
    ]
  },
  {
    name: "Jolshiri R/A",
    subtitle: "Luxury Redefined",
    status: "Upcoming",
    description: "Luxury residential apartments in the prestigious Jolshiri area offering panoramic views, lush green surroundings, and world-class amenities for discerning families.",
    size: "1,500 - 2,800 sqft",
    type: "3-4 BHK",
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-tanhatamannasyed-36042346.jpg",
    location: "Jolshiri, Dhaka",
    units: "200+",
    paragraphs: [
      "The Jolshiri R/A apartment project by Stellar Structures Limited is poised to become the most prestigious luxury residential address in Dhaka. Nestled within the celebrated Jolshiri Residential Area, an enclave known for its meticulously planned infrastructure, abundant greenery, and serene atmosphere, this upcoming development promises an unparalleled living experience that combines architectural brilliance with the tranquility of a well-designed neighborhood surrounded by nature.",
      "This expansive luxury development will feature a curated collection of 3BHK and 4BHK premium apartments, with floor plans spanning from 1,500 to 2,800 square feet and designed to offer sweeping panoramic views of the surrounding landscape and Dhaka's skyline. Every apartment has been meticulously planned to ensure that each square foot serves a purpose, with open-concept living and dining areas that flow seamlessly into private balconies, master suites with walk-in closets and en-suite bathrooms finished in imported Italian marble, secondary bedrooms with ample storage, and imported kitchen systems equipped with provisions for premium appliances.",
      "The project will boast an exceptional array of amenities befitting a luxury residential development of this caliber, including an infinity-edge rooftop pool offering breathtaking panoramic views, a state-of-the-art gymnasium with personal training studios and a dedicated yoga pavilion, a private spa and wellness center offering holistic treatments, landscaped sky gardens on multiple floors providing residents with peaceful outdoor retreats, a grand clubhouse designed for exclusive member events and social gatherings, and a children's adventure zone created by specialist play environment architects. Smart home technology will be seamlessly integrated into every apartment, giving residents complete control over lighting scenes, climate settings, motorized window treatments, multi-room audio, and security systems through a single intuitive smartphone application.",
      "With construction slated to begin in the near future, the Jolshiri R/A apartment project represents a rare and compelling opportunity to secure a luxury property at pre-launch prices in what is certain to become one of Dhaka's most sought-after residential addresses. Early registrants will benefit from preferential pricing, priority unit and floor selection, exclusive access to detailed floor plans and interior design customization options, and personalized consultations with our design team. This is more than a luxury apartment — it is a legacy investment in Dhaka's most exciting residential future, offering the perfect blend of luxury, technology, comfort, and timeless design for discerning homeowners who accept nothing less than the best."
    ]
  }
];

export default function ApartmentsPage() {
  return (
    <>
      <PageHeader
        tag="Properties"
        title="Premium Apartments"
        subtitle="Discover thoughtfully designed apartments in Dhaka's most prestigious neighbourhoods, crafted by Stellar Structures Limited."
        breadcrumbs={[{ label: "Properties", href: "/properties" }, { label: "Apartments" }]}
      />

      <FeatureGrid
        title="Apartment Features"
        subtitle="Every apartment is crafted to provide the highest standards of comfort and modern living."
        features={features}
        columns={3}
      />

     
      <CTASection
        title="Find Your Perfect Apartment"
        subtitle="Contact our sales team to schedule a site visit and explore available units at our ongoing projects."
        primaryBtn={{ label: "Schedule a Visit", href: "/site-visit" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}