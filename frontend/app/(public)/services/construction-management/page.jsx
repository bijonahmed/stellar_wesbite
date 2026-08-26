import ConstructionManagementContent from "./ConstructionManagementContent";

const baseUrl = "https://stellarstructures.com";

const projects = [
  { id: 1, title: "Project Alpha", subtitle: "Premium Residential Development", location: "Bashundhara R/A, Dhaka", status: "Ongoing", cover: "/frontend_theme/assets/imgs/projects/project_1/project_1.png" },
  { id: 2, title: "Project Beta", subtitle: "Modern Commercial Complex", location: "Jolshiri, Dhaka", status: "Ongoing", cover: "/frontend_theme/assets/imgs/projects/project_2/project_2.jfif" },
  { id: 3, title: "Project Gamma", subtitle: "Luxury Apartment Complex", location: "Bashundhara R/A, Dhaka", status: "Upcoming", cover: "/frontend_theme/assets/imgs/projects/project_3/project_3.png" },
  { id: 4, title: "Project Delta", subtitle: "Residential Tower", location: "Jolshiri, Dhaka", status: "Ongoing", cover: "/frontend_theme/assets/imgs/projects/project_4/project_4.png" },
  { id: 5, title: "Project Epsilon", subtitle: "Mixed-Use Development", location: "Bashundhara R/A, Dhaka", status: "Completed", cover: "/frontend_theme/assets/imgs/projects/project_5/project_5.png" },
  { id: 6, title: "Project Zeta", subtitle: "Modern Living Spaces", location: "Dhaka", status: "Ongoing", cover: "/frontend_theme/assets/imgs/projects/project_6/project_6.png" },
  { id: 7, title: "Project Eta", subtitle: "Contemporary Residences", location: "Bashundhara R/A, Dhaka", status: "Upcoming", cover: "/frontend_theme/assets/imgs/projects/project_7/project_7.png" },
  { id: 8, title: "Project Theta", subtitle: "Premium Office Complex", location: "Jolshiri, Dhaka", status: "Ongoing", cover: "/frontend_theme/assets/imgs/projects/project_8/project_8.jfif" },
  { id: 9, title: "Project Iota", subtitle: "Residential Community", location: "Dhaka", status: "Completed", cover: "/frontend_theme/assets/imgs/projects/project_9/project_9.png" },
  { id: 10, title: "Project Kappa", subtitle: "Luxury Penthouse Suites", location: "Bashundhara R/A, Dhaka", status: "Upcoming", cover: "/frontend_theme/assets/imgs/projects/project_10/project_10.png" },
];

async function getConstructionData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=construction-management`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    if (data.success && data.data.length > 0) {
      return data.data[0];
    }
    return null;
  } catch {
    return null;
  }
}

export async function generateMetadata() {
  const post = await getConstructionData();

  const title = post?.name
    ? `${post.name} - Stellar Structures Limited`
    : "Construction Management Projects - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Explore construction management projects by Stellar Structures Limited in Dhaka, Bangladesh. Premium residential, commercial, and luxury developments in Bashundhara R/A, Jolshiri with quality craftsmanship.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "construction management Dhaka",
        "Stellar Structures projects",
        "premium developments Bangladesh",
        "residential construction Dhaka",
        "commercial projects Bashundhara",
        "real estate projects Jolshiri",
        "luxury apartments Dhaka",
        "building construction Bangladesh",
      ];

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseUrl}/services/construction-management`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-construction-management.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/frontend_theme/assets/imgs/template/og-construction-management.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/services/construction-management`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ConstructionManagementPage() {
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Construction Management Projects by Stellar Structures Limited",
    description: "Premium residential, commercial, and luxury construction projects in Dhaka, Bangladesh.",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "RealEstateProject",
        name: p.title,
        description: `${p.subtitle} in ${p.location}`,
        url: `${baseUrl}/services/construction-management#${p.title.toLowerCase().replace(/\s+/g, "-")}`,
        image: `${baseUrl}${p.cover}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
      <ConstructionManagementContent />
    </>
  );
}
