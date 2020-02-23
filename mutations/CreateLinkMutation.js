import {commitMutation, graphql} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
    mutation CreateLinkMutation($input: CreateLinkInput!){ 
        createLinks(input: $input){
            linkEdge{
                node{
                    url,
                    title,
                    createdAt
                }
            }
        }
     }
`

function sharedUpdater(store, input, newEdge) {
    // Get the current user record from the store
    const userProxy = store.get(input.id);
  
    // Get the user's Todo List using ConnectionHandler helper
    const conn = ConnectionHandler.getConnection(
      userProxy,
      'Main_linkConnection', // This is the connection identifier, defined here
      // https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L76
    );
  
    // Insert the new todo into the Todo List connection
    ConnectionHandler.insertEdgeAfter(conn, newEdge);
  }

function createLinkMutation(environment, storeID, input) {
    const {title, url} = input
    const variables = {
       input:{
            title,
            url
       } 
    }
    commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                console.log('Response received from server.')
              },
            onError: err => console.error(err),
            optimisticResponse:{
                createLinks:{
                    linkEdge:{
                        node: {
                            url: 'hello',
                            title: 'world',
                            createdAt: 'Saving'
                    }
                }
            }
            },
            configs: [{
                type: 'RANGE_ADD',
                parentID: storeID,
                connectionInfo: [{
                  key: 'Main_linkConnection',
                  rangeBehavior: 'prepend',
                }],
                edgeName: 'linkEdge',
              }],
        }
    )
}

export default createLinkMutation;


