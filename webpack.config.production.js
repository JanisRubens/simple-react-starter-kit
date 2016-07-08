var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
	resolve: {
		extensions: ['', '.js']
	},
	entry: [
		'./src/client.js'
	],
	output: {
		path: path.resolve('./public/build/js'),
		publicPath: '/public/js/',
		filename: 'main.min.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']

			},
			{ 
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{ 
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.scss$/,
				loader: "style!css!autoprefixer!sass"
			},
		]
	},
	node: {
		setImmediate: false
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	],
	devtool: 'source-map'
};

module.exports = webpackConfig;