import PropertyDevelopmentContent from "./PropertyDevelopmentContent";

const baseUrl = "https://stellarstructures.com";

async function getPropertyData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=property-development`, {
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
  const post = await getPropertyData();

  const title = post?.name
    ? `${post.name} - Stellar Structures Limited`
    : "Property Development - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Explore premium property development projects by Stellar Structures Limited in Dhaka, Bangladesh. Quality residential and commercial developments with modern design and trusted craftsmanship.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "property development Dhaka",
        "real estate development Bangladesh",
        "premium properties Dhaka",
        "residential development Dhaka",
        "Stellar Structures property",
        "commercial development Bangladesh",
        "quality construction Dhaka",
        "property developer Dhaka",
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
      url: `${baseUrl}/services/property-development`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-property-development.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-property-development.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/services/property-development`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function PropertyDevelopmentPage() {
  return <PropertyDevelopmentContent />;
}
