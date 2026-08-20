import BlogPageClient from "./BlogPageClient";

const API = process.env.NEXT_PUBLIC_API_BASE;

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API}/public/getsBlogPost`);
    const result = await res.json();
    const slugs = (result.data || []).map((post) => ({ slug: post.slug }));
    const filtered = slugs.filter((s) => s.slug && s.slug !== "__none__");
    return filtered.length > 0 ? filtered : [{ slug: "__none__" }];
  } catch {
    return [{ slug: "__none__" }];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = slug
    ? `${slug.replace(/-/g, " ")} | Stellar Structures Limited`
    : "Blog Article | Stellar Structures Limited";
  const description = slug
    ? `Read about ${slug.replace(/-/g, " ")} on the Stellar Structures Limited blog. Expert insights on real estate, property investment, and construction in Dhaka, Bangladesh.`
    : "Read the latest insights and updates from Stellar Structures Limited on real estate trends and property investment in Dhaka.";

  return {
    title,
    description,
    keywords: [
      "Stellar Structures blog",
      "real estate article Dhaka",
      "property investment insights",
      "construction updates Bangladesh",
    ],
    openGraph: {
      title,
      description,
      type: "article",
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  return <BlogPageClient slug={slug} />;
}
