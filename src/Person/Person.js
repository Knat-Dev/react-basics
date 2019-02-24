import React from "react";
import styles from "./Person.module.css";

const person = properties => {
  return (
    <div className={styles.Person}>
      <p className="text-center" onClick={properties.click}>
        I'm {properties.name} and I am {properties.age} years old!
      </p>
      <div className="row justify-content-center">
        <div className="col-10 form-group">
          <label className="">Change name:</label>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={properties.changed}
            value={properties.name}
          />
        </div>
      </div>
    </div>
  );
};
export default person;
