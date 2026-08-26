import ServiceClient from "./ServiceClient";

export async function generateMetadata() {
  const title = "Services | Stellar Structures Limited";
  const description =
    "Explore comprehensive real estate services by Stellar Structures Limited in Dhaka — property development, construction management, interior design, architectural design, investment consultancy, and property valuation.";
  return {
    metadataBase: new URL("https://stellarstructures.com"),
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

export default function Page() {
  return <ServiceClient />;
}
