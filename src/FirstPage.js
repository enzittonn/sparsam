import React from "react";
import SecondPage from "./SecondPage";
import { NavLink, Link, BrowserRouter, Route, Router } from "react-router-dom";

class FirstPage extends React.Component {
  render() {
    return (
      <div>
        hejhejejhjsdlaksdkklöklö
        <Link to="/SecondPage">
          <button onClick={() => <SecondPage />}>hejhejhejhjhjksad</button>
        </Link>
      </div>
    );
  }
}

export default FirstPage;
