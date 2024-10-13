const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "main.jsx",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.png/,

        type: "asset/resource",
      },
    ],
  },
};
