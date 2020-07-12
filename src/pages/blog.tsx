import Head from 'next/head';
import Layout from '../components/layouts/default';

function Blog() {
  return (
    <>
      <Head>
        <title>Joe Snell - Blog</title>
        <meta name="description" content="Joe Snell - Blog" />
      </Head>

      <Layout>
        <h1>Blog</h1>
        
        <div>
          <h2>Recent Posts</h2>
        </div>
      </Layout>
    </>
  );
}

export default Blog;