import {commitMutation, graphql} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
    mutation CreateLinkMutation($input: CreateLinkInput!){ 
        createLinks(input: $input){
            linkEdge{
                node{
                    id,
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
            // optimisticUpdater: (store) => {
            //     // Create a Todo record in our store with a temporary ID
            //     const{title, url, createdAt} = input
            //     const id = 'client:createLinks:' + tempID++;
            //     const node = store.create(id, 'link');
            //     node.setValue(title, 'title');
            //     node.setValue(url, 'url');
            //     node.setvalue(createdAt, 'createdAt');
          
            //     // Create a new edge that contains the newly created Todo record
            //     const newEdge = store.create(
            //       'client:newEdge:' + tempID++,
            //       'linkEdge',
            //     );
            //     newEdge.setLinkedRecord(node, 'node');
          
            //     // Add it to the user's todo list
            //     sharedUpdater(store, input, newEdge);
          
            //     // Given that we don't have a server response here,
            //     // we also need to update the todo item count on the user
            //     const userRecord = store.get(input.id);
            //     userRecord.setValue(
            //       userRecord.getValue('totalCount') + 1,
            //       'totalCount',
            //     );
            //   },
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


