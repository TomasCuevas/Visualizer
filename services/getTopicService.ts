//* api */*
import unsplashApi from "../axios/unsplashApi";

//* interface *//
import { ITopic } from "../interfaces/topic";

export const getTopicService = async (
  topic: string
): Promise<ITopic | false> => {
  try {
    const { data } = await unsplashApi.get<ITopic>(`/topics/${topic}`);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
