//* AXIOS INSTANCE *//
import { unsplashApi } from "@/axios";

//* INTERFACES *//
import { ISearch } from "@/interfaces";

interface Props {
  pageParam?: number;
  url: string;
  query?: {
    name: string;
    value: string;
  };
}

//! GET SEARCH PHOTOS
export const getSearchPhotosService = async ({
  pageParam = 0,
  url,
  query,
}: Props): Promise<ISearch> => {
  try {
    const params = {
      page: pageParam.toString(),
      per_page: "30",
      ...(query && { [query.name]: query.value }),
    };

    const { data } = await unsplashApi.get<ISearch>(`${url}`, { params });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrio un error al obtener las fotos.");
  }
};
