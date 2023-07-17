import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//* HOOK *//
import { useFetchPhotos } from "@/hooks";

//* COMPONENTS *//
import { FeedColumn, Loader } from "@/components";

//* INTERFACE *//
interface Props {
  topic: string;
}

export const TopicFeed: React.FC<Props> = ({ topic }) => {
  const { photos, photosQuery } = useFetchPhotos(`/topics/${topic}/photos`);

  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1024 });
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    setColumnCount(isMobile ? 1 : isTablet ? 2 : 3);
  }, [isMobile, isTablet]);

  return (
    <>
      <section className="relative mx-auto grid w-full max-w-[820px] grid-cols-1 gap-3 px-[10px] py-6 sm:grid-cols-2 lg:max-w-[1300px] lg:grid-cols-3">
        {Array.from({ length: columnCount }).map((_, index) => (
          <FeedColumn
            key={index}
            isFetching={photosQuery.isFetching}
            columnNumber={index}
            getNextPage={photosQuery.fetchNextPage}
            photos={photos}
            totalColumns={columnCount}
          />
        ))}
      </section>
      <Loader loading={photosQuery.isFetching} />
    </>
  );
};
