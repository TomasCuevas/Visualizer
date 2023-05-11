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
  isFetching?: boolean;
  fetchNextPage?: boolean;
}

export const FeedColumn: React.FC<Props> = ({
  photos,
  getNextPage,
  isFetching,
  fetchNextPage = true,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && getNextPage && !isFetching) getNextPage();
  }, [inView]);

  return (
    <div className="mx-auto flex min-w-full flex-col gap-4 sm:gap-3">
      {photos.map((photo) => (
        <FeedCard key={photo.id} {...photo} />
      ))}
      {fetchNextPage ? (
        <div className="relative -z-10 w-full">
          <div
            ref={ref}
            className="absolute left-0 bottom-0 h-[100px] w-full sm:h-[200px]"
          />
        </div>
      ) : null}
    </div>
  );
};
