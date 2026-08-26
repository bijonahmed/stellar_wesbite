import AboutContent from "./AboutContent";

const baseUrl = "https://stellarstructures.com";

async function getAboutData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=company-profile`, {
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
  const post = await getAboutData();

  const title = post?.meta_title
    ? `${post.meta_title} - Stellar Structures Limited`
    : "About Us - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Learn about Stellar Structures Limited — Bangladesh's trusted real estate company delivering quality construction, innovative design, and transparent services since inception.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "Stellar Structures Limited",
        "about Stellar Structures",
        "real estate company Bangladesh",
        "construction company Dhaka",
        "property developer Bangladesh",
        "about us Dhaka",
        "Stellar Structures about",
        "real estate Bangladesh about",
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
      url: `${baseUrl}/about`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-about.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-about.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/about`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AboutPage() {
  return <AboutContent />;
}
