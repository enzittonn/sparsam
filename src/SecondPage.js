import React from "react";
import { NavLink, Link, BrowserRouter, Route, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import video from './B-at-work.jpg';
import './SecondPage.css';


class SecondPage extends React.Component {
  render() {
    return (
      <div>
        kom till second page
        <img className="video" src={video} />
      </div>
    );
  }
}

export default SecondPage;