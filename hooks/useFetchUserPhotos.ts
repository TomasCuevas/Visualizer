/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useSWRInfinity from "swr/infinite";

//* interfaces *//
import { IPhoto } from "../interfaces/photos";

interface Returns {
  isLoading: boolean;
  photos: IPhoto[];
  getNextPage: () => void;
}

export const useFetchUserPhotos = (username: string): Returns => {
  const getKey = (pageIndex: number) => {
    return `${process.env.NEXT_PUBLIC_BASEURL_API}/users/${username}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`;
  };

  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const { data, error, setSize } = useSWRInfinity<IPhoto[]>(getKey);

  const getNextPage = () => setSize((prev) => prev + 1);

  useEffect(() => {
    if (data && !error) setPhotos(data.flat());
  }, [data]);

  return {
    // properties
    isLoading: !data && !error,
    photos,

    // methods
    getNextPage,
  };
};
