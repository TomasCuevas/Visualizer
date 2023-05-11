//* components *//
import { FeedColumn } from "@/components/feed";
import { Loader } from "@/components/ui";

//* hooks *//
import { useCalcColumns, useFetchPhotos } from "@/hooks";

//* interface *//
interface Props {
  username: string;
}

export const UserMorePhotosFeed: React.FC<Props> = ({ username }) => {
  const { photosQuery, photos } = useFetchPhotos(`/users/${username}/photos`);
  const { columns } = useCalcColumns({
    columnsProps: [
      { columnsNumber: 2, min_width: 0 },
      { columnsNumber: 3, min_width: 1024 },
    ],
    elements: photos,
  });

  return (
    <div className="relative border-t px-[5%] pt-5">
      <span className="mx-auto block max-w-[1300px] text-lg font-light tracking-[2px] text-darklighttext">
        Mas fotos del usuario
      </span>
      <div className="mx-auto grid w-full max-w-[820px] grid-cols-2 gap-3 py-6 lg:max-w-[1300px] lg:grid-cols-3">
        <Loader loading={photosQuery.isFetching} />
        {columns.map((column, index) => (
          <FeedColumn key={index} photos={column} fetchNextPage={false} />
        ))}
      </div>
    </div>
  );
};
