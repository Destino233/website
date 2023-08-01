import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import IndexProjects from '@site/src/components/Projects';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{translate({message: "FAQServer 文档", description: "Home page title"})}</h1>
        <p className="hero__subtitle">{translate({message: "Documentation of all commands for the FAQ server", description: "Home page subtitle"})}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title={translate({message: "Home", description: "Home page head tag"})}>
      <HomepageHeader />
      <main>
        <IndexProjects />
      </main>
    </Layout>
  );
}
