import PageHeader from "../../components/frontend/PageElements/PageHeader";
import LeadershipMessage from "../../components/frontend/PageElements/LeadershipMessage";
import leadershipData from "../../data/leadershipMessages.json";

export const metadata = {
  title: leadershipData.chairman.seo.title,
  description: leadershipData.chairman.seo.description,
  keywords: leadershipData.chairman.seo.keywords,
  openGraph: leadershipData.chairman.seo.openGraph,
};

export default function ChairmanMessagePage() {
  const data = leadershipData.chairman;

  return (
    <>
      <PageHeader
        tag={data.tag}
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={data.breadcrumbs}
      />
      <LeadershipMessage data={data} />
    </>
  );
}
