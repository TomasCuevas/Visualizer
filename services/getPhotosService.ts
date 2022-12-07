//* axios *//
import unsplashApi from "../axios/unsplashApi";

//* interface *//
import { IPhoto } from "../interfaces/photos";

interface Props {
  pageParam?: number;
  url: string;
}

export const getPhotosService = async ({
  pageParam = 0,
  url,
}: Props): Promise<IPhoto[]> => {
  try {
    const params = new URLSearchParams();
    params.append("page", pageParam.toString());
    params.append("per_page", "30");
    params.append(
      "client_id",
      process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!.toString()
    );

    const { data } = await unsplashApi.get(`${url}`, { params });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrio un error al obtener las fotos.");
  }
};
