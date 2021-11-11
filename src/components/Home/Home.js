import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Home.module.css";

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={styles["home"]}>
      <h3 className={styles["heading"]}>Welcome User</h3>
      <Button className={styles["home-logout"]} onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
