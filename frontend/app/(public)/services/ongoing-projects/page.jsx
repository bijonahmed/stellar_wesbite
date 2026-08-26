import OngoingProjectsContent from "./OngoingProjectsContent";

const baseUrl = "https://stellarstructures.com";

async function getOngoingData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=ongoing-projects`, {
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
  const post = await getOngoingData();

  const title = post?.name
    ? `${post.name} - Stellar Structures Limited`
    : "Ongoing Projects - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Explore ongoing real estate and construction projects by Stellar Structures Limited in Dhaka, Bangladesh. Premium residential and commercial developments with modern design and timely delivery.";

  const keywords = post?.meta_keywords
    ? post.meta_keywords.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "ongoing projects Dhaka",
        "real estate projects Bangladesh",
        "ongoing construction Dhaka",
        "premium apartments Dhaka",
        "Stellar Structures ongoing",
        "residential projects Bangladesh",
        "commercial projects Dhaka",
        "under construction Dhaka",
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
      url: `${baseUrl}/services/ongoing-projects`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-ongoing-projects.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-ongoing-projects.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/services/ongoing-projects`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function OngoingProjectsPage() {
  return <OngoingProjectsContent />;
}
