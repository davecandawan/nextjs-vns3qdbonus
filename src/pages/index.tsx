import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Content = dynamic(() => import('@/components/Content/Content'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Top Concealed Carry Holster - FREE Gun Safe</title>
        <meta
          name="description"
          content="Discover premium holsters for your firearms. Comfortable, secure, and reliable for everyday carry."
        />
        <meta property="og:title" content="Top Concealed Carry Holster - FREE Gun Safe" />
        <meta
          property="og:description"
          content="Discover premium holsters for your firearms. Comfortable, secure, and reliable for everyday carry."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="page-container">
        <Content />
      </div>
    </>
  );
};

export default Home;
