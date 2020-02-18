import React from 'react';
import  ReactDOM  from 'react-dom';
import { graphql } from 'react-relay';
import Main from '../components/Main.tsx';

// console.log("Relay", Relay)
ReactDOM.render(<Main limit={4}/>, document.getElementById('react'))

console.log(
    graphql `
    query appQuery {
        links {
            title
        }
    }
    `
)