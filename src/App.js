import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Logging/Login";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLogged] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("isLoggedIn");
    if(storage === "1") {
      setIsLogged(true);
    }
  }, []);

  const loggedHandler = (data) => {
    setIsLogged(data);
  };

  const logging = () => {
    localStorage.setItem("isLoggedIn", "1")
  };

  const LogOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogged(false);
  };

  return (
    <Fragment>
      <div className="App">
        <NavBar />
        {!isLoggedIn && <Login storing={loggedHandler} onLogin={logging} />}
        {isLoggedIn && <Home onLogout={LogOut} />}
      </div>
    </Fragment>
  );
}

export default App;
