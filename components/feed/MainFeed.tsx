/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//* components *//
import { Loader } from "../ui";
import { FeedColumn } from ".";

//* hooks *//
import { useCalcColumns, useFetchPhotos } from "../../hooks";

export const MainFeed: React.FC = () => {
  const { photos, isLoading, getNextPage } = useFetchPhotos();
  const { columns } = useCalcColumns(
    [
      { columnsNumber: 1, min_width: 0 },
      { columnsNumber: 2, min_width: 640 },
      { columnsNumber: 3, min_width: 1024 },
    ],
    photos
  );

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !isLoading) getNextPage();
  }, [inView]);

  return (
    <>
      <section className="relative mx-auto mb-10 grid w-full max-w-[900px] grid-cols-1 gap-3 px-[5%] py-6 sm:grid-cols-2 lg:max-w-[1500px] lg:grid-cols-3">
        {columns.map((column, index) => (
          <FeedColumn key={index} photos={column} />
        ))}
        <Loader loading={isLoading} />
        <div ref={ref} className="absolute left-0 bottom-0 h-[4000px] w-full" />
      </section>
    </>
  );
};
