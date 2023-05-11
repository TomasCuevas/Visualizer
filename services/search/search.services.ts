//* axios *//
import { unsplashApi } from "@/axios";

//* interfaces *//
import { ISearch } from "@/interfaces";

interface Props {
  pageParam?: number;
  url: string;
  query?: {
    name: string;
    value: string;
  };
}

//! get search photos [service]
export const getSearchPhotosService = async ({
  pageParam = 0,
  url,
  query,
}: Props): Promise<ISearch> => {
  try {
    const params = new URLSearchParams();
    params.append("page", pageParam.toString());
    params.append("per_page", "30");
    params.append(
      "client_id",
      process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!.toString()
    );

    if (query) {
      params.append(query.name, query.value);
    }

    const { data } = await unsplashApi.get(`${url}`, { params });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Ocurrio un error al obtener las fotos.");
  }
};
