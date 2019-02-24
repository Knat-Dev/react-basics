import React, { Component } from "react";
import styles from "./Person.module.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...", this.props);
    return (
      <div className={styles.Person}>
        <p className="text-center" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <div className="row justify-content-center">
          <div className="col-10 form-group">
            <label className="">Change name:</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              onChange={this.props.changed}
              value={this.props.name}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Person;
