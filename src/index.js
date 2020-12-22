import "./style.css";
console.log("Hello webpack!");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") }
}
 module.exports = {
  output: {
    path: path.resolve(__dirname, "build")
  }
 }

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};