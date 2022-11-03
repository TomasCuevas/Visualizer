//* api */*
import unsplashApi from "../axios/unsplashApi";

//* interface *//
import { ITopic } from "../interfaces/topic";

export const getTopics = async (): Promise<ITopic[]> => {
  const { data } = await unsplashApi.get<ITopic[]>(`/topics`);
  return data;
};
