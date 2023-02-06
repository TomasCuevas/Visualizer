import { NextPage, GetStaticProps, GetStaticPaths } from "next";

//* layout *//
import { PrincipalLayout } from "../../components/layouts";

//* components *//
import { TopicFeed, TopicHero } from "../../components/topic";

//* utils *//
import { getTopicsService } from "../../services";

//* interfaces *//
interface Props {
  coverImage: string;
  description: string;
  slug: string;
  title: string;
}

const TopicPage: NextPage<Props> = ({
  coverImage,
  description,
  slug,
  title,
}) => {
  return (
    <PrincipalLayout
      title={`${title} | Visualizer`}
      description={description}
      image={coverImage}
    >
      <TopicHero
        coverImage={coverImage}
        description={description}
        title={title}
      />
      <TopicFeed topic={slug} />
    </PrincipalLayout>
  );
};

//* static side generation *//
//* static side generation *//

export const getStaticPaths: GetStaticPaths = (ctx) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allTopics = await getTopicsService();
  const { topic } = params as { topic: string };

  const topicData = allTopics.find(({ slug }) => slug === topic);
  if (!topicData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      coverImage: topicData.cover_photo.urls.regular,
      description: topicData.description,
      slug: topicData.slug,
      title: topicData.title,
    },
  };
};

export default TopicPage;
