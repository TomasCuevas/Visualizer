//* COMPONENTS *//
import { FeedColumns, Loader } from "@/components";

//* HOOK *//
import { useFetchPhotos } from "@/hooks";

//* INTERFACE *//
interface Props {
  username: string;
}

export const UserMorePhotosFeed: React.FC<Props> = ({ username }) => {
  const { photosQuery, photos } = useFetchPhotos(`/users/${username}/photos`);

  //! FETCH NEXT PAGE
  function fetchNextPage() {
    photosQuery.fetchNextPage();
  }

  return (
    <div className="relative border-t px-[5%] pt-5">
      <span className="mx-auto block max-w-[1300px] text-lg font-light tracking-[2px] text-dark-light-text">
        Más fotos del usuario
      </span>
      <div>
        <Loader loading={photosQuery.isFetching} />
        <FeedColumns
          fetchNextPage={false}
          getNextPage={fetchNextPage}
          isFetching={photosQuery.isFetching}
          photos={photos}
        />
      </div>
    </div>
  );
};
