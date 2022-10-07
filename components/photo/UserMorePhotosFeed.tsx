//* hooks *//
import { useCalcColumns, useFetchUserPhotos } from "../../hooks";

//* components *//
import { FeedColumn } from "../feed";

export const UserMorePhotosFeed = ({ username }: { username: string }) => {
  const { photos } = useFetchUserPhotos(username);
  const { columns } = useCalcColumns(
    [
      { columnsNumber: 2, min_width: 0 },
      { columnsNumber: 3, min_width: 1024 },
    ],
    photos
  );

  return (
    <div className="border-t px-[10px] pt-5">
      <span className="mx-auto block max-w-[1300px] text-lg font-light tracking-[2px] text-darklighttext">
        Mas fotos del usuario
      </span>
      <div className="mx-auto grid w-full max-w-[820px] grid-cols-2 gap-3 py-6 lg:max-w-[1300px] lg:grid-cols-3">
        {columns.map((column, index) => (
          <FeedColumn key={index} photos={column} />
        ))}
      </div>
    </div>
  );
};
