import ServicesPageClient from "./ServicesPageClient";

const API = process.env.NEXT_PUBLIC_API_BASE;

const STATIC_SLUGS = [
  "architectural-design",
  "construction-management",
  "interior-design",
  "investment-consultancy",
  "ongoing-projects",
  "property-development",
  "upcoming-projects",
];

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API}/public/getsAllServices`);
    const result = await res.json();
    const slugs = (result.data || [])
      .filter((post) => post.slug)
      .map((post) => ({ slug: post.slug }));
    return slugs.length > 0 ? slugs : STATIC_SLUGS.map((slug) => ({ slug }));
  } catch {
    return STATIC_SLUGS.map((slug) => ({ slug }));
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  return <ServicesPageClient slug={slug} />;
}
