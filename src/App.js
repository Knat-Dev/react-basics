import React, { Component } from "react";
//import { render } from "react-dom";
import Person from "./Person/Person";
import styles from "./App.module.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 25 },
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
    let btnClasses = ["btn", "btn-outline-success"].join(" ");
    let persons = null;
    if (this.state.isShown) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                changed={event => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
      btnClasses = ["btn", "btn-outline-danger"].join(" ");
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("text-danger");
    }
    if (this.state.persons.length <= 1) classes.push("font-weight-bold");

    return (
      <div className={styles.App}>
        <div className=" container text-center">
          <h1 className="display-4 font-weight-light">Hi I'm a react app!</h1>
          <p className={classes.join(" ")}>Wow! This is amazing!</p>
          <button
            className={btnClasses}
            type="button"
            onClick={this.togglePersonsHandler}
          >
            Click Me!
          </button>
        </div>
        {persons}
      </div>
    );
  }
}
export default App;
