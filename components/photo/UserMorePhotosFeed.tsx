//* hooks *//
import { useCalcColumns, useFetchUserPhotos } from "../../hooks";

//* components *//
import { FeedColumn } from "../feed";
import { Loader } from "../ui";

export const UserMorePhotosFeed = ({ username }: { username: string }) => {
  const { photos, isLoading } = useFetchUserPhotos(username);
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
        <Loader loading={isLoading} />
        {columns.map((column, index) => (
          <FeedColumn key={index} photos={column} />
        ))}
      </div>
      <div className="bg-gradient absolute bottom-0 left-0 min-h-[1000px] w-full " />
    </div>
  );
};
