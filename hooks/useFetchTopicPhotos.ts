/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useSWR from "swr";

//* interface *//
import { IPhoto } from "../interfaces/photos";

interface Return {
  error: boolean;
  isLoading: boolean;
  photos: IPhoto[];
  getNextPage: () => void;
}

export const useFetchTopicPhotos = (topic: string): Return => {
  const [previousTopic, setPreviousTopic] = useState("");
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { data, error } = useSWR<IPhoto[]>(
    `${process.env.NEXT_PUBLIC_BASEURL_API}/topics/${topic}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`,
    { refreshInterval: 0 }
  );

  const getNextPage = () => {
    if (isLoading) return;
    setPageIndex((prev) => prev + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    if (data && !error && previousTopic !== topic) {
      setPreviousTopic(topic);
      setPhotos([...data.flat()]);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }

    if (data && !error && previousTopic === topic) {
      setPhotos((prev) => [...prev, ...data.flat()]);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return;
    }
  }, [data, error]);

  useEffect(() => {
    setPageIndex(1);
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
