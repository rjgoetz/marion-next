import Head from 'next/head';
import Script from 'next/script';
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-PG0NQC3BBN"></Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PG0NQC3BBN');`}
      </Script>
    </div>
  );
}

export default MyApp;
