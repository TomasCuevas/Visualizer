//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";
import { Result } from "../interfaces/search-interfaces";

//* components *//
import { FeedHomeCard } from "./";

export const FeedHomeColumn = ({
  photos,
}: {
  photos: RootObject[] | Result[];
}) => {
  return (
    <div className="mx-auto flex flex-col gap-3">
      {photos.map((photo) => (
        <FeedHomeCard key={`${photo.id}${Math.random()}`} {...photo} />
      ))}
    </div>
  );
};
