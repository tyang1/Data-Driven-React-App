const getBabelRelayPlugin = require('babel-plugin-relay');
const parsedSchemaJSON = require('./data/schema.json').data;
module.exports = getBabelRelayPlugin(parsedSchemaJSON, {abortOnError: true});


