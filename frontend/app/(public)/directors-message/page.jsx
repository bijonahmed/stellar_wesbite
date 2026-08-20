import PageHeader from "../../components/frontend/PageElements/PageHeader";
import LeadershipMessage from "../../components/frontend/PageElements/LeadershipMessage";
import leadershipData from "../../data/leadershipMessages.json";

export const metadata = {
  title: leadershipData.managingDirector.seo.title,
  description: leadershipData.managingDirector.seo.description,
  keywords: leadershipData.managingDirector.seo.keywords,
  openGraph: leadershipData.managingDirector.seo.openGraph,
};

export default function DirectorsMessagePage() {
  const data = leadershipData.managingDirector;

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
