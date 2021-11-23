import React from 'react';

function Contact() {
  return (
    <div className="generic-wrapper bg-gray">
      <div className="contact-title">
        <h3>Contato</h3>
        <img className="icon-medium" src="./icons/message.svg" alt="message" />
      </div>
      <span>Curtiu? Mande uma msg para <span>batermos um papo</span></span>
      <div className="contact-form">
        <span>Nome</span>
        <input type="text" />
        <span>E-mail</span>
        <input type="text" />
        <span>Assunto</span>
        <textarea style={ { resize: "none" } }/>
        <button className="send-btn">Enviar</button>
      </div>
      <div className="hero-links">
        <a href="https://github.com/guiidc"><img src="./icons/github.svg" alt="github" /></a>
        <a href="https://www.linkedin.com/in/guiidc/"><img src="./icons/linkedin.svg" alt="linkedin" /></a>
        <a href="#"><img src="./icons/email.svg" alt="email" /></a>
        <a href="#"><img src="./icons/whatsapp.svg" alt="whatsapp" /></a>
      </div>
    </div>
  )
}

export default Contact;
