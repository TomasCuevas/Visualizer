import { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//* stlyes *//
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Head>
        <meta
          property="og:url"
          content="https://visualizer-azure.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Visualizer" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/79057608/216833842-78cbc934-8ee7-4b7c-b03e-c4f32e56eceb.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://user-images.githubusercontent.com/79057608/216833842-78cbc934-8ee7-4b7c-b03e-c4f32e56eceb.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="visualizer-azure.vercel.app" />
        <meta
          property="twitter:url"
          content="https://visualizer-azure.vercel.app/"
        />
        <meta name="twitter:title" content="Visualizer" />
        <meta
          name="twitter:description"
          content="Pagina principal de visualizer"
        />
        <meta
          name="twitter:image"
          content="https://user-images.githubusercontent.com/79057608/216833842-78cbc934-8ee7-4b7c-b03e-c4f32e56eceb.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" type="image/x-icon" href="/visualizer.svg" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
