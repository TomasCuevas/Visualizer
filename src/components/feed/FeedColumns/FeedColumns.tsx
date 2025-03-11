import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//* COMPONENT *//
import { FeedCard } from "@/components";

//* INTERFACES *//
import { IPhoto } from "@/interfaces";

interface Props {
  photos: IPhoto[];
  fetchNextPage?: boolean;
  isFetching?: boolean;
  getNextPage(): void;
}

export const FeedColumns: React.FC<Props> = ({
  photos,
  fetchNextPage = true,
  isFetching = false,
  getNextPage,
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView && getNextPage && isFetching === false) getNextPage();
  }, [inView]);

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}
        className="mx-auto mt-4 max-w-[900px] lg:max-w-[1300px] [&>div]:!gap-4"
      >
        <Masonry>
          {photos.map((photo) => (
            <FeedCard key={photo.id} {...photo} />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {fetchNextPage && (
        <div className="relative z-10 w-full">
          <div
            ref={ref}
            className="absolute bottom-0 left-0 h-[300px] w-full bg-gradient-to-b from-stone-200/5 via-white to-white backdrop-blur-sm sm:h-[1000px]"
          />
        </div>
      )}
    </>
  );
};
