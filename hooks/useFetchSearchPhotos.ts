/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWRInmutable from "swr/immutable";

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
  const [previousSearch, setPreviousSearch] = useState<string>("");
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { data, error } = useSWRInmutable<ISearch>(
    `${process.env.NEXT_PUBLIC_BASEURL_API}/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30&query=${search}`,
    { refreshInterval: 0 }
  );

  const router = useRouter();

  const getNextPage = () => {
    if (isLoading) return;
    setPageIndex((prev) => prev + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (data && !error) {
      setPhotos((prev) => [...prev, ...data.results]);
      setIsLoading(false);
      return;
    }

    if (error) {
      router.push("/");
    }
  }, [data]);

  useEffect(() => {
    if (previousSearch === "") {
      return setPreviousSearch(search);
    }
    if (search !== previousSearch) {
      setPreviousSearch(search);
      return setPhotos([]);
    }
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
