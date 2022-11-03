/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWRInmutable from "swr/immutable";

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

  const { data, error } = useSWRInmutable<IPhoto[]>(
    `${process.env.NEXT_PUBLIC_BASEURL_API}/users/${username}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`
  );

  const router = useRouter();

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
      }, 500);

      return;
    }

    if (error) {
      router.push("/");
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
