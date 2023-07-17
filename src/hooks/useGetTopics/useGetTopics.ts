import { useQuery } from "@tanstack/react-query";

//* SERVICE *//
import { getTopicsService } from "@/services";

//* INTERFACE *//
import { ITopic } from "@/interfaces";

export const useGetTopics = () => {
  const topicsQuery = useQuery<ITopic[]>(["allTopics"], getTopicsService, {
    staleTime: 1000 * 60,
  });

  return {
    topicsQuery,
  };
};
