import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav style={{ marginRight: "1rem" }}>
      {props.onLogin && (
        <ul className={styles["nav-list"]}>
          <li className={`${styles["nav-item"]} ${styles["nav-item-1"]}`}>
            About
          </li>
          <li className={`${styles["nav-item"]} ${styles["nav-item-2"]}`}>
            Contact
          </li>
          <li className={`${styles["nav-item"]} ${styles["logout-btn"]}`} onClick={props.onLogout}>
            Logout
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
