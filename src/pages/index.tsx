import type { NextPage } from "next";

//* COMPONENTS *//
import { MainFeed } from "@/components";

//* LAYOUT *//
import { MainLayout } from "@/layouts";

const Home: NextPage = () => {
  return (
    <MainLayout title="Visualizer" description="Pagina principal de visualizer">
      <MainFeed />
    </MainLayout>
  );
};

export default Home;
