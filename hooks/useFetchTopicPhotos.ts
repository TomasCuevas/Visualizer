/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import uswSWRInfinity from "swr/infinite";

//* interface *//
import { IPhoto } from "../interfaces/photos";

interface Return {
  error: boolean;
  isLoading: boolean;
  photos: IPhoto[];
  getNextPage: () => void;
}

export const useFetchTopicPhotos = (topic: string): Return => {
  const getPageIndex = (pageIndex: number) =>
    `${process.env.NEXT_PUBLIC_BASEURL_API}/topics/${topic}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`;

  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { data, error, setSize } = uswSWRInfinity<IPhoto[]>(getPageIndex);

  const getNextPage = () => {
    if (isLoading) return;
    setSize((prev) => prev + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (data && !error) {
      setPhotos((prev) => [...data.flat()]);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
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
