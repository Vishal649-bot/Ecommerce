import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  emailid: "",
  setEmail: (email) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token') || "";
  const [token, setToken] = useState(initialToken);
  const [emailid, setEmailId] = useState('');

  const userIsLoggedIn = !!token;

  const setEmail = (email) => {
    setEmailId(email);
    localStorage.setItem('email', email);
  }

  const loginHandler = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const logoutHandler = () => {
    setToken("");
    setEmailId("");
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    emailid: emailid,
    setEmail: setEmail,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
