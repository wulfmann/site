import Head from 'next/head';
import Layout from '../components/layouts/default';

function Home() {
  return (
    <>
      <Head>
        <title>Joe Snell</title>
        <meta name="description" content="Joe Snell - Designer/Developer" />
      </Head>

      <Layout>
        <h2>Designer & Developer building apps and tools <a href="https://daveramsey.com">@RamseySolutions</a> during the day, and <a href="https://nativekit.app">@NativeKit</a>at night.</h2>
      </Layout>
    </>
  );
}

export default Home;