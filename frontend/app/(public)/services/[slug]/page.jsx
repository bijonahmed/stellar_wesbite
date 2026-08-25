import ServicesPageClient from "./ServicesPageClient";

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const baseUrl = "https://api.stellarstructuresbd.com/api";
    const res = await fetch(`${baseUrl}/public/getsAllServices`);
    const result = await res.json();
    return (result.data || []).map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  return <ServicesPageClient slug={slug} />;
}
