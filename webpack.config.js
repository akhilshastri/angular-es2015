var path = require('path');
module.exports = {
    entry: './src/es6/main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
           /* { test: path.join(__dirname, 'src/es6'), loader: 'babel-loader' }*/
            { test:/\.js$/, loader: 'babel-loader' }

        ]
    }
};