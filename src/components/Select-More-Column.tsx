//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

//* components *//
import { SelectMoreCard } from "./";

export const SelectMoreColumn = ({ photos }: { photos: RootObject[] }) => {
  return (
    <div className="mx-auto flex flex-col gap-3">
      {photos.map((photo) => (
        <SelectMoreCard key={photo.id} {...photo} />
      ))}
    </div>
  );
};
