import styles from "./Input.module.css";

function Input(props) {
    return(
        <>
        <label className={styles["input-label"]}>{props.label}</label>
        <input
          type={props.type}
          autoComplete="nope"
          className={`${styles["form-control"]} ${
            props.isValid === false ? styles["invalid"] : ""
          }`}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
        </>
    );
}

export default Input;