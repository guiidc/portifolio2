import React from 'react';

function Header () {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo">
          <h1>Guilherme da Costa</h1>
          <span>Desenvolvedor web full-stack</span>
          <div className="fill"></div>
        </div>
        <nav>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#testmonials">Comentários</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </div>
  )
}
export default Header;
