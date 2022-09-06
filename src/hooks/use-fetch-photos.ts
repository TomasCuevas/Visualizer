import { useInfiniteQuery } from "react-query";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

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
    async ({ pageParam }) => await getPhotos({ pageParam }),
    {
      getNextPageParam: (lastPage, page) => {
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
