import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

function Post(frontMatter) {
  return ({ children }) => (
    <div className="default-layout">
      <Head>
        <title>Joe Snell - {frontMatter.title}</title>
        <meta name="description" content="Joe Snell - {frontMatter.description}" />
      </Head>
      <Header />
      
      <main>{children}</main>
      
      <Footer />
    </div>
  );
}

export default Post;