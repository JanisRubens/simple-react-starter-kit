var debug = (JSON.stringify(process.env.NODE_ENV).indexOf("production") > -1) ? false : true ;
console.log(debug);
var webpack = require('webpack');
var path = require('path');
//import ExtractTextPlugin from "extract-text-webpack-plugin";

var webpackConfig = {
	context: path.join(__dirname, 'src'),
	devtool: debug ? "inline-sourcemap" : null,
	entry: [
		'./index.js'
	],
	output: { //where the budled(minified) file gets placed and named
		path: path.join(__dirname, 'public/build'),
		filename: 'bundle.js'
	},
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
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{
				test: /\.scss$/,
				loader: "style!css!autoprefixer!sass"
			},
		]
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ 
			mangle: false,
			sourcemap: false,
			compress:{
				warnings: true
			} 
		}),
		new webpack.DefinePlugin({
		'process.env':{
		'NODE_ENV': JSON.stringify('production')
		}
		})
	]
};

module.exports = webpackConfig;