//* api *//
import unsplashApi from "../axios/unsplashApi";

//* interface *//
import { IPhoto } from "../interfaces/photos";

export const getPhotoService = async (id: string): Promise<IPhoto | false> => {
  try {
    const params = new URLSearchParams();
    params.append(
      "client_id",
      process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!.toString()
    );

    const { data } = await unsplashApi.get<IPhoto>(`/photos/${id}`, { params });

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
