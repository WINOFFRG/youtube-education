import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
      <Html>
          <Head>
              <link rel="manifest" href="/manifest.json" />
              <link rel="shortcut icon" href="/favicon.ico" />
              <link
                  rel="apple-touch-icon"
                  href="/icons/manifest-icon-192.maskable.png"
              />
              <script type="text/javascript" src="/sw-registration.js" defer />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossorigin
              />
              <link
                  href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
                  rel="stylesheet"
              />
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  );
}