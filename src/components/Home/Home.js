import Card from "../UI/Card";
import styles from "./Home.module.css";

const Home = (props) => {
    return(
        <Card>
            <h3 className={styles['heading']}>Welcome User</h3>
        </Card>
    );
}

export default Home;