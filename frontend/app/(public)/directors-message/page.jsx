import DirectorsMessageContent from "./DirectorsMessageContent";

const baseUrl = "https://stellarstructures.com";

async function getDirectorsData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=directors-message`, {
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
  const post = await getDirectorsData();

  const title = post?.name
    ? `${post.name} - Directors' Profile - Stellar Structures Limited`
    : "Directors' Profile - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Read the inspiring messages from the directors of Stellar Structures Limited — visionary leaders driving innovation in structural engineering, architecture, and premium real estate development across Bangladesh.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "Stellar Structures directors",
        "directors message Stellar Structures",
        "real estate leadership Dhaka",
        "Stellar Structures directors vision",
        "property developer directors Bangladesh",
        "real estate company Bangladesh",
        "premium housing Dhaka",
        "commercial real estate Bangladesh",
        "best real estate developer Dhaka",
        "construction company Bangladesh",
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
      url: `${baseUrl}/directors-message`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-directors-message.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-directors-message.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/directors-message`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function DirectorsMessagePage() {
  return <DirectorsMessageContent />;
}
