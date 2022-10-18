/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useSWR from "swr";

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
  const [previousSearch, setPreviousSearch] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { data, error } = useSWR<ISearch>(
    `${process.env.NEXT_PUBLIC_BASEURL_API}/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30&query=${search}`,
    { refreshInterval: 0 }
  );

  const getNextPage = () => {
    if (isLoading) return;
    setPageIndex((prev) => prev + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (data && !error && previousSearch !== search) {
      setPreviousSearch(search);
      setPhotos([...data.results.flat()]);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }

    if (data && !error && previousSearch === search) {
      setPhotos((prev) => [...prev, ...data.results.flat()]);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }
  }, [data]);

  useEffect(() => {
    setPageIndex(1);
  }, [search]);

  return {
    // properties
    error,
    isLoading,
    photos,

    // methods
    getNextPage,
  };
};
