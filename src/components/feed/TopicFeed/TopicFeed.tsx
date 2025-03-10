//* HOOK *//
import { useFetchPhotos, useResponsiveColumns } from "@/hooks";

//* COMPONENTS *//
import { FeedColumn, Loader } from "@/components";

//* INTERFACE *//
interface Props {
  topic: string;
}

export const TopicFeed: React.FC<Props> = ({ topic }) => {
  const { photos, photosQuery } = useFetchPhotos(`/topics/${topic}/photos`);
  const columnCount = useResponsiveColumns();

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
