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
      description: 'Effortless APIs with CDK',
      href: 'https://github.com/wulfmann/auto-cdk'
    },
    {
      title: 'am-i-alone',
      description: '',
      href: 'https://github.com/wulfmann/am-i-alone'
    },
    {
      title: 'create-cdk-app',
      description: 'Create CDK Apps from Templates',
      href: 'https://github.com/cdk-tools/create-cdk-app'
    },
    {
      title: 'ircra',
      description: 'IRCRA Climbing Route Grade Conversion Tool',
      href: 'https://github.com/wulfmann/ircra'
    },
    {
      title: 'cdk-experiments',
      description: 'Experimental CDK Patterns',
      href: 'https://github.com/wulfmann/cdk-experiments'
    },
    {
      title: 'pin-latest',
      description: 'Easily resolve "latest" versions',
      href: 'https://github.com/wulfmann/pin-latest'
    },
    {
      title: 'use-okta',
      description: 'React Hooks for OKTA',
      href: 'https://github.com/wulfmann/use-okta'
    },
    {
      title: 'jtx',
      description: 'Tiny JSON to XML Utility',
      href: 'https://github.com/wulfmann/jtx'
    },
    {
      title: 'env-resolver',
      description: 'Utility for resolving SSM Parameters and Secretsmanager Secrets',
      href: 'https://github.com/wulfmann/env-resolver'
    }
  ].sort((a, b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0);

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