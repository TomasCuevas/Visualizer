import { useQuery } from "@tanstack/react-query";

//* service *//
import { getTopicsService } from "@/services";

//* interface *//
import { ITopic } from "@/interfaces";

export const useGetTopics = () => {
  const topicsQuery = useQuery<ITopic[]>(["allTopics"], getTopicsService, {
    staleTime: 1000 * 60,
  });

  return {
    topicsQuery,
  };
};
