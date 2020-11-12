import React from 'react';

// import logo
import bbLogo from 'src/assets/img/bb.svg';
import './styles.scss';

const Header = () => (
  <header className="header">
    <img src={bbLogo} alt="breaking bad logo" className="header__logo" />
    <h1 className="header__title">Breaking Bad Quotes using API</h1>
  </header>
)

export default Header;
