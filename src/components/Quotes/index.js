import React from 'react';
import Quote from './Quote';

// import logo
import './styles.scss';

const Quotes = ({ quotes, onClickFetch }) => {

  const handleOnClick = (event) => {
    console.log('handleOnClick', event);
    onClickFetch(); // on click, trigger the onClickFetch function
  }

  return (
    <section className="quotes">
      { quotes.map((quote) => ( // looping with the infos
        <Quote key={quote.id} {...quote} />
      ))}

      <div className="quotes__divButton">
        <button className="quotes__divButton__button" onClick={handleOnClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="quotes__divButton__button__svg icon icon-tabler icon-tabler-refresh" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0a483b" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
          </svg>Generate a new quote
        </button>
      </div>
    </section>
  )
};

export default Quotes;
