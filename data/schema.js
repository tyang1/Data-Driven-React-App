import {GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList } from 'graphql';

let Schema = (db) => {

let store = {};
console.log("5. inside graphQL schema")
let linkType = new GraphQLObjectType({
    name: "LinkType",
    fields: () => ({
        _id : { type: GraphQLString},
        title: {type: GraphQLString},
        url: { type: GraphQLString},
    })
})

let storeType = new GraphQLObjectType({
        name: 'Store', 
        fields: {
            links: {
                type: new GraphQLList(linkType),
                resolve: () => 
                    db.collection("links").find({}).toArray()
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