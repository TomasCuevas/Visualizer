import { NextPage } from "next";
import { useRouter } from "next/router";

//* layout *//
import { SecondaryLayout } from "../../components/layouts";

//* components *//
import { SearchFeed } from "../../components/search";

const SearchPhotosPage: NextPage = () => {
  const router = useRouter();
  const { search } = router.query as { search: string };

  return (
    <SecondaryLayout
      title={`${search} - Visualizer`}
      description="Pagina de busqueda - Visualizer"
    >
      <SearchFeed search={search} />
    </SecondaryLayout>
  );
};

export default SearchPhotosPage;
