import { useEffect } from "react";
import { useParams } from "react-router-dom";

//* components *//
import { Header, PhotoComponent } from "../components";

//* hooks *//
import { useFetchPhoto } from "../hooks";

export const PhotoPage = () => {
  const { id } = useParams();
  const { photo, isLoading, status } = useFetchPhoto(id!);

  if (status === "loading") {
    return (
      <>
        <Header />
      </>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <PhotoComponent {...photo} />
    </>
  );
};
