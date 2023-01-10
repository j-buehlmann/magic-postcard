import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Send magic AI postcards 🧙‍♂️"
        />
        <meta
          property="og:image"
          content="https://dalle-2.vercel.app/ogimage.png"
        />
        <meta
          name="twitter:image"
          content="https://dalle-2.vercel.app/ogimage.png"
        />
        <meta
          property="og:description"
          content="Send magic AI postcards 🧙‍♂️"
        />
        <meta
          name="twitter:description"
          content="Send magic AI postcards 🧙‍♂️"
        />
        <meta property="og:site_name" content="Magic Postcard Generator" />
        <meta name="keywords" content="Postcards, Magic, AI, text2image, Generator, dall-e, openai" />
        <meta property="og:title" content="Magic Postcard Generator" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Magic Postcard Generator" />
      </Head>
      <body className="bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
