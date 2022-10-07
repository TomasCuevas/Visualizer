import type { NextPage } from "next";

//* components *//
import { MainFeed } from "../components/feed";

//* layout *//
import { PrincipalLayout } from "../components/layouts";

const Home: NextPage = () => {
  return (
    <PrincipalLayout
      title="Home - Visualizer"
      description="Pagina principal de visualizer"
    >
      <MainFeed />
    </PrincipalLayout>
  );
};

export default Home;
