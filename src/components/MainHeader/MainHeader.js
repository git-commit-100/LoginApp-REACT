import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <div className={styles["main-nav"]}>
      <h3 className={styles["brand-name"]}>Login App</h3>
      <Navigation />
    </div>
  );
};

export default MainHeader;
