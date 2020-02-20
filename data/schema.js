import {GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList } from 'graphql';

import {connectionDefinitions, connectionArgs, connectionFromPromisedArray, mutationWithClientMutationId } from 'graphql-relay';

let Schema = (db) => {

let store = {};
console.log("5. inside graphQL schema")
let linkType = new GraphQLObjectType({
    name: "Link",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID), resolve: (link) => {
            return link._id
        }},
        title: {type: GraphQLString},
        url: { type: GraphQLString},
    }
    
})
let {connectionType: linkConnection} = connectionDefinitions({
    name: 'Link',
    nodeType : linkType
})
let storeType = new GraphQLObjectType({
        name: 'Store', 
        fields: {
            linkConnection: {
                type: linkConnection,
                args: connectionArgs,
                resolve: (__, args) => connectionFromPromisedArray(
                    db.collection("links").find({}).toArray(),
                    args)
                ,
            }
        }

});

let createLinkMutation = mutationWithClientMutationId({
    name: 'CreateLink',
    inputFields:{
        title: {type: new GraphQLNonNull(GraphQLString)},
        url: {type: new GraphQLNonNull(GraphQLString)}
    },
    outputFields:{ //** Read after the mutation */
        link:{
            type: linkType,
            resolve: (mongodbResult) => mongodbResult.ops[0]
        }
    },
    mutateAndGetPayload: ({title, url}) => {
        //mongodb operation
        return db.collection("links").insertOne({title, url})

    }
})

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query', 
        fields: {
            store: {
                type: storeType,
                resolve : () => store
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'mutation',
        fields: {
                createLinks: createLinkMutation
        }
    })

})

return schema;
}

export default Schema;