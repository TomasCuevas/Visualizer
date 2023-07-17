import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

//* COMPONENT *//
import { FeedCard } from "@/components";

//* INTERFACES *//
import { IPhoto, ISearch } from "@/interfaces";

interface Props {
  columnNumber: number;
  fetchNextPage?: boolean;
  isFetching?: boolean;
  photos: IPhoto[];
  totalColumns: number;
  getNextPage?(
    options?: FetchNextPageOptions | undefined
  ): Promise<InfiniteQueryObserverResult<IPhoto[] | ISearch, unknown>>;
}

export const FeedColumn: React.FC<Props> = ({
  columnNumber,
  fetchNextPage = true,
  isFetching,
  photos,
  totalColumns,
  getNextPage,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && getNextPage && !isFetching) getNextPage();
  }, [inView]);

  return (
    <div className="mx-auto flex min-w-full flex-col gap-4 sm:gap-3">
      {photos.map(
        (photo, index) =>
          index % totalColumns === columnNumber && (
            <FeedCard
              key={`${columnNumber}-${photo.id}-${totalColumns}-${index}`}
              {...photo}
            />
          )
      )}
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
