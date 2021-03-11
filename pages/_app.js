import Head from 'next/head';
import '../styles/globals.css';
import 'typeface-source-sans-pro';
import 'typeface-eb-garamond';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
