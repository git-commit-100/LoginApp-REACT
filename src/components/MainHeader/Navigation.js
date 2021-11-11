import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  return (
    <nav style={{ marginRight: "1rem" }}>
      {authCtx.isLoggedIn && (
        <ul className={styles["nav-list"]}>
          <li className={`${styles["nav-item"]} ${styles["nav-item-1"]}`}>
            Users
          </li>
          <li className={`${styles["nav-item"]} ${styles["nav-item-2"]}`}>
            Admin
          </li>
          <li
            className={`${styles["nav-item"]} ${styles["logout-btn"]}`}
            onClick={authCtx.onLogout}
          >
            Logout
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
