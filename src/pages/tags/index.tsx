import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layouts/default';

function Tags({ children }) {
  const tag = 'test';

  return (
    <Layout>
      <Head>
        <title>Joe Snell - Tags</title>
        <meta name="description" content="Joe Snell - Tags" />
      </Head>
      
      <div>
        <Link href={`/tags/${tag}`}>
          <a>{tag}</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Tags;