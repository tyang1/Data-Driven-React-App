const path = require("path");
const getBabelRelayPlugin = require("babel-plugin-relay");
const parsedSchemaJSON = require("./data/schema.json").data;

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "bundle.js",
  },
  /* 
     This configuration enables webpack to load a particular file when requested by the app with the help of loaders*/
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              getBabelRelayPlugin(parsedSchemaJSON.__schema),
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "css-modules-typescript-loader",
          // Creates `style` nodes from JS strings
          {
            loader: "style-loader",
          },
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              //   localIdentName: '[local]___[hash:base64:5]'
            },
          },
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                getBabelRelayPlugin(parsedSchemaJSON.__schema),
                "@babel/plugin-proposal-class-properties",
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx", "css", "scss"],
  },
};
