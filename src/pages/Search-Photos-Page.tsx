import { useParams } from "react-router-dom";

//* components *//
import { Header, FeedSearch } from "../components";

export const SearchPhotosPage = () => {
  const { search } = useParams();

  return (
    <>
      <Header />
      <FeedSearch search={search!} />
    </>
  );
};
