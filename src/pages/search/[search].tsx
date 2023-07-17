import { NextPage } from "next";
import { useRouter } from "next/router";

//* COMPONENTS *//
import { SearchFeed } from "@/components";

//* LAYOUT *//
import { LayoutWithoutNavbar } from "@/layouts";

const SearchPhotosPage: NextPage = () => {
  const router = useRouter();
  const { search } = router.query as { search: string };

  return (
    <LayoutWithoutNavbar
      title={`${search} - Visualizer`}
      description={`Descarga las imágenes perfectas de ${search}. Encuentra más de 100 de las mejores imágenes gratuitas de ${search}. Gratis para uso comercial ✓ No se requiere atribución ✓ Sin derechos de autor ✓`}
    >
      <SearchFeed search={search} />
    </LayoutWithoutNavbar>
  );
};

export default SearchPhotosPage;
