//* COMPONENTS *//
import { FeedColumn, Loader } from "@/components";

//* HOOK *//
import { useFetchPhotos, useResponsiveColumns } from "@/hooks";

export const MainFeed: React.FC = () => {
  const { photosQuery, photos } = useFetchPhotos("/photos");
  const columnCount = useResponsiveColumns();

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
