import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          <link rel="icon" href="/favicon.ico" />
<link href="https://fonts.cdnfonts.com/css/euclid-circular-b" rel="stylesheet" />

          <meta
            name="description"
            content="Restore your old face photos and keep the memories alive."
          />
          <meta name="viewport" content="width=device-width, user-scalable=no"/>
          <meta property="og:site_name" content="restorePhotos.io" />
          <meta
            property="og:description"
            content="Restore your old face photos and keep the memories alive."
          />
          <meta property="og:title" content="Face Photo Restorer" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Face Photo Restorer" />
          <meta
            name="twitter:description"
            content="Restore your old photos and keep the memories alive."
          />
          <meta
            property="og:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
        </Head>
        <body className="font-euclid bg-black dark:bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
