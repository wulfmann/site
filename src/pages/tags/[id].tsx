import Head from 'next/head';
import Layout from '../../components/layouts/default';

function Tag({ tag }) {
  return (
    <>
      <Head>
        <title>Joe Snell - {tag} Posts</title>
      </Head>
      
      <div>
        {tag} posts
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      tag: params.id
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: 'test' }
      }
    ],
    fallback: false
  };
}

export default Tag;
