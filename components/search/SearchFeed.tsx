/* eslint-disable react-hooks/exhaustive-deps */
//* hooks *//
import { useFetchSearchPhotos } from "../../hooks";

//* components *//
import { FeedColumn } from "../feed";
import { Loader } from "../ui";

//* interface *//
interface Props {
  search: string;
}

export const SearchFeed: React.FC<Props> = ({ search }) => {
  const { photos, getNextPage, isLoading } = useFetchSearchPhotos(search);

  return (
    <>
      <section className="relative mx-auto grid w-full max-w-[820px] grid-cols-1 gap-3 px-[10px] py-6 sm:grid-cols-2 lg:max-w-[1300px] lg:grid-cols-3">
        {photos.map((column, index) => (
          <FeedColumn key={index} photos={column} getNextPage={getNextPage} />
        ))}
        <Loader loading={isLoading} />
      </section>
    </>
  );
};
