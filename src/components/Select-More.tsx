import { useEffect } from "react";

//* hooks *//
import { useFeedColumns, useFetchUserPhotos } from "../hooks";

//* components *//
import { SelectMoreColumn } from "./";

export const SelectMore = ({ username }: { username: string }) => {
  const { photos, refetch } = useFetchUserPhotos(username);
  const { columns } = useFeedColumns({
    elements: photos,
    columnsProps: [
      { columnsNumber: 2, min_width: 0 },
      { columnsNumber: 3, min_width: 1024 },
    ],
  });

  useEffect(() => {
    refetch();
  }, [username]);

  return (
    <div className="border-t  px-[10px] pt-5">
      <span className="mx-auto block max-w-[1300px] text-lg font-light tracking-[2px] text-darklighttext">
        Mas fotos del usuario
      </span>
      <div
        className={`mx-auto grid w-full max-w-[820px] grid-cols-2  gap-3 py-6 lg:max-w-[1300px] lg:grid-cols-3`}
      >
        {columns.map((column, index) => (
          <SelectMoreColumn key={index} photos={column} />
        ))}
      </div>
    </div>
  );
};
