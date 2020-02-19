import {GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList } from 'graphql';

import {connectionDefinitions, connectionArgs, connectionFromPromisedArray } from 'graphql-relay';

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
    })

})

return schema;
}

export default Schema;