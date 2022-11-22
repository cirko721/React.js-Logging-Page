import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useContext } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Logging/Login";
import Home from "./components/Home/Home";
import AuthContext from "./components/Context/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <div className="App">
        <NavBar />
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </div>
    </Fragment>
  );
}

export default App;
