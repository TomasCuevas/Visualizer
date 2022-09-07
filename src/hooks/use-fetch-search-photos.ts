import { useState } from "react";
import { useInfiniteQuery } from "react-query";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

//* services *//
import { getSearchPhotos } from "../services";

interface Returns {
  isLoading: boolean;
  photos: RootObject[];
  status: "idle" | "error" | "loading" | "success";
  fetchNextPage: () => {};
}

export const useFetchSearchPhotos = (search: string): Returns => {
  const { data, status, isLoading, fetchNextPage } = useInfiniteQuery(
    ["searchphotos", search],
    async ({ pageParam }) => await getSearchPhotos({ pageParam, search }),
    {
      getNextPageParam: (_lastPage, page) => {
        return page.length + 1;
      },
    }
  );

  return {
    // properties
    isLoading,
    photos: data?.pages.reduce((prevPhotos, page) => prevPhotos.concat(page)),
    status,

    // methods
    fetchNextPage,
  };
};
