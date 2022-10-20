import Head from "next/head";

//* components *//
import { Header } from "../ui";

interface Props {
  children: React.ReactNode;
  description: string;
  title: string;
}

export const SecondaryLayout: React.FC<Props> = ({
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

      <main className="w-full">{children}</main>
    </>
  );
};
