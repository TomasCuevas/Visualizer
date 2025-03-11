//* HOOK *//
import { useFetchPhotos } from "@/hooks";

//* COMPONENTS *//
import { FeedColumns, Loader } from "@/components";

//* INTERFACE *//
interface Props {
  topic: string;
}

export const TopicFeed: React.FC<Props> = ({ topic }) => {
  const { photos, photosQuery } = useFetchPhotos(`/topics/${topic}/photos`);

  //! FETCH NEXT PAGE
  function fetchNextPage() {
    photosQuery.fetchNextPage();
  }

  return (
    <>
      <FeedColumns
        isFetching={photosQuery.isFetching}
        fetchNextPage={photosQuery.hasNextPage}
        getNextPage={fetchNextPage}
        photos={photos}
      />

      <Loader loading={photosQuery.isFetching} />
    </>
  );
};
