import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsSate, setPersonsState] = useState({persons: [{name: 'Alan', age:30}, {name: 'William', age: 26}, {name: 'Uana', age: 22}]});

  /* state = {
    persons: [{name: 'Alan', age: 30}, {name: 'William', age: 26}, {name: 'Uana', age: 22}]
  } */

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DONT DO THIS this.state.persons[0].name="";
    setPersonsState({persons: [{name: 'ALAN', age: 30}, {name: 'William', age: 26}, {name: 'Uana', age: 22}] })
  }
  
  
  return (
    <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsSate.persons[0].name} age={personsSate.persons[0].age}/>
        <Person name={personsSate.persons[1].name} age={personsSate.persons[1].age}>My Hobbies: UBG</Person>
        <Person name={personsSate.persons[2].name} age={personsSate.persons[2].age}/>
    </div>
  );
  
}

export default App;
