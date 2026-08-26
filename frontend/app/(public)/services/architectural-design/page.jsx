import ArchitecturalDesignContent from "./ArchitecturalDesignContent";

const baseUrl = "https://stellarstructures.com";

async function getArchitecturalData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=architectural-design`, {
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
  const post = await getArchitecturalData();

  const title = post?.name
    ? `${post.name} - Stellar Structures Limited`
    : "Architectural Design - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Discover innovative architectural design solutions by Stellar Structures Limited in Dhaka, Bangladesh. Modern, functional, and stunning designs for residential and commercial spaces.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "architectural design Dhaka",
        "architect firm Bangladesh",
        "modern architecture Dhaka",
        "building design Bangladesh",
        "Stellar Structures architecture",
        "commercial architecture Dhaka",
        "residential design Bangladesh",
        "architectural consultants Dhaka",
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
      url: `${baseUrl}/services/architectural-design`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-architectural-design.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-architectural-design.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/services/architectural-design`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ArchitecturalDesignPage() {
  return <ArchitecturalDesignContent />;
}
