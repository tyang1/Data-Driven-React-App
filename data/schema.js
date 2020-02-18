import {GraphQLSchema, 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList } from 'graphql';

let Schema = (db) => {
console.log("5. inside graphQL schema")
let linkType = new GraphQLObjectType({
    name: "LinkType",
    fields: () => ({
        _id : { type: GraphQLString},
        title: {type: GraphQLString},
        url: { type: GraphQLString},
    })
})

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            links: {
                type: new GraphQLList(linkType),
                resolve: () => 
                    db.collection("links").find({}).toArray()
                ,
            }
        }
    })

})

return schema;
}

export default Schema;