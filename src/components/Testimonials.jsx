import React from 'react';

function Testimonials() {
  return (
    <div className="generic-wrapper bg-white">
      <h3>O que estão dizendo...</h3>
      <div className="testimonial-img">
        <img className="quoter-img" src="../images/perfil.png" alt="quoter" />
        <img className="quote-icon" src="../icons/quote.svg" alt="testimonial" />
      </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolores obcaecati labore ullam, beatae fugit laudantium debitis optio! Vero, hic odit. Quaerat, fuga quasi? Cum quisquam doloremque dignissimos ea similique!</p>
        <h4 className="quoter-name">-Guilherme da Costa</h4>
        <div className="testimonials-control">
          <img src="./icons/left-arrow.svg" alt="left arrow" />
          <span id="quote-counter">1/4</span>
          <img src="./icons/right-arrow.svg" alt="right arrow" />
        </div>
    </div>
  );
}

export default Testimonials;
