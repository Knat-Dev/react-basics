import React from "react";
import styles from "./Person.module.css";

const person = props => {
  console.log("[Person.js] rendering...", props);
  return (
    <div className={styles.Person}>
      <p className="text-center" onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <div className="row justify-content-center">
        <div className="col-10 form-group">
          <label className="">Change name:</label>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={props.changed}
            value={props.name}
          />
        </div>
      </div>
    </div>
  );
};
export default person;
