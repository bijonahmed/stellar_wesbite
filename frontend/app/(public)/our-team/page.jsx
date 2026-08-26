import OurTeamContent from "./OurTeamContent";

const baseUrl = "https://stellarstructures.com";

async function getTeamData() {
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
  const post = await getTeamData();

  const title = "Our Team - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Meet the visionary leadership team behind Stellar Structures Limited — dedicated to excellence in structural engineering, architecture, and premium real estate development across Bangladesh.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "Stellar Structures team",
        "our team Stellar Structures",
        "real estate leadership Bangladesh",
        "Stellar Structures directors",
        "property developer team Dhaka",
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
      url: `${baseUrl}/our-team`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-our-team.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-our-team.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/our-team`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function OurTeamPage() {
  return <OurTeamContent />;
}
