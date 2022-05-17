import React from "react";
import SecondPage from "./SecondPage";
import { NavLink, Link, BrowserRouter, Route, Router } from "react-router-dom";
import './FirstPage.css';

class FirstPage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/SecondPage">
          <button className='button-video' onClick={() => <SecondPage />}>Börja ditt sparande här med 3 enkla steg!</button>
        </Link>
      </div>
    );
  }
}

export default FirstPage;
