//* HOOK *//
import { useFetchSearchPhotos } from "@/hooks";

//* COMPONENTS *//
import { FeedColumns, Loader } from "@/components";

//* INTERFACE *//
interface Props {
  search: string;
}

export const SearchFeed: React.FC<Props> = ({ search }) => {
  const { photos, photosQuery } = useFetchSearchPhotos("/search/photos", {
    name: "query",
    value: search,
  });

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
