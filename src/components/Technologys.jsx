import React from 'react';

function Techonologys() {
  return (
    <div className="generic-wrapper bg-green">
      <div className="tech-title">
        <h3>Algumas Tecnologias</h3>
        <img className="icon-medium" src="./icons/tech.svg" alt="technologys" />
      </div>
      <div className="tech-grid">
        <div className="tech">
          <img className="icon-large" src="./icons/pencil.svg" alt="tech" />
          <h4>Front-end</h4>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="tech">
          <img className="icon-large" src="./icons/window.svg" alt="tech" />
          <h4>Back-end</h4>
          <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Docker</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="tech">
          <img className="icon-large" src="./icons/test.svg" alt="tech" />
          <h4>Testes</h4>
          <ul>
            <li>Jest</li>
            <li>RTL</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Sinon</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Techonologys;
