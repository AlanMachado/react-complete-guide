import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'oipqowe', name: 'Alan', age: 30 },
      { id: 'askdik', name: 'William', age: 26 },
      { id: 'hasuds', name: 'Uana', age: 22 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice(); ES5 way to copy an array
    const persons = [...this.state.persons] // ES6 - spreads out the elements in this array into a list of elements which simply then gets added to a new array
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      btnClass = classes.Black;
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id} 
              changeName={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
          
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
