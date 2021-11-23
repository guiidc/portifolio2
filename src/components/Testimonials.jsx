import React, { useState } from 'react';
import data from '../data/testimonials.json';

function Testimonials() {
  const [counter, setCounter ] = useState(0);

  const nextQuote = () => {
    counter === data.length - 1 ? setCounter(0) : setCounter(counter + 1);
  };

  const previousQuote = () => {
    counter ? setCounter(counter - 1) : setCounter(data.length - 1);
  }
  return (
    <div id="testimonials" className="generic-wrapper bg-white">
      <h3>O que estão dizendo...</h3>
      <div className="testimonial-img">
        <img className="quoter-img" src={data[counter].image} alt="quoter" />
        <img className="quote-icon" src="../icons/quote.svg" alt="testimonial" />
      </div>
        <p>{ data[counter].content }</p>
        <h4 className="quoter-name">{ `- ${ data[counter].name }` }</h4>
        <div className="testimonials-control">
          <img onClick={ previousQuote } src="./icons/left-arrow.svg" alt="left arrow" />
          <span id="quote-counter">{`${counter + 1}/${data.length}`}</span>
          <img onClick={ nextQuote } src="./icons/right-arrow.svg" alt="right arrow" />
        </div>
    </div>
  );
}

export default Testimonials;
