import { useQuery } from "react-query";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

//* services *//
import { getPhoto } from "../services";

interface Returns {
  photo: RootObject;
  isLoading: boolean;
  status: "idle" | "error" | "loading" | "success";
}

export const useFetchPhoto = (id: string): Returns => {
  const {
    data: photo,
    status,
    isLoading,
  } = useQuery(["photo"], () => getPhoto(id));

  return {
    // properties
    photo,
    isLoading,
    status,
  };
};
