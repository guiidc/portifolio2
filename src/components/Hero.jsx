import React from 'react';

function Hero() {
  return (
    <div className="hero-wrapper bg-green">
      <div className="hero">
        <div className="hero-text">
          <h2>Seja bem vindo(a)</h2>
          <span>É um prazer ver você por aqui, aproveite a viagem!</span>
          <div className="hero-links">
            <a href="https://github.com/guiidc"><img src="./icons/github.svg" alt="github" /></a>
            <a href="https://www.linkedin.com/in/guiidc/"><img src="./icons/linkedin.svg" alt="linkedin" /></a>
            <a href="#"><img src="./icons/email.svg" alt="email" /></a>
            <a href="https://api.whatsapp.com/send?phone=5547991447243"><img src="./icons/whatsapp.svg" alt="whatsapp" /></a>
          </div>
        </div>
        <img className="rocket" src="./images/rocket.svg" alt="rocket" />
      </div>
    </div>
  )
}

export default Hero;
