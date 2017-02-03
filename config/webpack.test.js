const defaultConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Webpack test Config
const webpackConfig = {
	devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.js$/,
			enforce: 'pre',
			loader: 'source-map-loader',
			exclude: [
				// these packages have problems with their sourcemaps
				path.join(ROOT, 'node_modules/rxjs'),
				path.join(ROOT, 'node_modules/@angular')
			]
		}]
	}
};


module.exports = webpackMerge(defaultConfig, webpackConfig);