import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Modern Flats | Stellar Structures Limited",
  description:
    "Discover affordable modern flats in Bashundhara and Jolshiri, Dhaka by Stellar Structures Limited. Smart layouts from 800-1800 sqft with essential amenities, secure gated communities, and convenient locations.",
  keywords: [
    "flats Dhaka",
    "affordable flats Bashundhara",
    "modern flats Dhaka",
    "1BHK flats Dhaka",
    "2BHK flats Bashundhara",
    "3BHK flats Jolshiri",
    "Stellar Structures flats",
    "budget flats Dhaka",
  ],
  openGraph: {
    title: "Modern Flats | Stellar Structures Limited",
    description: "Smart, affordable flats in Dhaka's growing neighbourhoods. Quality construction with modern amenities.",
    type: "website",
  },
};

const features = [
  {
    icon: "📐",
    title: "Smart Layouts",
    description: "Every flat at Stellar Structures is designed with intelligent floor plans ranging from 800 to 1,800 square feet, engineered to make the most of every inch of living space. Our architects focus on open-plan living areas that feel spacious and airy, well-sized bedrooms with built-in wardrobe provisions, compact yet functional kitchens with dedicated utility areas, and bathrooms finished with quality fixtures — ensuring that even the most efficiently planned flat delivers a comfortable, clutter-free living experience for residents in Dhaka."
  },
  {
    icon: "🏢",
    title: "Compact Living",
    description: "Our 1BHK, 2BHK, and 3BHK flats are thoughtfully designed for young professionals, newly married couples, and small families who want quality construction without the premium price tag of larger apartments. Each unit is planned to provide the essentials of modern urban living — comfortable bedrooms, a welcoming living area, a practical kitchen, and well-ventilated bathrooms — all within a compact footprint that is easy to maintain, affordable to furnish, and perfectly suited to the lifestyle of Dhaka's growing workforce."
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Stellar Structures believes that owning a home in Dhaka should be accessible to every hardworking individual and family. Our flat projects are priced competitively to offer exceptional value for money, with transparent pricing that includes no hidden charges. We offer flexible payment schedules spread across construction milestones, partnerships with leading banks for home loan assistance at favorable interest rates, and special early-bird discounts for registrants who commit during the pre-launch phase — making the journey from aspiration to homeownership as smooth as possible."
  },
  {
    icon: "🔒",
    title: "Gated Community",
    description: "Every Stellar Structures flat complex is designed as a secure, self-contained gated community that provides residents with peace of mind around the clock. The compound features high-definition CCTV monitoring at all entry and exit points, a video intercom system connecting every flat to the main security gate, biometric access control for residents, trained security personnel stationed on-site during all hours, and clearly defined boundaries with controlled vehicle access — ensuring that your family and your home are always protected."
  },
  {
    icon: "⚡",
    title: "Essential Utilities",
    description: "We understand that reliable utilities are the foundation of comfortable daily living, which is why every Stellar Structures flat comes equipped with essential infrastructure from day one. Each building features a full-building backup generator that activates within seconds of a power outage, ensuring uninterrupted electricity for lighting, fans, refrigeration, and appliances. The complexes also include deep tubewell water supply with overhead tank storage, high-speed internet and cable TV readiness in every unit, and proper drainage and sewage systems that meet municipal standards."
  },
  {
    icon: "🛒",
    title: "Convenient Location",
    description: "Location is everything when choosing a flat in Dhaka, and Stellar Structures selects project sites that place residents within easy reach of the places that matter most. Both of our flat developments are situated within walking distance or a short drive from local markets and grocery stores, reputed schools and educational institutions, hospitals and clinics, public transportation hubs including bus stops and rickshaw stands, and major arterial roads that connect to the rest of the city — ensuring that daily errands, school runs, and commutes are as convenient as possible."
  },
];

const projects = [
  {
    name: "Bashundhara Block C",
    subtitle: "Smart Urban Living",
    status: "Ongoing",
    description: "Modern flats in a well-connected area of Bashundhara with easy access to the airport road, shopping malls, and international schools.",
    size: "800 - 1,500 sqft",
    type: "1-3 BHK",
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-ikhlasalfahim-35250765.jpg",
    location: "Bashundhara, Dhaka",
    units: "100+",
    paragraphs: [
      "The Bashundhara Block C flat project by Stellar Structures Limited offers an exceptional opportunity to own a well-designed, affordable flat in one of Dhaka's most accessible and well-connected neighborhoods. Located within the established Bashundhara Residential Area, this ongoing development is strategically positioned with direct access to Airport Road, proximity to leading shopping malls including Jamuna Future Park and Bashundhara City, and within easy reach of international schools, reputed hospitals, and major commercial centers — making it an ideal address for young professionals and families who value convenience.",
      "The project features a practical selection of 1BHK, 2BHK, and 3BHK flats with floor plans ranging from 800 to 1,500 square feet, each designed by experienced architects who specialize in maximizing livable space within efficient, well-planned layouts. Every flat includes a bright and welcoming living area that serves as the center of family life, bedrooms with adequate natural light and ventilation provisions for built-in wardrobes, a compact yet fully functional kitchen with granite countertops and space for essential appliances, and bathrooms finished with quality sanitaryware and fittings that are built to last.",
      "Residents of the Bashundhara Block C flats will benefit from a range of essential amenities designed to support comfortable daily living, including a secure gated compound with 24/7 CCTV surveillance and on-site security personnel, a full-building backup generator ensuring uninterrupted power supply, reliable deep tubewell water storage systems, covered parking facilities for residents and designated visitor bays, a landscaped central courtyard with seating areas for community interaction, and a children's play area with safe, age-appropriate equipment. The building also features modern elevator systems, fire safety equipment, and proper waste management infrastructure.",
      "With construction progressing on schedule, the Bashundhara Block C flat project is attracting strong interest from first-time homebuyers, young professionals relocating to Dhaka, and small families seeking quality housing at a price point that does not compromise on comfort or safety. The combination of a prime location, smart design, reliable construction quality, and flexible payment options makes this project one of the most compelling value propositions in Dhaka's affordable housing segment. Whether you are looking for your first home or a smart investment in a high-demand rental corridor, Bashundhara Block C delivers the quality and convenience you deserve."
    ]
  },
  {
    name: "Jolshiri Extension",
    subtitle: "Affordable Comfort",
    status: "Upcoming",
    description: "Affordable housing solution in the rapidly developing Jolshiri area, offering modern amenities and a peaceful residential environment.",
    size: "900 - 1,800 sqft",
    type: "2-3 BHK",
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-tanhatamannasyed-36042346.jpg",
    location: "Jolshiri, Dhaka",
    units: "120+",
    paragraphs: [
      "The Jolshiri Extension flat project by Stellar Structures Limited is an exciting upcoming development that brings affordable, well-designed housing to one of Dhaka's fastest-growing and most promising residential corridors. Jolshiri has emerged as a preferred destination for homebuyers who want to invest early in a neighborhood that is rapidly developing with new infrastructure, improved road connectivity, expanding commercial facilities, and a growing community of families — all of which contribute to strong property appreciation potential and a high quality of life.",
      "This upcoming project will offer a thoughtful range of 2BHK and 3BHK flats with floor plans spanning from 900 to 1,800 square feet, each designed to deliver maximum comfort within an efficiently planned living space. The architectural design prioritizes natural ventilation and daylight in every room, with open-concept living and dining areas, well-proportioned bedrooms with cross-ventilation windows, functional kitchens with granite countertops and provisions for essential appliances, and bathrooms finished with quality fixtures and proper ventilation systems — ensuring that every flat feels bright, airy, and welcoming.",
      "The Jolshiri Extension development will include a comprehensive set of amenities that support modern family living, such as a secure gated compound with controlled vehicle entry and CCTV monitoring throughout, a full-building backup generator for uninterrupted electricity, reliable water supply with overhead storage tanks, covered parking spaces for all residents, a central garden area with walking paths and seating, a dedicated children's play zone, and community spaces designed for resident gatherings and events. The project will also feature modern elevator systems, fire safety infrastructure, and high-speed internet readiness in every unit.",
      "With an anticipated launch that will offer competitive pre-launch pricing and flexible payment plans, the Jolshiri Extension flat project represents a smart opportunity for first-time homebuyers, young families, and investors who recognize the growth potential of Dhaka's emerging residential neighborhoods. Early registrants will receive priority unit selection, access to detailed floor plans, and exclusive pre-launch pricing advantages that reward their early commitment. This is more than an affordable flat — it is a well-located, quality-built home in a neighborhood poised for significant growth, offering the perfect balance of value, comfort, and future appreciation."
    ]
  }
];

export default function FlatsPage() {
  return (
    <>
      <PageHeader
        tag="Properties"
        title="Modern Flats"
        subtitle="Smart, affordable flats designed for modern urban living in Dhaka's most accessible neighbourhoods."
        breadcrumbs={[{ label: "Properties", href: "/properties" }, { label: "Flats" }]}
      />

      <FeatureGrid
        title="Why Choose Our Flats"
        subtitle="Practical living spaces that combine affordability with quality construction, smart design, and modern conveniences."
        features={features}
        columns={3}
      />

    

      <CTASection
        title="Own a Flat in Dhaka"
        subtitle="Get in touch with our team to learn about pricing, payment plans, and available units at our ongoing and upcoming flat projects."
       
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
