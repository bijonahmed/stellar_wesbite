import Link from "next/link";
import PageHeader from "../../components/frontend/PageElements/PageHeader";

export const metadata = {
  title: "Sitemap | Stellar Structures Limited",
  description:
    "Navigate the full site map of Stellar Structures Limited. Find all pages including projects, properties, services, media, support, and contact information in one place.",
  keywords: [
    "Stellar Structures sitemap",
    "site map Stellar Structures",
    "website navigation Stellar Structures",
    "Stellar Structures all pages",
    "real estate sitemap Dhaka",
    "Stellar Structures links",
  ],
  openGraph: {
    title: "Sitemap | Stellar Structures Limited",
    description: "Explore all pages and sections of the Stellar Structures Limited website.",
    type: "website",
  },
};

async function getNavbarMenu() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getNavbarMenu`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    if (data.success && data.data) return data.data;
  } catch {}
  return [];
}

function flattenMenuToSections(menu) {
  return menu
    .filter((item) => item.label && item.href)
    .map((item) => {
      if (item.children && item.children.length > 0) {
        return {
          title: item.label,
          links: item.children
            .filter((child) => child.label && child.href && child.href !== "#")
            .map((child) => ({
              label: child.label,
              href: child.href,
            })),
        };
      }
      return {
        title: item.label,
        links: [{ label: item.label, href: item.href }],
      };
    })
    .filter((section) => section.links.length > 0);
}

export default async function SitemapPage() {
  const menu = await getNavbarMenu();
  const sitemapSections = flattenMenuToSections(menu);

  return (
    <div>
      <PageHeader
        tag="Site Map"
        title="Explore Our Website"
        subtitle="Find all pages and sections of the Stellar Structures Limited website organized by category."
        breadcrumbs={[{ label: "Sitemap" }]}
      />

      <section style={{ padding: "clamp(48px, 6vw, 88px) 0", background: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "48px 40px",
            }}
          >
            {sitemapSections.map((section, i) => (
              <div key={i}>
                <h3
                  style={{
                    fontFamily: "'Chivo', sans-serif",
                    fontSize: "clamp(24px, 3vw, 30px)",
                    fontWeight: 700,
                    color: "#061424",
                    marginBottom: "20px",
                    paddingBottom: "14px",
                    borderBottom: "2px solid #C9A227",
                    display: "inline-block",
                  }}
                >
                  {section.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.links.map((link, j) => (
                    <li key={j} style={{ marginBottom: "12px" }}>
                      <Link
                        href={link.href}
                        className="ss-sitemap-link"
                        style={{
                          fontSize: "17px",
                          color: "#8A8A85",
                          textDecoration: "none",
                          transition: "color 0.2s",
                          lineHeight: 1.8,
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`.ss-sitemap-link:hover { color: #C9A227 !important; }`}</style>
    </div>
  );
}
