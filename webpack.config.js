var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: /src/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
