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
        <p>Designer & Developer</p>
      </Layout>
    </>
  );
}

export default Home;