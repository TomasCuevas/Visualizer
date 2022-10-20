/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import uswSWRInfinity from "swr/infinite";

//* interfaces *//
import { IPhoto } from "../interfaces/photos";
import { ISearch } from "../interfaces/seach";

//* services *//

interface Return {
  error: boolean;
  isLoading: boolean;
  photos: IPhoto[];
  getNextPage: () => void;
}

export const useFetchSearchPhotos = (search: string): Return => {
  const getPageIndex = (pageIndex: number) =>
    `${process.env.NEXT_PUBLIC_BASEURL_API}/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30&query=${search}`;

  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { data, error, setSize } = uswSWRInfinity<ISearch>(getPageIndex, {
    initialSize: 1,
  });

  const getNextPage = () => {
    if (isLoading) return;
    setSize((prev) => prev + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (data && !error) {
      setPhotos([...data.map((arr) => arr.results).flat()]);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [data]);

  return {
    // properties
    error,
    isLoading,
    photos,

    // methods
    getNextPage,
  };
};
