import ChairmanMessageContent from "./ChairmanMessageContent";

const baseUrl = "https://stellarstructures.com";

async function getChairmanData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=chairman-message`, {
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
  const post = await getChairmanData();

  const title = post?.name
    ? `${post.name} - Chairman's Profile - Stellar Structures Limited`
    : "Chairman's Profile - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Read the inspiring message from Muhammad Fakhrul Haider, Chairman of Stellar Structures Limited — a visionary leader guiding the company with integrity, innovation, and excellence in Bangladesh's real estate sector.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "Muhammad Fakhrul Haider",
        "chairman Stellar Structures",
        "chairman message Stellar Structures",
        "real estate leadership Bangladesh",
        "Stellar Structures chairman vision",
        "property developer chairman Dhaka",
        "real estate company Bangladesh",
        "premium housing Dhaka",
        "commercial real estate Bangladesh",
        "best real estate developer Dhaka",
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
      url: `${baseUrl}/chairman-message`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-chairman-message.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-chairman-message.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/chairman-message`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ChairmanMessagePage() {
  return <ChairmanMessageContent />;
}
