import Head from 'next/head';

function TwitterCard({ title, description, image, username='@wlfmnn', type='summary_large_image' }) {
  return (
    <Head>
      <meta name="twitter:card" content="{type}" />
      <meta name="twitter:site" content="{username}" />
      <meta name="twitter:title" content="{title}" />
      <meta name="twitter:description" content="{description}" />
      <meta name="twitter:image" content="{image}" />
    </Head>
  );
}

export default TwitterCard;