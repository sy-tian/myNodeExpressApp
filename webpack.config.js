var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/server',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "dist")
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        noParse: [/aws\-sdk/],
        rules: [{
            test: /(\.js|\.jsx)$/,
            include: path.join(__dirname, "dist"),
            exclude: /(node_modules)/,
            use: [{
                loader: "babel-loader"
            }]
        }]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        module: 'empty'
    }
};