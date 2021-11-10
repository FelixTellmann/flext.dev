// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Font } from "_client/head/font";
import { Favicon } from "_client/head/favicon";

class Root extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          <Font />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Root;
