import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          {/* ここに空のscriptタグを入れる */}
          <script> </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
