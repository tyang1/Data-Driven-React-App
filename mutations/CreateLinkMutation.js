import {commitMutation, graphql} from 'react-relay';

const mutation = graphql`
    mutation CreateLinkMutation($input: CreateLinkInput!){ 
        createLinks(input: $input){
            linkEdge{
                node{
                    id,
                    url,
                    title,
                }
            }
        }
     }
`

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


