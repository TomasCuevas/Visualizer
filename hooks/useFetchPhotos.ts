import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

//* services *//
import { getPhotosService } from "../services";

//* interfaces *//
import { IPhoto } from "../interfaces/photos";

export const useFetchPhotos = (url: string) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const photosQuery = useInfiniteQuery<IPhoto[]>(
    [`${url}`],
    ({ pageParam }) => getPhotosService({ pageParam, url }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 30) return;

        return pages.length;
      },
      staleTime: 1000 * 60,
    }
  );

  useEffect(() => {
    if (photosQuery.data?.pages) {
      setPhotos(photosQuery.data.pages.flat());
    }
  }, [photosQuery.data]);

  return {
    photosQuery,
    photos,
  };
};
