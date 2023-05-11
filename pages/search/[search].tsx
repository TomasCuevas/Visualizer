import { NextPage } from "next";
import { useRouter } from "next/router";

//* components *//
import { SearchFeed } from "@/components/search";

//* layout *//
import { SecondaryLayout } from "@/layouts";

const SearchPhotosPage: NextPage = () => {
  const router = useRouter();
  const { search } = router.query as { search: string };

  return (
    <SecondaryLayout
      title={`${search} - Visualizer`}
      description={`Descarga las imágenes perfectas de ${search}. Encuentra más de 100 de las mejores imágenes gratuitas de ${search}. Gratis para uso comercial ✓ No se requiere atribución ✓ Sin derechos de autor ✓`}
    >
      <SearchFeed search={search} />
    </SecondaryLayout>
  );
};

export default SearchPhotosPage;
