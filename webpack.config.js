const path = require("path");

module.exports = {
entry: {
    myApp: "./src/index.js",
 },
 output: {
     filename: 'bundle.js',
     path: __dirname + '/dist'
 },
}
 module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
            contentBase: './dist',
            port:'3000',
            inline: true
        }
     
    }
 
