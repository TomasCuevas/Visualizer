/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useSWRInfinity from "swr/infinite";

//* interfaces *//
import { IPhoto } from "../interfaces/photos";
import { ISearch } from "../interfaces/seach";

//* services *//

interface Return {
  isLoading: boolean;
  photos: IPhoto[];
  getNextPage: () => void;
}

export const useFetchSearchPhotos = (search: string): Return => {
  const getKey = (pageIndex: number) => {
    return `${process.env.NEXT_PUBLIC_BASEURL_API}/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30&query=${search}`;
  };

  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const { data, error, setSize } = useSWRInfinity<ISearch>(getKey);

  const getNextPage = () => setSize((prev) => prev + 1);

  useEffect(() => {
    if (data && !error) {
      const newPhotos = data.map((result) => result.results).flat();
      setPhotos(newPhotos);
    }
  }, [data]);

  return {
    // properties
    isLoading: !data && !error,
    photos,

    // methods
    getNextPage,
  };
};
