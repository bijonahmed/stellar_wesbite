import HomePage from "../components/frontend/HomePage";

export const metadata = {
  title: "Stellar Structures Limited | Premium Real Estate Developer in Dhaka, Bangladesh",
  description:
    "Stellar Structures Limited is a trusted real estate developer in Dhaka, Bangladesh. Explore premium residential apartments, luxury flats, commercial spaces, and mixed-use developments in Bashundhara R/A and Jolshiri R/A with modern amenities and smart home technology.",
  keywords: [
    "real estate developer Dhaka",
    "apartments Bashundhara R/A",
    "luxury flats Dhaka",
    "residential projects Bangladesh",
    "commercial real estate Dhaka",
    "Stellar Structures Limited",
    "premium apartments Dhaka",
    "Jolshiri R/A apartments",
    "property development Bangladesh",
    "smart home apartments Dhaka",
    "3BHK apartments Dhaka",
    "4BHK luxury flats Dhaka",
  ],
  openGraph: {
    title: "Stellar Structures Limited | Premium Real Estate Developer in Dhaka",
    description:
      "Trusted real estate developer in Dhaka delivering premium residential and commercial developments in Bashundhara R/A and Jolshiri R/A.",
    type: "website",
    siteName: "Stellar Structures Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellar Structures Limited | Premium Real Estate in Dhaka",
    description:
      "Explore premium apartments, luxury flats, and commercial spaces in Dhaka's most prestigious addresses.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
