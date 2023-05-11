/* eslint-disable react-hooks/exhaustive-deps */
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

//* services *//
import { getSearchPhotosService } from "@/services";

//* interfaces *//
import { IPhoto, ISearch } from "@/interfaces";

interface IQuery {
  name: string;
  value: string;
}

export const useFetchSearchPhotos = (url: string, query: IQuery) => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const photosQuery = useInfiniteQuery<ISearch>(
    [`${url}${JSON.stringify(query)}`],
    ({ pageParam }) => getSearchPhotosService({ pageParam, url, query }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length < 30) return;

        return pages.length;
      },
      staleTime: 1000 * 60,
    }
  );

  useEffect(() => {
    if (photosQuery.data?.pages) {
      const allPhotos = photosQuery.data.pages
        .map((result) => result.results)
        .flat();

      setPhotos(allPhotos);
    }
  }, [photosQuery.data]);

  return {
    photosQuery,
    photos,
  };
};
