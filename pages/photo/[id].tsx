import { GetStaticProps, GetStaticPaths, NextPage } from "next";

//* components *//
import { PhotoCard, UserMorePhotosFeed } from "../../components/photo";

//* utils *//
import { getPhoto } from "../../utils";

//* layout *//
import { PrincipalLayout } from "../../components/layouts";

//* intefaces *//
import { IPhoto } from "../../interfaces/photos";

interface Props {
  name: string;
  photo: IPhoto;
  username: string;
}

const PhotoPage: NextPage<Props> = ({ name, photo, username }) => {
  return (
    <PrincipalLayout
      title={photo.description ? photo.description : `HD photo by ${name}`}
      description="Pagina de photo"
    >
      <PhotoCard {...photo} />
      <UserMorePhotosFeed username={username} />
    </PrincipalLayout>
  );
};

//* static side generation *//
//* static side generation *//
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const photo = await getPhoto(id);
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
