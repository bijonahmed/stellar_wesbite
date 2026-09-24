import ServicesPageClient from "./ServicesPageClient";

const API = process.env.NEXT_PUBLIC_API_BASE;

const STATIC_PAGES = {
  "architectural-design": () => import("../architectural-design/page"),
  "construction-management": () => import("../construction-management/page"),
  "interior-design": () => import("../interior-design/page"),
  "investment-consultancy": () => import("../investment-consultancy/page"),
  "ongoing-projects": () => import("../ongoing-projects/page"),
  "property-development": () => import("../property-development/page"),
  "upcoming-projects": () => import("../upcoming-projects/page"),
};

const STATIC_SLUGS = Object.keys(STATIC_PAGES);

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API}/public/getsAllServices`);
    const result = await res.json();
    const apiSlugs = (result.data || [])
      .map((post) => post.slug)
      .filter((slug) => slug && !STATIC_SLUGS.includes(slug));
    return [...new Set([...STATIC_SLUGS, ...apiSlugs])].map((slug) => ({ slug }));
  } catch {
    return STATIC_SLUGS.map((slug) => ({ slug }));
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loader = STATIC_PAGES[slug];
  if (loader) {
    try {
      const pageModule = await loader();
      if (typeof pageModule.generateMetadata === "function") {
        return pageModule.generateMetadata();
      }
    } catch {
      // fall through to default metadata
    }
  }
  return {
    title: "Service Details | Stellar Structures Limited",
    description:
      "Explore services by Stellar Structures Limited in Dhaka, Bangladesh.",
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const loader = STATIC_PAGES[slug];
  if (loader) {
    const pageModule = await loader();
    const Page = pageModule.default;
    return <Page />;
  }
  return <ServicesPageClient slug={slug} />;
}
