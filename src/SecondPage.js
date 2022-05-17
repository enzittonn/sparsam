import React from "react";
import { Button } from "react-native";
import { NavLink, Link, BrowserRouter, Route, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

class SecondPage extends React.Component {
  render() {
    return (
      <div>
        hejhejejhjsdlaksdkklöklö
        <Link to="/SecondPage">
          <button onClick={() => <SecondPage />}>Route Name</button>
        </Link>
      </div>
    );
  }
}

export default SecondPage;