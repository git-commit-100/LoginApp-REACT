import styles from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useEffect, useState } from "react";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /* using useEffect to check fields validation at every keystroke i.e onChange */
  useEffect(() => {
    /* this state updates for every keystroke which is not suitable
    so we wait for 500ms delay to interpret that user has stop typing 
    and then check validation */

    const runValidation = setTimeout(() => {
      console.log("Checking Validation");
      setFormIsValid(
        enteredEmail.includes("@") &&
          enteredEmail.includes(".") &&
          enteredPassword.trim().length > 7
      );
    }, 500);

    /* chaining setTimeouts can also be a problem as it is
    updated on every kestroke therefore on new keystroke
    we need to clear out the predescending setTimeout 
    therefore we return an empty function so setTimeout 
    would start for every keystroke but last one will be 
    cleared out when new keystroke is typed*/
    // this is called as a cleanup function

    return () => {
      console.log("Cleanup");
      clearTimeout(runValidation);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
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
      <h3 className={styles["heading"]}>Login In Your Account Here</h3>
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
