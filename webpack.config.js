const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  target: "node",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules|example/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "."),
  },
  externals: {
    react: "react",
    "styled-components": "styled-components",
  },
};
