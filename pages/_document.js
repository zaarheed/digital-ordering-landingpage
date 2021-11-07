import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Digtal Ordering enables restaurants to engage directly with customers through a self-branded website and digital menu to take orders commission-free" />
          <link rel="icon" href="/favicon.ico" />

          <meta property="og:title" content="Take online orders with 0% commission fees" />
          <meta property="og:description" content="Digital Ordering allows restaurants to take online orders for free. Get started in 10 minutes." />
          <meta property="og:image" content="/images/og_card.jpg" />
          <meta property="og:url" content="https://www.github.com/zaarheed" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Digital Ordering" />
          <meta name="twitter:image:alt" content="Digital Ordering enables restaurants to take online orders with no commission fees" />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument