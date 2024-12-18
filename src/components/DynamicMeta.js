import { useRouter } from 'next/router';
import Head from 'next/head';
import metaConfig from '@/utils/metaConfig';
import Script from 'next/script';

const DynamicMeta = () => {
  const router = useRouter();
  const currentMeta = metaConfig[router.pathname] || metaConfig.default;
  const isRootPath = router.pathname === '/';

  return (
    <Head>
      {/* PRIMARY META */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="icon" type="image/png" href="https://i.imgur.com/77Gyxcp.png" />

      <title>{currentMeta.title}</title>
      <meta name="title" content={currentMeta.title} />
      <meta name="description" content={currentMeta.description} />

      {/*  Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:image" content={currentMeta.image} />

      <meta name="apple-itunes-app" content="app-id=6648797230"></meta>

      {/*  Twitter */}
      {isRootPath ? (
        // show "download app link"
        <>
          <meta name="twitter:card" content="app" />
          <meta name="twitter:app:name:iphone" content="Naši Oglasi" />
          <meta name="twitter:app:id:iphone" content="6648797230" />
          <meta name="twitter:app:name:googleplay" content="Naši Oglasi" />
          <meta name="twitter:app:id:com.begovsky.nasioglasi" />
          {/* add root canonical */}
          <link rel="canonical" href="https://nasioglasi.com" />
        </>
      ) : (
        <>
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={currentMeta.title} />
          <meta property="twitter:description" content={currentMeta.description} />
          <meta property="twitter:image" content={currentMeta.image} />
        </>
      )}

      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-G9GE45064Q"></Script>
      <Script id="google-analytics">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-G9GE45064Q');
          `}
      </Script> */}

    </Head>
  );
};

export default DynamicMeta;
