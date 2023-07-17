import { NextPage, GetStaticProps, GetStaticPaths } from "next";

//* COMPONENTS *//
import { TopicFeed, TopicHero } from "@/components";

//* SERVICE *//
import { getTopicsService } from "@/services";

//* LAYOUT *//
import { MainLayout } from "@/layouts";

//* INTERFACE *//
interface Props {
  coverImage: { image: string; blur_hash: string };
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
    <MainLayout
      title={`${title} | Visualizer`}
      description={description}
      image={coverImage.image}
    >
      <TopicHero
        coverImage={coverImage}
        description={description}
        title={title}
      />
      <TopicFeed topic={slug} />
    </MainLayout>
  );
};

//* STATIC SIDE GENERATION *//
//* STATIC SIDE GENERATION *//
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
      coverImage: {
        image: topicData.cover_photo.urls.regular,
        blur_hash: topicData.cover_photo.blur_hash,
      },
      description: topicData.description,
      slug: topicData.slug,
      title: topicData.title,
    },
  };
};

export default TopicPage;
