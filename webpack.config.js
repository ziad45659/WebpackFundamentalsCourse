var path = require('path');

module.exports = {
    context: path.resolve('js'), // webpack will look for the entry files (utils and app) inside the js directory
    entry: ["./utils", "./app"], // the file to start with
    output: {
        path: path.resolve('build/js'), // directory location that we will export to
        publicPath: 'assets/js/', // directory location that html will see (virtual directory)
        filename: "bundle.js" // the file that we create
    },
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
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6'] // login or login.js or login.es6
    }
};