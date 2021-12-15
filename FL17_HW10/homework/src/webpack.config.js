/* eslint-disable new-cap */
/* eslint-disable no-undef */
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: '/js/import.js',
   output: {
      filename: 'bundle.js'
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