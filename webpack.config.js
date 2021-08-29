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
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "."),
    library: {
      name: "reactSidebarLayout",
      type: "umd",
    },
  },
  externals: {
    react: "react",
    "react/jsx-runtime": "react/jsx-runtime",
  },
};
