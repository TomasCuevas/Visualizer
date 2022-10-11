//* api *//
import unsplashApi from "../axios/unsplashApi";

//* interface *//
import { IPhoto } from "../interfaces/photos";

export const getPhoto = async (id: string): Promise<IPhoto | false> => {
  try {
    const { data } = await unsplashApi.get<IPhoto>(`/photos/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
