import Link from "next/link";
import ClientPostList from "./ClientPostList";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata = {
  title: "Privacy Policy | Stellar Structures Limited",
  description: "Learn how Stellar Structures Limited protects your personal information and data privacy.",
  keywords: [
    "privacy policy Stellar Structures",
    "data protection Bangladesh",
    "real estate privacy policy Dhaka",
  ],
  openGraph: {
    title: "Privacy Policy | Stellar Structures Limited",
    description: "Learn how Stellar Structures Limited protects your personal information.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div>
      <div className="ps-breadcrumb">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Privacy Policy </li>
          </ul>
        </div>
      </div>

      {/* 👇 PASS CATEGORY_ID = 1 */}
      <ClientPostList categoryId={4} />
    </div>
  );
}
