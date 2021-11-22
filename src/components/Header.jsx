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
          <a href="#1">Sobre</a>
          <a href="#1">Projetos</a>
          <a href="#1">Tecnologias</a>
          <a href="#1">Comentários</a>
          <a href="#1">Contato</a>
        </nav>
      </div>
    </div>
  )
}
export default Header;
