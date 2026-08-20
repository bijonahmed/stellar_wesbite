import ServiceClient from "./ServiceClient";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const title = slug
    ? `${slug.replace(/-/g, " ")} | Stellar Structures Limited`
    : "Services | Stellar Structures Limited";
  const description =
    "Explore comprehensive real estate services by Stellar Structures Limited in Dhaka — property development, construction management, interior design, architectural design, investment consultancy, and property valuation.";
  return {
    title,
    description,
    keywords: [
      "real estate services Dhaka",
      "property development Bangladesh",
      "construction management Dhaka",
      "interior design Bangladesh",
      "architectural design Dhaka",
      "investment consultancy real estate",
      "property valuation Dhaka",
      "Stellar Structures services",
    ],
    openGraph: {
      title,
      description,
      siteName: "Stellar Structures Limited",
      type: "website",
    },
  };
}

export default function Page({ params }) {
  const { slug } = params;
  return <ServiceClient slug={slug} />;
}
