import { NextPage, GetServerSideProps } from "next";

//* layout *//
import { PrincipalLayout } from "../../components/layouts";

//* components *//
import { TopicFeed, TopicHero } from "../../components/topic";

//* utils *//
import { getTopic } from "../../utils";

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
    <PrincipalLayout title={`${title} | Visualizer`} description={description}>
      <TopicHero
        coverImage={coverImage}
        description={description}
        title={title}
      />
      <TopicFeed topic={slug} />
    </PrincipalLayout>
  );
};

//* server side render *//
//* server side render *//
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { topic } = params as { topic: string };

  const topicData = await getTopic(topic);
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
