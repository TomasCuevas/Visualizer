import { GetStaticProps, GetStaticPaths, NextPage } from "next";

//* COMPONENTS *//
import { PhotoCard, UserMorePhotosFeed } from "@/components";

//* SERVICE *//
import { getPhotoService } from "@/services";

//* LAYOUT *//
import { LayoutWithoutNavbar } from "@/layouts";

//* INTERFACES *//
import { IPhoto } from "@/interfaces";

//* PROPS *//
interface Props {
  name: string;
  photo: IPhoto;
  username: string;
}

const PhotoPage: NextPage<Props> = ({ name, photo, username }) => {
  return (
    <LayoutWithoutNavbar
      title={photo.description ? photo.description : `HD photo by ${name}`}
      description={`Descarga esta foto de ${name} en Visualizer`}
      image={photo.urls.regular}
    >
      <PhotoCard {...photo} />
      <UserMorePhotosFeed username={username} />
    </LayoutWithoutNavbar>
  );
};

//* STATIC SIDE GENERATION *//
//* STATIC SIDE GENERATION *//
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const photo = await getPhotoService(id);
  if (!photo)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      name: photo.user.name,
      photo,
      username: photo.user.username,
    },
  };
};

export default PhotoPage;
