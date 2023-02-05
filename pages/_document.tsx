import { Html, Main, NextScript, Head } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta
          name="og:image"
          content="https://user-images.githubusercontent.com/79057608/216825693-6dd15887-a4d2-4388-8dc9-27b9a7591881.png"
        />
        <meta name="og:title" content="Visualizer" />
        <meta name="og:image:width" content="1920" />
        <meta name="og:image:height" content="1080" />
        <link rel="icon" type="image/x-icon" href="/visualizer.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
