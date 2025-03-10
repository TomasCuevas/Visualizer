import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

//* SERVICES *//
import { getPhotosService } from "@/services";

//* INTERFACE *//
import { IPhoto } from "@/interfaces";

//! USE FETCH PHOTOS
export const useFetchPhotos = (url: string) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const photosQuery = useInfiniteQuery<IPhoto[]>({
    queryKey: [`${url}`],
    queryFn: ({ pageParam }) => getPhotosService({ pageParam: pageParam as number, url }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 30) return null;
      return allPages.length + 1;
    },
    staleTime: 1000 * 60,
  })
  
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
