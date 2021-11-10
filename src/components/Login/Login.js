import styles from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useEffect, useReducer, useState } from "react";

function emailReducer(state, action) {
  //action 1
  if (action.type === "INPUT_EMAIL") {
    return {
      value: action.value,
      isValid: action.value.includes("@") && action.value.includes("."),
    };
  }

  //action 2
  if (action.type === "VALIDATE_EMAIL") {
    return {
      value: state.value,
      isValid: state.value.includes("@") && state.value.includes("."),
    };
  }

  //default
  return { value: "", isValid: false };
}

function passwordReducer(state, action) {
  //action 1
  if (action.type === "INPUT_PASSWORD") {
    return {
      value: action.value,
      isValid: action.value.trim().length > 7,
    };
  }

  //action 2
  if (action.type === "VALIDATE_PASSWORD") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 7,
    };
  }

  //default
  return { value: "", isValid: false };
}

//driver component
const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  //reducer for email
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });

  //reducer for password
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: undefined,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_EMAIL", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "VALIDATE_EMAIL" });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_PASSWORD", value: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "VALIDATE_PASSWORD" });
  };

  //useEffect for setting formIsValid
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const runValidate = setTimeout(() => {
      console.log("Checking Validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("Cleanup");
      clearTimeout(runValidate);
    };
  }, [emailIsValid, passwordIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    let objUserInfo = {
      id: new Date().getTime().toString(),
      email: emailState.value,
      pass: passwordState.value,
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
            emailState.isValid === false ? styles["invalid"] : ""
          }`}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          value={emailState.value}
        />
        <label className={styles["input-password-label"]}>
          Enter Your Password
        </label>
        <input
          type="password"
          className={`${styles["form-control"]} ${
            passwordState.isValid === false ? styles["invalid"] : ""
          }`}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          value={passwordState.value}
        />
        <Button className={styles["submit-btn"]} disabled={!formIsValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
