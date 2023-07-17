import Head from "next/head";

//* COMPONENTS *//
import { Header, Navbar } from "@/components";

//* INTERFACE *//
interface Props {
  children: React.ReactNode;
  description: string;
  image?: string;
  title: string;
}

export const MainLayout: React.FC<Props> = ({
  children,
  description,
  image,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content="https://visualizer-azure.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={
            image
              ? image
              : "https://user-images.githubusercontent.com/79057608/216833842-78cbc934-8ee7-4b7c-b03e-c4f32e56eceb.png"
          }
        />
        <meta
          property="og:image:secure_url"
          content={
            image
              ? image
              : "https://user-images.githubusercontent.com/79057608/216833842-78cbc934-8ee7-4b7c-b03e-c4f32e56eceb.png"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="visualizer-azure.vercel.app" />
        <meta
          property="twitter:url"
          content="https://visualizer-azure.vercel.app/"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={
            image
              ? image
              : "https://user-images.githubusercontent.com/79057608/216833842-78cbc934-8ee7-4b7c-b03e-c4f32e56eceb.png"
          }
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" type="image/x-icon" href="/visualizer.svg" />
      </Head>

      <Header />
      <Navbar />

      <main className="w-full bg-white">{children}</main>
    </>
  );
};
