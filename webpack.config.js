const path = require('path');

const config = {
	// entry path is relative file reference
	entry: './src/index.js',
	output: {
		// output path is absolute file reference bu using node helper
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			}
		]
	}
};

module.exports = config;