/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useSWRInfinity from "swr/infinite";

//* interfaces *//
import { IPhoto } from "../interfaces/photos";

interface Returns {
  error: boolean;
  isLoading: boolean;
  photos: IPhoto[];
  getNextPage: () => void;
}

export const useFetchPhotos = (): Returns => {
  const getKey = (pageIndex: number) => {
    return `${process.env.NEXT_PUBLIC_BASEURL_API}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`;
  };

  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const { data, error, setSize } = useSWRInfinity<IPhoto[]>(getKey);

  const getNextPage = () => setSize((prev) => prev + 1);

  useEffect(() => {
    if (data && !error) setPhotos(data.flat());
  }, [data]);

  return {
    // properties
    error,
    isLoading: !data && !error,
    photos,

    // methods
    getNextPage,
  };
};
