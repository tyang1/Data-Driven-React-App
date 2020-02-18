import express from 'express';
import fs from 'fs'
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rgruser:rgruser123@rgrjs-drp6v.mongodb.net/test?retryWrites=true&w=majority";
let app = express();

app.use(express.static('public'));

(async() => {
  let client = await MongoClient.connect(uri);
  let db = client.db("rgrjs")
  let schema = Schema(db)

  app.use('/graphql', GraphQLHTTP({
  schema,
  graphiql: true,
}))
app.listen(3000, ()=> {console.log("connection on port 3000")});

app.get("/data/links", (req, res) => {
    db.collection("links").find({}).toArray((err, links) => {
        if(err) throw err;
        res.json(links)
      });
})
//Generate schema JSON:
let schemaJSON = await graphql(schema, introspectionQuery)

fs.writeFile('./data/schema.json', JSON.stringify(schemaJSON, null, 2), err => {
  if(err) throw err;
  console.log("schema JSON output completed!")
})

// app.get("/schema", (req, res) => {
//   res.json(schemaJSON)
// })

})();




