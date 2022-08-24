import axios from "axios";

//* helpers *//
import { getEnvironments } from "../helpers";

//* environments *//
const { baseurl, access_key } = getEnvironments();

export const getPhotos = async ({ pageParam = 1 }) => {
  try {
    const { data } = await axios.get(
      `${baseurl}/photos/?client_id=${access_key}&page=${pageParam}`
    );

    return data;
  } catch (error) {
    console.log(error);
    return new Error("Error al obtener las fotos.");
  }
};
