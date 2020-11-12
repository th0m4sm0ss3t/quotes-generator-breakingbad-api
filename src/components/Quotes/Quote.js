import React from 'react';

const Quote = ({ author, quote }) => (
  <div className="quotes__div">
    <p className="quotes__div__text">"{quote}"</p>
    <p className="quotes__div__author">-{author}</p>
  </div>
);

export default Quote;
