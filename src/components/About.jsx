import React from 'react';

function About() {
  return(
    <div id="about" className="generic-wrapper bg-white">
      <img className="perfil-img" src="./images/perfil.png" alt="Guilherme da Costa" />
      <div className="about-title">
        <img className="icon-medium" src="./icons/coffee.svg" alt="coffee icon" />
        <h3>Quem é guilherme</h3>
      </div>
      <p>
        Desenvolvedor web, apaixonado por arte e tecnologia. Constantemente buscando soluções criativas e novos desafios
        para aumentar suas habilidades de desenvolvedor. Acredita que foco, dedicação e disciplina sejam as suas maiores virtudes.
        Procura manter-se curioso e atento a novos assuntos e tecnologias.
      </p>
    </div>
  );
}

export default About;
