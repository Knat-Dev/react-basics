import React, { Component } from "react";
//import { render } from "react-dom";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import styles from "./App.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  state = {
    persons: [
      { id: 1, name: "Maxi", age: 25 },
      { id: 2, name: "Manu", age: 26 },
      { id: 3, name: "Stephan", age: 28 }
    ],
    isShown: true
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    let isShown = this.state.isShown;
    this.setState({ isShown: !isShown });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState(persons);
  };

  render() {
    console.log("[App.js] render");
    let btnClasses = ["btn", "btn-outline-success"].join(" ");
    let persons = null;
    if (this.state.isShown) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      btnClasses = ["btn", "btn-outline-danger"].join(" ");
    }

    return (
      <div className={styles.App}>
        <Cockpit
          btnClasses={btnClasses}
          click={this.togglePersonsHandler}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
}
export default App;
