var path = require('path');
module.exports = {
    entry: './src/app/app.js',
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        loaders: [
            /* { test: path.join(__dirname, 'src/es6'), loader: 'babel-loader' }*/
            {test: /\.js$/, loader: 'babel-loader'}

        ]
    },
    externals: {
        'angular': 'angular'
    }
};
