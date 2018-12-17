var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js'), // webpack will look for the entry files (utils and app) inside the js directory
    entry: ["./utils", "./app"], // the file to start with
    output: {
        path: path.resolve('build/'), // directory location that we will export to
        publicPath: 'assets/', // directory location that html will see (virtual directory)
        filename: "bundle.js" // the file that we create
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        contentBase: 'public'
    },
    watch: true, // to enter watch mode
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            { // babel loader
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // loader: "style-loader!css-loader" // if used like this, then css is loaded into the html and not to a separate file
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                //loader: "style-loader!css-loader!sass-loader"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6'] // login or login.js or login.es6
    }
};