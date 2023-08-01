import React from 'react';
import clsx from 'clsx';
import Link from "@docusaurus/Link";
import styles from './projects.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const ProjectList = [
  {
    title: 'FAQ Server',
    description: <Translate>花Q-FAQ服务器的所有指令/常见问题都在这里！</Translate>,
	repo: "LeavesMC/Leaves",
	link: "/leaves",
  },
];

function Projects({title, description, repo, link}) {
  return (
    <div className={styles.project}>
      <div className={styles.flex}>
        <Link className={styles.projectGitHub} to={`https://github.com/${repo}`}>
          {title}
        </Link>
        <p>{description}</p>
      </div>
      <div>
        <Link className="button button--primary" to={link}>
          Go
        </Link>
      </div>
    </div>
  );
}

export default function IndexProjects() {
  return (
    <section className={styles.projects}>
      <div className={styles.projectsContainer}>
        {ProjectList.map((project, index) => (
          <Projects key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
