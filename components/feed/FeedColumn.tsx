/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//* components *//
import { FeedCard } from "./";

//* interfaces *//
import { IPhoto } from "../../interfaces/photos";

interface Props {
  photos: IPhoto[];
  getNextPage?: any;
}

export const FeedColumn: React.FC<Props> = ({ photos, getNextPage }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && getNextPage) getNextPage();
  }, [inView]);

  return (
    <div className="mx-auto flex min-w-full flex-col gap-3">
      {photos.map((photo) => (
        <FeedCard key={photo.id} {...photo} />
      ))}
      <div className="relative w-full">
        <div
          ref={ref}
          className="absolute left-0 bottom-0 h-[700px] w-full sm:h-[1000px]"
        />
      </div>
    </div>
  );
};
