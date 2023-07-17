//* AXIOS INSTANCE *//
import { unsplashApi } from "@/axios";

//* INTERFACE *//
import { IPhoto } from "@/interfaces";

//! GET PHOTO [SERVICE]
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

//! GET PHOTOS [SERVICE]
export const getPhotosService = async ({
  pageParam = 1,
  url,
}: {
  pageParam?: number;
  url: string;
}): Promise<IPhoto[]> => {
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
