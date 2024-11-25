//* AXIOS INSTANCE *//
import { unsplashApi } from "@/axios";

//* INTERFACE *//
import { ITopic } from "@/interfaces";

//! GET TOPIC
export const getTopicService = async (topic: string): Promise<ITopic | false> => {
  try {
    const { data } = await unsplashApi.get<ITopic>(`/topics/${topic}`);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//! GET TOPICS
export const getTopicsService = async (): Promise<ITopic[]> => {
  try {
    const { data } = await unsplashApi.get<ITopic[]>(`/topics`);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrio un error al obtener los topics");
  }
};
