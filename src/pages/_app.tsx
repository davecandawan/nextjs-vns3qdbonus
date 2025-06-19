import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

// Dynamically import Navbar to avoid SSR issues with browser-specific code
const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Handle scroll restoration
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
