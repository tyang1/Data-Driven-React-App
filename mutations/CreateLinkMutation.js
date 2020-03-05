import {commitMutation, graphql} from 'react-relay';
import {ConnectionHandler} from 'relay-runtime';


let tempID = 0;
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

function sharedUpdater(store, input, newEdge, mode) {
    console.log(`${mode === "optimistic"? "Optimistic updating the local store!": "Server payload available:"} Inside sharedUpdater, to add the new link to the connection in store:`)
    console.log("1. Get the current store record from the relay store");
    const userProxy = store.get(input.id);
  
    console.log("2. Get the store's Link List using ConnectionHandler helper");
    const conn = ConnectionHandler.getConnection(
      userProxy,
      'Main_linkConnection', // This is the connection identifier, defined here
      // https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L76
    );
  
    console.log("3. Insert the new link into the linkConnection");
    ConnectionHandler.insertEdgeBefore(conn, newEdge);
  }
//This is where Relay is communicating with the mutate system:
function createLinkMutation(environment, parentStore, input) {
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
                console.log('Response received from server.', response)
              },
            onError: err => {console.log(err)},
         
            updater: (store) => {
                // Get the payload returned from the server
                const payload = store.getRootField('createLinks');
                
                // Get the edge of the newly created link record
                const newEdge = payload.getLinkedRecord('linkEdge');
          
                // Add it to the user's link list
                sharedUpdater(store, parentStore, newEdge, "serverData");
              },
              optimisticUpdater: (store) => {
                console.log("Inside optimisticUpdater:")
                console.log("1. Create a Link record in our store with a temporary ID");
                const id = 'store:newLink:' + tempID++;
                const node = store.create(id, 'Store');
                node.setValue(title, 'Updating...');
                node.setValue(url, 'Updating...');
          
                console.log("2. Create a new edge that contains the newly created Link record");
                const newEdge = store.create(
                  'store:newEdge:' + tempID++,
                  'linkEdge',
                );
                newEdge.setLinkedRecord(node, 'node');
          
                console.log("3. Add it to the link's list");
                sharedUpdater(store, parentStore, newEdge, "optimistic");
          
              },
        }
    )
}

export default createLinkMutation;


