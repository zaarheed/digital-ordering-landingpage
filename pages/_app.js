import Head from 'next/head';
import '../styles/globals.css'
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Digital Ordering - Take online orders</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
