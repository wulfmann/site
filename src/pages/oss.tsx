import Head from 'next/head';
import Layout from '../components/layouts/default';

function Project({ title, href, description }) {
  return (
    <div className="project">
      <div className="project_info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="project_actions">
        <a href={href}>View Project</a>
      </div>
    </div>
  );
}

function OSS() {
  const projects = [
    {
      title: 'auto-cdk',
      description: '',
      href: 'https://github.com/wulfmann/auto-cdk'
    }
  ];

  return (
    <>
      <Head>
        <title>Joe Snell</title>
        <meta name="description" content="Joe Snell - Designer/Developer" />
      </Head>

      <Layout>
        <h1>Open Source Software</h1>
        
        <div>
          {
            projects.map((project, idx) => (
              <Project
                {...project}
                key={idx}
              />
            ))
          }
        </div>
      </Layout>
    </>
  );
}

export default OSS;