import axios from "axios";

//* helpers *//
import { getEnvironments } from "../helpers";

//* environments *//
const { baseurl, access_key } = getEnvironments();

export const getUserPhotos = async ({
  pageParam = 1,
  username,
}: {
  pageParam?: number;
  username: string;
}) => {
  try {
    const { data } = await axios.get(
      `${baseurl}/users/${username}/photos/?client_id=${access_key}&page=${pageParam}&per_page=20`
    );

    return data;
  } catch (error) {
    console.log(error);
    return new Error("Error al obtener las fotos.");
  }
};
