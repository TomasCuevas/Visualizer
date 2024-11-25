//* AXIOS INSTANCE *//
import { unsplashApi } from "@/axios";

//* INTERFACE *//
import { IPhoto } from "@/interfaces";

//! GET PHOTO
export const getPhotoService = async (id: string): Promise<IPhoto | false> => {
  try {
    const { data } = await unsplashApi.get<IPhoto>(`/photos/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//! GET PHOTOS
export const getPhotosService = async ({
  pageParam = 1,
  url,
}: {
  pageParam?: number;
  url: string;
}): Promise<IPhoto[]> => {
  try {
    const params = { page: pageParam.toString(), per_page: "30" };
    const { data } = await unsplashApi.get<IPhoto[]>(`${url}`, { params });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrio un error al obtener las fotos.");
  }
};
