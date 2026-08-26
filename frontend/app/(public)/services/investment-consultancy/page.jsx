import InvestmentConsultancyContent from "./InvestmentConsultancyContent";

const baseUrl = "https://stellarstructures.com";

async function getInvestmentData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || "https://api.stellarstructuresbd.com/api"}/public/getsPost?slug=investment-consultancy`, {
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
  const post = await getInvestmentData();

  const title = post?.name
    ? `${post.name} - Stellar Structures Limited`
    : "Investment Consultancy - Stellar Structures Limited";

  const description = post?.meta_description
    ? post.meta_description.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim().substring(0, 160)
    : "Expert investment consultancy services by Stellar Structures Limited in Dhaka, Bangladesh. Maximize your real estate returns with professional guidance and market insights.";

  const keywords = post?.meta_keyword
    ? post.meta_keyword.split(",").map((k) => k.trim()).filter(Boolean)
    : [
        "investment consultancy Dhaka",
        "real estate investment Bangladesh",
        "property investment Dhaka",
        "Stellar Structures investment",
        "real estate advisory Bangladesh",
        "property consultant Dhaka",
        "investment advisor Bangladesh",
        "real estate ROI Dhaka",
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
      url: `${baseUrl}/services/investment-consultancy`,
      siteName: "Stellar Structures Limited",
      images: [
        {
          url: "/frontend_theme/assets/imgs/template/og-investment-consultancy.jpg",
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
      images: ["/frontend_theme/assets/imgs/template/og-investment-consultancy.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/services/investment-consultancy`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function InvestmentConsultancyPage() {
  return <InvestmentConsultancyContent />;
}
