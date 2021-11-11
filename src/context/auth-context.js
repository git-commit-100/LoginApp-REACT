import React, { useState, useEffect } from "react";

/* REACT CONTEXT API : 
1. CREATING CONEXT: created by a returned value from React.createContext(default value)
2. PROVIDING CONTEXT: <Context.Provider> can be used to provide the context to its wrapping children
3. CONSUMING CONTEXT: by using value returned from useContext() hook , one can directly access
    context values without forming long chains of props
*/

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (dataObj) => {},
});

export function AuthContextProvider(props) {
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
    console.log(id, email, pass);
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
