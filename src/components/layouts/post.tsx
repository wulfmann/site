import Head from 'next/head';
import Link from 'next/link';
import Header from '../Header';
import Footer from '../Footer';
import TwitterCard from '../seo/TwitterCard';

function Post(frontMatter) {
  return ({ children }) => (
    <div className="default-layout">
      <Head>
        <title>Joe Snell - {frontMatter.title}</title>
        <meta name="description" content="Joe Snell - {frontMatter.description}" />
        {%<meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />%}
      </Head>
      
      <TwitterCard
        title={frontMatter.title}
        description={frontMatter.description}
        image=''
      />

      <Header />
      
      <main className="post">
        <h1>{frontMatter.title}</h1>

        <div className="tags">
          {frontMatter.tags.map((tag, idx) => (
            <Link href={`/tags/${tag}`}>
              <a key={idx} className="tag">{tag}</a>
            </Link>
          ))}
        </div>

        <article>{children}</article>
      </main>
      
      <Footer />
    </div>
  );
}

export default Post;