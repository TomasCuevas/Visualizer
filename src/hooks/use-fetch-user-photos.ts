import { useInfiniteQuery } from "react-query";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

//* services *//
import { getUserPhotos } from "../services";

interface Returns {
  isLoading: boolean;
  photos: RootObject[];
  status: "idle" | "error" | "loading" | "success";
  fetchNextPage: () => {};
  refetch: () => {};
}

export const useFetchUserPhotos = (username: string): Returns => {
  const { data, status, isLoading, fetchNextPage, refetch } = useInfiniteQuery(
    ["more-user-photos"],
    () => getUserPhotos({ username }),
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
    refetch,
  };
};
