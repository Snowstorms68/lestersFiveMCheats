import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <meta
            name="CustomerName"
            content="CustomerName NextJS Web-Applikation"
          />
          <meta name="google-site-verification" content="XXXXXXXXXXXXX" />
          <meta name="facebook-domain-verification" content="XXXXXXXXXXX" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="icon" href="/favicon.ico" />
          {/* LOAD GOOGLE FONT */}
          <link rel="stylesheet" href="https://use.typekit.net/exx8oag.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
