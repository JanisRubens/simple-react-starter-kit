var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/client.js'
	],
	output: {
		path: path.resolve('./build/js'),
		publicPath: '/public/js/',
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
				//				loader:'babel',
				//				query: {
				//					presets: ["es2015", "stage-0", "react"]
				//				}
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
			}
		]
	},
	node: {
		setImmediate: false
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
	],
	devtool: 'eval'
};

module.exports = webpackConfig;