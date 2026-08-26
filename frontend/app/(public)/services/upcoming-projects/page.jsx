import UpcomingProjectsContent from "./UpcomingProjectsContent";

const baseUrl = "https://stellarstructures.com";

async function getUpcomingData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=upcoming-projects`, {
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
  const post = await getUpcomingData();

  const title = post?.name
    ? `${post.name} - Stellar Structures Limited`
    : "Upcoming Projects - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Discover upcoming real estate and construction projects by Stellar Structures Limited in Dhaka, Bangladesh. Be the first to invest in premium residential and commercial developments.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "upcoming projects Dhaka",
        "new real estate projects Bangladesh",
        "pre-launch properties Dhaka",
        "upcoming apartments Dhaka",
        "Stellar Structures upcoming",
        "new construction projects Bangladesh",
        "upcoming commercial projects Dhaka",
        "future developments Dhaka",
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
      url: `${baseUrl}/services/upcoming-projects`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-upcoming-projects.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-upcoming-projects.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/services/upcoming-projects`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function UpcomingProjectsPage() {
  return <UpcomingProjectsContent />;
}
