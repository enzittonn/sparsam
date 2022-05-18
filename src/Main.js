import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/SecondPage" element={<SecondPage />} > </Route>
            <Route path="/" element={<FirstPage />} > </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Main;

