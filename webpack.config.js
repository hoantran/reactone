var webpack = require('webpack');
var path = require('path');
var debug = process.env.NODE_ENV !== "production";

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
	entry: SRC_DIR + '/app.js',
	devtool: debug ? "inline-sourcemap" : null,
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: BUILD_DIR,
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, 
				{
			    test: /\.(png|jpg)$/,
			    loader: 'url-loader?limit=10000'
			}
	 ]
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
	]
};