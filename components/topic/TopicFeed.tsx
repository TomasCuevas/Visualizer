/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//* hooks *//
import { useFetchTopicPhotos } from "../../hooks";

//* components *//
import { FeedColumn } from "../feed";
import { Loader } from "../ui";

//* interface *//
interface Props {
  topic: string;
}

export const TopicFeed: React.FC<Props> = ({ topic }) => {
  const { photos, getNextPage, isLoading } = useFetchTopicPhotos(topic);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !isLoading) getNextPage();
  }, [inView]);

  return (
    <>
      <section className="relative mx-auto grid w-full max-w-[820px] grid-cols-1 gap-3 px-[10px] py-6 sm:grid-cols-2 lg:max-w-[1300px] lg:grid-cols-3">
        {photos.map((column, index) => (
          <FeedColumn key={index} photos={column} getNextPage={getNextPage} />
        ))}
        <Loader loading={isLoading} />
      </section>
    </>
  );
};
