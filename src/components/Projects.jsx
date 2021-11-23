import React from 'react';
import projects from '../data/projects.json';

function Projects() {
  return (
    <div id="projects" className="generic-wrapper bg-gray">
      <div className="projects-title">
        <img className="icon-medium" src="./icons/box.svg" alt="projects" />
        <h3>Projetos Recentes</h3>
      </div>
      <span>
        Quer conhecer um pouco mais?
        Acesse o <a href="https://github.com/guiidc">GitHub</a>.
      </span>
      <div className="cards">
        { projects.map((project) => (
          <div key={ project.id } className="card">
            <div className="card-footer">
              <span>{ project.title }</span>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/guiidc">
        <div className="github-button">
            <img src="./icons/github.svg" alt="github" />
            <span>Veja mais no GitHub</span>
        </div>
      </a>
    </div>
  );
}

export default Projects;