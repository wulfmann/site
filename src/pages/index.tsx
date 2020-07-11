import Head from 'next/head';
import Layout from '../components/layouts/default';

function Home() {
  return (
    <>
      <Head>
        <title>Joe Snell</title>
        <meta name="description" content="Joe Snell -Designer/Developer" />
      </Head>

      <Layout>
        <ul>
          <li><a href="https://github.com/wulfmann">Github</a></li>
          <li><a href="https://twitter.com/wlfmnn">Twitter</a></li>
          
          <div className="button">
            <a href="mailto:joe@snell.im">Message Me</a>
          </div>
        </ul>
      </Layout>
    </>
  );
}

export default Home;