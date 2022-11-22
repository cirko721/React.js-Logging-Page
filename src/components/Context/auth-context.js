import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogIn: (email, password) => {},
  onLogOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLogged] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("isLoggedIn");
    if (storage === "1") {
      setIsLogged(true);
    }
  }, []);

  const loggedHandler = (data) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLogged(data);
  };

  const LogOut = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: loggedHandler,
        onLogOut: LogOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
