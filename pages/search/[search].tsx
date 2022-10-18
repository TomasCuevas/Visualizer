import { NextPage, GetStaticProps, GetStaticPaths } from "next";

//* layout *//
import { PrincipalLayout } from "../../components/layouts";

//* components *//
import { SearchFeed } from "../../components/search";

//* interface *//
interface Props {
  search: string;
}

const SearchPhotosPage: NextPage<Props> = ({ search }) => {
  return (
    <PrincipalLayout
      title={`${search} - Visualizer`}
      description="Pagina de busqueda - Visualizer"
    >
      <SearchFeed search={search} />
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
  const { search } = params as { search: string };

  return {
    props: {
      search,
    },
  };
};

export default SearchPhotosPage;
