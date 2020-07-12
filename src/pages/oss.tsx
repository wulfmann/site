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
        <a href={href}>View</a>
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
    },
    {
      title: 'am-i-alone',
      description: '',
      href: 'https://github.com/wulfmann/am-i-alone'
    },
    {
      title: 'create-cdk-app',
      description: '',
      href: 'https://github.com/cdk-tools/create-cdk-app'
    },
    {
      title: 'ircra',
      description: '',
      href: 'https://github.com/wulfmann/ircra'
    },
    {
      title: 'cdk-experiments',
      description: '',
      href: 'https://github.com/wulfmann/cdk-experiments'
    },
    {
      title: 'pin-latest',
      description: '',
      href: 'https://github.com/wulfmann/pin-latest'
    },
    {
      title: 'use-okta',
      description: '',
      href: 'https://github.com/wulfmann/use-okta'
    },
    {
      title: 'jtx',
      description: '',
      href: 'https://github.com/wulfmann/jtx'
    }
  ].sort((a, b) => a.name > b.name);

  return (
    <>
      <Head>
        <title>Joe Snell</title>
        <meta name="description" content="Joe Snell - Designer/Developer" />
      </Head>

      <Layout>
        <h1>Open Source Software</h1>
        
        <div className="projects">
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