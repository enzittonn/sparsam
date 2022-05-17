import { Button } from "react-native";
import SecondPage from "./SecondPage";
import { NavLink, Link, BrowserRouter, Route, Router } from "react-router-dom";

class FirstPage extends React.Component {
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

export default FirstPage;
