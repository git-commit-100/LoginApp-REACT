import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  /* using useEffect to triggrt the function only at the initial stage
  and would run again when array of dependencies would change */
  useEffect(() => {
    let getKeyFromLS = localStorage.getItem("isLoggedIn");
    if (getKeyFromLS === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (obj) => {
    //check data from backend
    const { id, email, pass } = obj;
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </>
  );
}

export default App;
