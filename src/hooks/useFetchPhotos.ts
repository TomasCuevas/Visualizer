import { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";

//* interfaces *//
import { RootObject } from "../interfaces";

//* services *//
import { getPhotos } from "../services";

interface Returns {
  photos: RootObject[];
  isLoading: boolean;
  fetchNextPage: () => {};
}

export const useFetchPhotos = (): Returns => {
  const [photos, setPhotos] = useState<RootObject[]>([]);
  const [page, setPage] = useState<number>(1);
  const { data, status, isLoading, fetchNextPage } = useInfiniteQuery(
    ["photos"],
    getPhotos,
    {
      getNextPageParam: () => page,
    }
  );

  useEffect(() => {
    if (data?.pages && status === "success") {
      const newPhotos: RootObject[] = [];
      data?.pages.forEach((photosArray) => newPhotos.push(...photosArray));

      setPhotos(newPhotos);
      setPage(page + 1);
    }
  }, [data]);

  return {
    // properties
    photos,
    isLoading,

    // methods
    fetchNextPage,
  };
};
