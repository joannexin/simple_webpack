const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	// entry path is relative file reference
	entry: './src/index.js',
	output: {
		// output path is absolute file reference bu using node helper
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}),
				test: /\.css$/
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					},
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

module.exports = config;
