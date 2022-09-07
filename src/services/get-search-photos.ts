import axios from "axios";

//* helpers *//
import { getEnvironments } from "../helpers";

//* environments *//
const { baseurl, access_key } = getEnvironments();

export const getSearchPhotos = async ({
  pageParam = 1,
  search,
}: {
  pageParam?: number;
  search: string;
}) => {
  try {
    const { data } = await axios.get(
      `${baseurl}/search/photos/?client_id=${access_key}&page=${pageParam}&per_page=120&query=${search}`
    );

    return await data.results;
  } catch (error) {
    console.log(error);
    return new Error("Error al obtener las fotos.");
  }
};
