import { useQuery } from "react-query";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

//* services *//
import { getPhoto } from "../services";

interface Returns {
  isLoading: boolean;
  photo: RootObject;
  status: "idle" | "error" | "loading" | "success";
  refetch: () => {};
}

export const useFetchPhoto = (id: string): Returns => {
  const {
    data: photo,
    isLoading,
    refetch,
    status,
  } = useQuery(["photo"], async () => await getPhoto(id));

  return {
    // properties
    isLoading,
    photo,
    status,

    // methods
    refetch,
  };
};
