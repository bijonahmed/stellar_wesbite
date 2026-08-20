import Link from "next/link";
import ClientPostList from "./ClientPostList";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata = {
  title: "Notice Board | Stellar Structures Limited",
  description: "View important notices and announcements from Stellar Structures Limited regarding projects, payments, and company updates.",
  keywords: [
    "Stellar Structures notices",
    "real estate announcements Bangladesh",
    "company updates Dhaka",
  ],
  openGraph: {
    title: "Notice Board | Stellar Structures Limited",
    description: "View important notices and announcements from Stellar Structures Limited.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div>
       
          <div className="container">
            <div className="page-title-content text-start">
              <h2>Notice</h2>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Notice</li>
              </ul>
            </div>
          </div>
     

      {/* 👇 PASS CATEGORY_ID = 1 */}
      <ClientPostList />
    </div>
  );
}
