import {GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList } from 'graphql';

import {connectionDefinitions, connectionArgs, connectionFromPromisedArray, mutationWithClientMutationId, globalIdField } from 'graphql-relay';

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
        createdAt : {type: GraphQLString, resolve: (obj) => {
            return obj.createdAt? new Date(obj.createdAt).toISOString(): ""
        }}
    }
    
})

let {edgeType: linkEdge, connectionType: linkConnection} = connectionDefinitions({
    name: 'Link',
    nodeType : linkType
})

let storeType = new GraphQLObjectType({
    name: 'Store', 
    fields: {
            id: globalIdField("Store"),
            linkConnection: {
                type: linkConnection,
                args: {... connectionArgs,
                    query: {type: GraphQLString }
                },
                resolve: (__, args) => {
                    let findParams = {};
                    if(args.query){
                        findParams.title = new RegExp(args.query, "i")
                    }
                    return connectionFromPromisedArray(
                    db.collection("links").find(findParams).sort({createdAt: -1}).toArray(),
                    args)
                }
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
    outputFields:{ //** Read after the mutation, can modify the type to output here */
        linkEdge:{
            type: linkEdge,
            resolve: (mongodbResult) => ({ node: mongodbResult.ops[0], cursur: mongodbResult.insertedId})
        },
        store:{
            type: storeType,
            resolve: () => {}
        }
    },
    mutateAndGetPayload: ({title, url}) => {
        //mongodb operation
        return db.collection("links").insertOne({title, url, createdAt: new Date()})

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