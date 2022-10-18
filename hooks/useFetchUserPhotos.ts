import { useState, useEffect } from "react";
import useSWR from "swr";

//* interfaces *//
import { IPhoto } from "../interfaces/photos";

interface Return {
  error: boolean;
  isLoading: boolean;
  photos: IPhoto[];
  getNextPage: () => void;
}

export const useFetchUserPhotos = (username: string): Return => {
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { data, error } = useSWR<IPhoto[]>(
    `${process.env.NEXT_PUBLIC_BASEURL_API}/users/${username}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`,
    { refreshInterval: 0 }
  );

  const getNextPage = () => {
    if (isLoading) return;
    setPageIndex((prev) => prev + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (data && !error) {
      setPhotos((prev) => [...prev, ...data.flat()]);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [data, error]);

  return {
    // properties
    error,
    isLoading,
    photos,

    // methods
    getNextPage,
  };
};
