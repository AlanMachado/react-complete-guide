import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxy';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
    this.state = {
      persons: [
        { id: 'oipqowe', name: 'Alan', age: 30 },
        { id: 'askdik', name: 'William', age: 26 },
        { id: 'hasuds', name: 'Uana', age: 22 }
      ],
      otherState: 'some other value',
      showPersons: false,
      changeCounter: 0
    }; 
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] component did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');

  }
  

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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler} />
        </div>
      );
          
    }

    return (
      <Aux>
        <Cockpit showPersons={this.state.showPersons} personsLength={this.state.persons.length} clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
