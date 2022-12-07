import { useQuery } from "@tanstack/react-query";

//* service *//
import { getTopicsService } from "../services";

//* interfaces *//
import { ITopic } from "../interfaces/topic";

export const useGetTopics = () => {
  const topicsQuery = useQuery<ITopic[]>(["allTopics"], getTopicsService, {
    staleTime: 1000 * 60,
  });

  return {
    topicsQuery,
  };
};
