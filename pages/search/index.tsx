import { NextPage } from "next";
import { useRouter } from "next/router";

//* layout *//
import { PrincipalLayout } from "../../components/layouts";

//* components *//
import { SearchFeed } from "../../components/search";

const SearchPhotosPage: NextPage = () => {
  const { query } = useRouter();
  const { search } = query as { search: string };

  return (
    <PrincipalLayout
      title={`${search} - Visualizer`}
      description="Pagina de busqueda - Visualizer"
    >
      <SearchFeed search={search} />
    </PrincipalLayout>
  );
};

export default SearchPhotosPage;
