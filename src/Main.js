import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div className="layout-container" id="layout-container">
          <Routes>
            <Route path="/SecondPage" component={() => <SecondPage />} />
            <Route path="/" component={() => <FirstPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Main;

