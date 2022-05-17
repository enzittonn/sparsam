import React from "react";
import './Main.css';
import logo from './IconFolksam.svg';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className="Folksam-logo" alt="logo" />
        Folskam
    </div>
  );
};

export default Header;