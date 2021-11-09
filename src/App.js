import { useState } from "react/cjs/react.development";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const loginHandler = (obj) => {
    //check data from backend
    const { id, email, pass } = obj;

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </div>
  );
}

export default App;
