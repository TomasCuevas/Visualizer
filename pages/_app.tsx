import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//* stlyes *//
import "../styles/globals.css";
import Head from "next/head";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Head>
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/79057608/216825693-6dd15887-a4d2-4388-8dc9-27b9a7591881.png"
        />
        <meta property="og:title" content="Visualizer" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <link rel="icon" type="image/x-icon" href="/visualizer.svg" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
