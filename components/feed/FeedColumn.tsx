//* components *//
import { FeedCard } from "./";

//* interfaces *//
import { IPhoto } from "../../interfaces/photos";

interface Props {
  photos: IPhoto[];
}

export const FeedColumn: React.FC<Props> = ({ photos }) => {
  return (
    <div className="mx-auto flex flex-col gap-3">
      {photos.map((photo) => (
        <FeedCard key={`${photo.id}${Math.random()}`} {...photo} />
      ))}
    </div>
  );
};
