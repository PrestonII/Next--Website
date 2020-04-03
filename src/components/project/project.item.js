import React from 'react';
import { Link } from 'react-router-dom';
import './project.item.desktop.scss';
import './project.item.mobile.scss';

import ProjectData from '../../data/data.project.json';

export function ProjectList(props) {
  const { projects } = ProjectData;
  const { history } = props;

  const pNames = Object.getOwnPropertyNames(projects);

  let i = 0;
  const projectList = pNames.map(project => {
    const info = projects[project];

    return <ProjectItem key={i++} {...info } history={ history } />
  })

  return (
    <div className="project__data__list">
      { projectList }
    </div>
  );
}

export function ProjectItem(props) {
  const path = props.history.location.pathname;
  const title = props.slug ? props.slug : "/";
  const projectName = title.toString().toLowerCase();
  const route = `${path}/${projectName}`;

  return (
      <div className={`project__item project__item__${props.slug}`}>
        <div className={`project__item__image project__item__image__${props.slug}`}/> 
        <div className="project__item__title">
          <Link to={route}>
            <div> { props.shortName } </div>
          </Link>
        </div>
        <div className="project__item__type"> { props.type } </div>
      </div>
  );
}