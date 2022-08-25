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
  const { data, status, isLoading, fetchNextPage } = useInfiniteQuery(
    ["photos"],
    getPhotos,
    {
      getNextPageParam: (lastPage, page) => {
        return page.length + 1;
      },
    }
  );

  const photos = data?.pages.reduce((prevPhotos, page) =>
    prevPhotos.concat(page)
  );

  return {
    // properties
    photos,
    isLoading,

    // methods
    fetchNextPage,
  };
};
