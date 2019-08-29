import React, { PureComponent } from 'react';
import Person from './Person/Person';

// pure component is just a component that implement shouldComponentUpdate that checks all properties 
class Persons extends PureComponent {
    /* static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return nextProps.persons !== this.props.persons;
    }
 */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot, prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering....');
        return this.props.persons.map((person, index) => {
            return (
            <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age} 
              key={person.id} 
              changeName={(event) => this.props.changed(event, person.id)}/> 
            );
        });
    }
}

export default Persons;