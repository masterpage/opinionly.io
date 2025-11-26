import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru-RU">
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <link href="https://use.typekit.net/bpk0psz.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta name="yandex-verification" content="02eb1a7b7bd37e12" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
