import { GetStaticProps, GetStaticPaths, NextPage } from "next";

//* components *//
import { PhotoCard, UserMorePhotosFeed } from "@/components/photo";

//* service *//
import { getPhotoService } from "@/services";

//* layout *//
import { SecondaryLayout } from "@/layouts";

//* intefaces *//
import { IPhoto } from "@/interfaces";

interface Props {
  name: string;
  photo: IPhoto;
  username: string;
}

const PhotoPage: NextPage<Props> = ({ name, photo, username }) => {
  return (
    <SecondaryLayout
      title={photo.description ? photo.description : `HD photo by ${name}`}
      description={`Descarga esta foto de ${name} en Visualizer`}
      image={photo.urls.regular}
    >
      <PhotoCard {...photo} />
      <UserMorePhotosFeed username={username} />
    </SecondaryLayout>
  );
};

//* static side generation *//
//* static side generation *//
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
