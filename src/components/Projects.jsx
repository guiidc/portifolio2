import React, { useState, useEffect } from 'react';
import axios from 'axios';
import projects from '../data/projects.json';

function Projects() {
  const [ repos, setRepos ] = useState([]);

  const getRepos = async () => {
    const { data } = await axios.get('https://api.github.com/users/guiidc/repos');
    return data.filter((actualRepo) => actualRepo.stargazers_count > 0);
  }

  useEffect(() => {
    getRepos().then(data => setRepos(data));
  }, []);

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
        { repos.map((repo) => (
          <div key={ repo.id } className="card">
            <h3>{ repo.name }</h3>
            <hr />
            <p>{ repo.description }</p>
            <div>
              <button className="card-button">
                <a href={ repo.html_url } > Repositório </a>
              </button>
              { repo.homepage
                ? <button className="card-button">
                  <a href={ repo.homepage }>Site</a>
                </button>
                : null }
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