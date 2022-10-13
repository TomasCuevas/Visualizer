//* components *//
import { Loader } from "../ui";
import { FeedColumn } from ".";

//* hooks *//
import { useFetchPhotos } from "../../hooks";

export const MainFeed: React.FC = () => {
  const { photos, isLoading, getNextPage } = useFetchPhotos();

  return (
    <>
      <section className="relative mx-auto mb-10 grid w-full max-w-[900px] grid-cols-1 gap-3 px-[5%] py-6 sm:grid-cols-2 lg:max-w-[1500px] lg:grid-cols-3">
        {photos.map((column, index) => (
          <FeedColumn key={index} photos={column} getNextPage={getNextPage} />
        ))}
        <Loader loading={isLoading} />
      </section>
    </>
  );
};
