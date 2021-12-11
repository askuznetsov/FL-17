/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: './js/scripts.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader'
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css'
      })
   ]
};