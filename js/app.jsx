import React from 'react';
import  ReactDOM  from 'react-dom';
import { graphql, QueryRenderer } from 'react-relay';
import Main from '../components/Main.jsx';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Login from '../components/Login.jsx';


function fetchQuery(
  operation,
  variables,
) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});


const renderQuery = ({error, props}) => {
    if (error) {
      return <div>Error!</div>;
    }
    if (!props) {
      return <div>Loading...</div>;
    }
      
    // return <Main store={props.store}/>
    return <Login/>
  }

// class App extends React.Component{
//   render(){
//     return(

//     )
//   }
// }

ReactDOM.render(<QueryRenderer
  environment={environment}
  query={graphql `
  query appQuery{
      store{
          ...Main_store
      }
  }
`}
    render = {renderQuery}

/>, document.getElementById('react'))
