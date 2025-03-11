//* COMPONENTS *//
import { FeedColumns, Loader } from "@/components";

//* HOOK *//
import { useFetchPhotos } from "@/hooks";

export const MainFeed: React.FC = () => {
  const { photosQuery, photos } = useFetchPhotos("/photos");

  //! FETCH NEXT PAGE
  function fetchNextPage() {
    photosQuery.fetchNextPage();
  }

  return (
    <>
      <FeedColumns
        fetchNextPage={photosQuery.hasNextPage}
        getNextPage={fetchNextPage}
        isFetching={photosQuery.isFetching}
        photos={photos}
      />

      <Loader loading={photosQuery.isFetching} />
    </>
  );
};
