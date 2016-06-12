var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'public/build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ 
            mangle: false,
            sourcemap: false,
            compress:{
                warnings: true
            } 
        }),
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env':{
            'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extension: ['', '.js', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
            }
        ]
    }
};