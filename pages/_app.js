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
      {/* Begin Constant Contact Active Forms */}
      <Script>{` var _ctct_m = "f79fde54d446da199e6fde480bbce4fd";`} </Script>
      <Script
        id="signupScript"
        src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
        async
        defer
      ></Script>
      {/* End Constant Contact Active Forms */}
    </div>
  );
}

export default MyApp;
