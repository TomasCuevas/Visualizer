//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

//* components *//
import { FeedHomeCard } from "./";

export const FeedHomeColumn = ({ photos }: { photos: RootObject[] }) => {
  return (
    <div className="mx-auto flex flex-col gap-3">
      {photos.map((photo) => (
        <FeedHomeCard key={photo.id} {...photo} />
      ))}
    </div>
  );
};
