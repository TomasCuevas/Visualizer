import { useEffect } from "react";
import { useParams } from "react-router-dom";

//* components *//
import { Header, SelectPhotoCard, SelectMore } from "../components";

//* hooks *//
import { useFetchPhoto } from "../hooks";

export const SelectPhotoPage = () => {
  const { id } = useParams();
  const { photo, status, refetch } = useFetchPhoto(id!);

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [id]);

  if (status === "loading") {
    return <></>;
  }

  return (
    <>
      <Header />
      <main>
        <SelectPhotoCard {...photo} />
        <SelectMore username={photo.user.username} />
      </main>
    </>
  );
};
