/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useSWRInfinity from "swr/infinite";

//* interface *//
import { ITopicPhoto } from "../interfaces/topicPhoto";

interface Return {
  isLoading: boolean;
  photos: ITopicPhoto[];
  getNextPage: () => void;
}

export const useFetchTopicPhotos = (topic: string): Return => {
  const getKey = (pageIndex: number) => {
    return `${process.env.NEXT_PUBLIC_BASEURL_API}/topics/${topic}/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&page=${pageIndex}&per_page=30`;
  };

  const [photos, setPhotos] = useState<ITopicPhoto[]>([]);
  const { data, error, setSize } = useSWRInfinity<ITopicPhoto[]>(getKey);

  const getNextPage = () => setSize((prev) => prev + 1);

  useEffect(() => {
    if (data && !error) {
      setPhotos(data.flat());
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
