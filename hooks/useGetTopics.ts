/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWRInmutable from "swr/immutable";

//* interfaces *//
import { ITopic } from "../interfaces/topic";

interface Return {
  isLoading: boolean;
  topics: ITopic[] | undefined;
}

export const useGetTopics = (): Return => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data: topics, error } = useSWRInmutable<ITopic[]>(
    `${process.env.NEXT_PUBLIC_BASEURL_API}/topics?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
    { refreshInterval: 0 }
  );

  const router = useRouter();

  useEffect(() => {
    if (topics && !error) {
      setIsLoading(false);
      return;
    }

    if (error) {
      router.push("/");
    }
  }, [topics, error]);

  return {
    isLoading,
    topics,
  };
};
