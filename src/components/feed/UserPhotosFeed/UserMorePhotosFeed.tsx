//* COMPONENTS *//
import { FeedColumn, Loader } from "@/components";

//* HOOK *//
import { useFetchPhotos, useResponsiveColumns } from "@/hooks";

//* INTERFACE *//
interface Props {
  username: string;
}

export const UserMorePhotosFeed: React.FC<Props> = ({ username }) => {
  const { photosQuery, photos } = useFetchPhotos(`/users/${username}/photos`);
  const columnCount = useResponsiveColumns();

  return (
    <div className="relative border-t px-[5%] pt-5">
      <span className="mx-auto block max-w-[1300px] text-lg font-light tracking-[2px] text-dark-light-text">
        Mas fotos del usuario
      </span>
      <div className="mx-auto grid w-full max-w-[820px] grid-cols-2 gap-3 py-6 lg:max-w-[1300px] lg:grid-cols-3 overflow-hidden">
        <Loader loading={photosQuery.isFetching} />
        {Array.from({ length: columnCount }).map((_, index) => (
          <FeedColumn
            key={`feed-column-${columnCount}-${index}`}
            columnNumber={index}
            fetchNextPage={false}
            getNextPage={photosQuery.fetchNextPage}
            isFetching={photosQuery.isFetching}
            photos={photos}
            totalColumns={columnCount}
          />
        ))}
      </div>
    </div>
  );
};
