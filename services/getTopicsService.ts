//* api */*
import unsplashApi from "../axios/unsplashApi";

//* interface *//
import { ITopic } from "../interfaces/topic";

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
