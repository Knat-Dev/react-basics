import React, { Component } from "react";
import Person from "./Person/Person";
class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps", props);
  //     return state;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  render() {
    return this.props.persons.map((person, index) => {
      console.log("[Persons.js] rendering...");
      return (
        <Person
          changed={event => this.props.changed(event, person.id)}
          click={() => this.props.click(index)}
          name={person.name}
          age={person.age}
          key={person.id}
        />
      );
    });
  }
}
export default Persons;
