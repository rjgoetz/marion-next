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

      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MW932W8N19"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MW932W8N19');`}
      </Script>

      {/* Begin Constant Contact Active Forms */}
      <Script>{` var _ctct_m = "f79fde54d446da199e6fde480bbce4fd";`} </Script>
      <Script
        id="signupScript"
        src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
        startegy="afterInteractive"
        onLoad={() =>
          console.log(`script loaded correctly, signup form has been populated`)
        }
      ></Script>
      {/* End Constant Contact Active Forms */}
    </div>
  );
}

export default MyApp;
