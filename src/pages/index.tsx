import Layout from '../components/layouts/default';

function Home() {
  return (
    <>
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