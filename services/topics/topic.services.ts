//* api */*
import { unsplashApi } from "@/axios";

//* interface *//
import { ITopic } from "@/interfaces";

//! get topic [service]
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

//! get topics [service]
export const getTopicsService = async (): Promise<ITopic[]> => {
  try {
    const params = new URLSearchParams();
    params.append(
      "client_id",
      process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!.toString()
    );

    const { data } = await unsplashApi.get<ITopic[]>(`/topics`, { params });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrio un error al obtener los topics");
  }
};
