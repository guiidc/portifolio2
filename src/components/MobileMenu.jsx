import React, { useState} from 'react';

function MobileMenu() {
  const [status, setStatus ] = useState(false)

  const handleStatus = () => {
    status ? setStatus(false) : setStatus(true);
  };

  return (
    <div className="mobile-header-wrapper">
      <div className="mobile-menu">
        <h1>Guilherme C.</h1>
        <button onClick={ handleStatus } type="button">
          <img src={status ? './icons/circle.svg' : './icons/hamburger.svg'} alt="open menu" />
        </button>
      </div>
        <nav id="mobile-nav" className={status ? `visible` : `hidden`}>
          <a href="#about" onClick={() => setStatus(false)}>Sobre</a>
          <a href="#projects" onClick={() => setStatus(false)}>Projetos</a>
          <a href="#testimonials" onClick={() => setStatus(false)}>Comentários</a>
          <a href="#technologies" onClick={() => setStatus(false)}>Tecnologias</a>
          <a href="#contact" onClick={() => setStatus(false)}>Contato</a>
        </nav>
    </div>
  )
}

export default MobileMenu;
