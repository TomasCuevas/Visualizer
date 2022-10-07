import axios from "axios";
import { IPhoto } from "../interfaces/photos";

export const getPhoto = async (id: string): Promise<IPhoto | false> => {
  try {
    const { data } = await axios.get<IPhoto>(
      `${process.env.NEXT_PUBLIC_BASEURL_API}/photos/${id}/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
    );

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
