import Head from "next/head";

//* components *//
import { Header, Navbar } from "../ui";

interface Props {
  children: React.ReactNode;
  description: string;
  title: string;
}

export const PrincipalLayout: React.FC<Props> = ({
  children,
  description,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/x-icon" href="/visualizer.svg"></link>
      </Head>

      <Header />
      <Navbar />

      <main className="w-full bg-white">{children}</main>
    </>
  );
};
