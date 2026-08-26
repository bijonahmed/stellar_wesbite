import InteriorDesignContent from "./InteriorDesignContent";

const baseUrl = "https://stellarstructures.com";

async function getInteriorData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=interior-design`, {
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
  const post = await getInteriorData();

  const title = post?.name
    ? `${post.name} - Stellar Structures Limited`
    : "Interior Design - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Discover exquisite interior design solutions by Stellar Structures Limited in Dhaka, Bangladesh. Transform your spaces with elegant, functional, and modern interior designs.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "interior design Dhaka",
        "interior designer Bangladesh",
        "luxury interior design Dhaka",
        "home interior Bangladesh",
        "Stellar Structures interior",
        "office interior design Dhaka",
        "modern interior Bangladesh",
        "residential interior Dhaka",
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
      url: `${baseUrl}/services/interior-design`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-interior-design.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-interior-design.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/services/interior-design`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function InteriorDesignPage() {
  return <InteriorDesignContent />;
}
