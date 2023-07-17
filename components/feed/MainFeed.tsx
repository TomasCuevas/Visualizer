import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//* COMPONENTS *//
import { FeedColumn } from "@/components/feed";
import { Loader } from "@/components/ui";

//* HOOK *//
import { useFetchPhotos } from "@/hooks";

export const MainFeed: React.FC = () => {
  const { photosQuery, photos } = useFetchPhotos("/photos");

  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1024 });
  const [columnCount, setcolumnCount] = useState(3);

  useEffect(() => {
    setcolumnCount(isMobile ? 1 : isTablet ? 2 : 3);
  }, [isMobile, isTablet]);

  return (
    <>
      <section className="relative mx-auto mb-10 grid w-full max-w-[900px] grid-cols-1 gap-3 px-[5%] py-6 sm:grid-cols-2 lg:max-w-[1500px] lg:grid-cols-3">
        {Array.from({ length: columnCount }).map((_, index) => (
          <FeedColumn
            key={`feed-column-${columnCount}-${index}`}
            columnNumber={index}
            getNextPage={photosQuery.fetchNextPage}
            isFetching={photosQuery.isFetching}
            photos={photos}
            totalColumns={columnCount}
          />
        ))}
      </section>
      <Loader loading={photosQuery.isFetching} />
    </>
  );
};
