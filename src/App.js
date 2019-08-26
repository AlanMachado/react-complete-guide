import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <Person name="Alan" age="30"/>
      <Person name="William" age="26">My Hobbies: UBG</Person>
      <Person name="Uana" age="22"/>
    </div>
  );
}

export default App;
