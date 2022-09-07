import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//* hooks *//
import { useFeedColumns, useFetchSearchPhotos } from "../hooks";

//* components *//
import { FeedHomeColumn } from "./";

export const FeedSearch = ({ search }: { search: string }) => {
  const { status, photos, fetchNextPage } = useFetchSearchPhotos(search);
  const { columns } = useFeedColumns({
    elements: photos,
    columnsProps: [
      { columnsNumber: 1, min_width: 0 },
      { columnsNumber: 2, min_width: 640 },
      { columnsNumber: 3, min_width: 1024 },
    ],
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && status === "success") {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <main className="w-main relative min-h-[calc(100vh_-_80px)]">
      <section className="mx-auto grid w-full max-w-[820px] grid-cols-1 gap-3 px-[10px] py-6 sm:grid-cols-2 lg:max-w-[1300px] lg:grid-cols-3">
        {status === "success" &&
          columns.map((column, index) => (
            <FeedHomeColumn key={`${index}${Math.random}`} photos={column} />
          ))}
      </section>
      <div ref={ref} className="absolute left-0 bottom-0 h-[1000px] w-full" />
    </main>
  );
};
