import Head from 'next/head';
import Link from 'next/link';
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
          
          <Link href="/posts">View More</Link>
        </div>
        
        <div>
          <h2>Featured Guides</h2>
          
          <Link href="/tags/guides">View All</Link>
        </div>
      </Layout>
    </>
  );
}

export default Blog;