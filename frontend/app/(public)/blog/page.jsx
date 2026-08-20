import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Stellar Structures Limited",
  description:
    "Read the latest news, insights, and updates from Stellar Structures Limited — your source for real estate trends, property investment tips, construction updates, and lifestyle content in Dhaka, Bangladesh.",
  keywords: [
    "real estate blog Dhaka",
    "property investment tips Bangladesh",
    "construction updates Dhaka",
    "Stellar Structures blog",
    "real estate news Bangladesh",
    "apartment buying guide Dhaka",
    "housing market trends Bangladesh",
  ],
  openGraph: {
    title: "Blog | Stellar Structures Limited",
    description:
      "Read the latest news, insights, and updates from Stellar Structures Limited — your source for real estate trends and property investment tips in Dhaka.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
