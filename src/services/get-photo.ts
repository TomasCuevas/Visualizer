import axios from "axios";

//* helpers *//
import { getEnvironments } from "../helpers";

//* environments *//
const { baseurl, access_key } = getEnvironments();

export const getPhoto = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${baseurl}/photos/${id}/?client_id=${access_key}`
    );

    return data;
  } catch (error) {
    console.log(error);
    return new Error("Error al obtener las fotos.");
  }
};
