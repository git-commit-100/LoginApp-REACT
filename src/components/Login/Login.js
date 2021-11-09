import styles from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") &&
        event.target.value.includes(".") &&
        enteredPassword.trim().length > 7
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 7 &&
        enteredEmail.includes("@") &&
        enteredEmail.includes(".")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@") && enteredEmail.includes("."));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 7);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let objUserInfo = {
      id: new Date().getTime().toString(),
      email: enteredEmail,
      pass: enteredPassword,
    };
    props.onLogin(objUserInfo);
  };
  return (
    <Card>
      <h3 className={styles['heading']}>Login In Your Account Here</h3>
      <form className={styles["login-form"]} onSubmit={submitHandler}>
        <label className={styles["input-email-label"]}>Enter Your Email</label>
        <input
          type="email"
          autoComplete="nope"
          className={`${styles["form-control"]} ${
            emailIsValid === false ? styles["invalid"] : ""
          }`}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          value={enteredEmail}
        />
        <label className={styles["input-password-label"]}>
          Enter Your Password
        </label>
        <input
          type="password"
          className={`${styles["form-control"]} ${
            passwordIsValid === false ? styles["invalid"] : ""
          }`}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          value={enteredPassword}
        />
        <Button className={styles["submit-btn"]} disabled={!formIsValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
