import React from "react";

const cockpit = props => {
  let classes = [];
  if (props.persons.length <= 2) {
    classes.push("text-danger");
  }
  if (props.persons.length <= 1) classes.push("font-weight-bold");
  return (
    <div className=" container text-center">
      <h1 className="display-4 font-weight-light">Hi I'm a react app!</h1>
      <p className={classes.join(" ")}>Wow! This is amazing!</p>
      <button
        className={props.btnClasses}
        type="button"
        onClick={() => props.click()}
      >
        Click Me!
      </button>
    </div>
  );
};

export default cockpit;
