//* components *//
import { FeedPhotoCard } from "./";

//* hooks *//
import { useFetchPhotos } from "../hooks";

export const FeedPhotos = () => {
  const { photos, isLoading, fetchNextPage } = useFetchPhotos();

  return (
    <main className="min-h-[calc(100vh_-_80px)] w-screen">
      <section className="mt-5 flex flex-col gap-10 px-[5%]">
        {!isLoading &&
          photos.map((photo) => <FeedPhotoCard key={photo.id} {...photo} />)}
        <button onClick={() => fetchNextPage()}>More photos</button>
      </section>
    </main>
  );
};
