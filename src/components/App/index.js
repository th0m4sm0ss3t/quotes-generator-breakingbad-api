// == Import npm
import React, { useState } from 'react';
import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import Quotes from 'src/components/Quotes';
import Footer from 'src/components/Footer';

import './styles.scss';

// == Composant
const App = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuoteFromAPI = () => {
    console.log('charger les quotes de l\'API');
    axios.get(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`)
      .then((response) => { // get the response from the API
        console.log(response.data);
        setQuotes(response.data); // give the response to the state
      });
  }

  return (

    <div className="app">
      <Header />
      <Quotes 
        quotes={quotes} 
        onClickFetch={fetchQuoteFromAPI}
      />
      <Footer />
    </div>
  )
};
// == Export
export default App;
