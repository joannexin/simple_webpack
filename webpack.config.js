const path = require('path');

const config = {
	// entry path is relative file reference
	entry: './src/index.js',
	output: {
		// output path is absolute file reference bu using node helper
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	}
};

module.exports = config;