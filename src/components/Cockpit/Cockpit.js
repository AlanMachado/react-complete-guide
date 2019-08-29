import React, { useEffect, useState } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    // you can have as many useeffect you want 
    useEffect( () => {
        console.log('[Cockpit.js] useEffect');

        // http request should be done here.... it is componentDidMount and componentDidUpdate combined 


        return () => { //equivalent to componentWillUnmount
            console.log('[Cockpit.js] cleanup work in useEffect'); 
        }
    }, [props.personsLength]); //with this it will only execute once persons changes, to run only the first time pass an empty array

    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Black;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold)
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default React.memo(Cockpit);