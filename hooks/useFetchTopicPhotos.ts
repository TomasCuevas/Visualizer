/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useSWR from "swr";

//* interface *//
import { IPhoto } from "../interfaces/photos";
import { calcColumns } from "../utils";

interface Return {
  error: boolean;
  isLoading: boolean;
  photos: IPhoto[][];
  getNextPage: () => void;
}

export const useFetchTopicPhotos = (topic: string): Return => {
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[][]>([]);
  const { data, error } = useSWR<IPhoto[]>(
    `${process.env.NEXT_PUBLIC_BASEURL_API}/topics/${topic}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`
  );

  const getNextPage = () => {
    if (isLoading) return;
    setPageIndex((prev) => prev + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (data && !error) {
      calcColumns({
        columnsProps: [
          { columnsNumber: 1, min_width: 0 },
          { columnsNumber: 2, min_width: 640 },
          { columnsNumber: 3, min_width: 1024 },
        ],
        elements: photos,
        newElements: data,
        setElements: setPhotos,
      });

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [data]);

  useEffect(() => {
    setPageIndex(1);
    setIsLoading(true);
    setPhotos([]);
  }, [topic]);

  return {
    // properties
    error,
    isLoading,
    photos,

    // methods
    getNextPage,
  };
};
