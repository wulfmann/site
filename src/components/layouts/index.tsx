import Head from 'next/head';
import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';
import TwitterCard from '../seo/TwitterCard';

function Index(frontMatter) {
  return ({ children }) => (
    <div className="default-layout">
      <Head>
        <title>Joe Snell - {frontMatter.title}</title>
        <meta name="description" content="Joe Snell - {frontMatter.description}" />
      </Head>
      
      <TwitterCard
        title={frontMatter.title}
        description={frontMatter.description}
        image=''
      />

      <Header />
      
      <main className="post">
        <h1>{frontMatter.title}</h1>

        {children}
      </main>
      
      <Footer />
    </div>
  );
}

export default Index;