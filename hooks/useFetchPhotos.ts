import { useEffect, useState } from "react";
import useSWRInmutable from "swr/immutable";

//* interfaces *//
import { IPhoto } from "../interfaces/photos";

interface Return {
  error: boolean;
  isLoading: boolean;
  photos: IPhoto[];
  getNextPage: () => void;
}

export const useFetchPhotos = (): Return => {
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { data, error } = useSWRInmutable<IPhoto[]>(
    `${process.env.NEXT_PUBLIC_BASEURL_API}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`
  );

  const getNextPage = () => {
    if (isLoading) return;
    setPageIndex((prev) => prev + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (data && !error) {
      console.log(data);
      setPhotos((prev) => [...prev, ...data.flat()]);

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
