var path = require('path');

//var ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    context: path.resolve('js'), // webpack will look for the entry files (utils and app) inside the js directory
    entry: ["./utils", "./app"], // the file to start with
    output: {
        path: path.resolve('build/'), // directory location that we will export to
        publicPath: 'assets/', // directory location that html will see (virtual directory)
        filename: "bundle.js" // the file that we create
    },
    plugins: [
        //new ExtractTextPlugin("styles.css")
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        contentBase: 'public'
    },
    watch: true, // to enter watch mode
    module: {
        rules: [
            { // babel loader
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6'] // login or login.js or login.es6
    }
};