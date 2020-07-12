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
        <h2>Designer & Developer building apps and tools <a href="https://daveramsey.com">@RamseySolutions</a> by day, and <a href="https://nativekit.app">@NativeKit</a> by night.</h2>
      </Layout>
    </>
  );
}

export default Home;