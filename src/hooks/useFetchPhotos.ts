import { useInfiniteQuery } from "react-query";

//* interfaces *//
import { RootObject } from "../interfaces";

//* services *//
import { getPhotos } from "../services";

interface Returns {
  isLoading: boolean;
  photos: RootObject[];
  status: "idle" | "error" | "loading" | "success";
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
    isLoading,
    photos,
    status,

    // methods
    fetchNextPage,
  };
};
