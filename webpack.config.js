const path = require('path');
const getBabelRelayPlugin = require('babel-plugin-relay');
const parsedSchemaJSON = require('./data/schema.json').data;


module.exports = {
    entry: './js/app.jsx',
    output: {
        path: path.resolve(__dirname , './public'),
        filename: 'bundle.js'
    },
    /* 
     This configuration enables webpack to load a particular file when requested by the app with the help of loaders*/
    module:{
        rules:[
            {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', "@babel/preset-react", "@babel/preset-typescript"],
                  plugins: [getBabelRelayPlugin(parsedSchemaJSON.__schema)],
                }
            } 
        }, 
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ]
        },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', 'jsx' ],
      },
}