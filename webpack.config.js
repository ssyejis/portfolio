const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const webpackMode = process.env.NODE_ENV || 'development';

module.exports = {
	mode: webpackMode,
	entry: {
		main: './src/js/main.js',
	},
	output: {
		path: path.resolve('./dist'),
		filename: '[name].min.js'
	},
	target: ['web', 'es5'],
	devServer: {
		liveReload: true
	},
	optimization: {
		minimizer: webpackMode === 'production' ? [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true
					}
				}
			})
		] : [],
		splitChunks: {
			chunks: 'all'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			minify: process.env.NODE_ENV === 'production' ? {
				collapseWhitespace: true,
				removeComments: true,
			} : false
		}),
		new HtmlWebpackPlugin({
			filename: 'project.html',
			template: './src/project.html',
			chunks: [],
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./src/main.css", to: "./main.css" },
				{ from: "./src/images", to: "./images" },
				{ from: "./src/models", to: "./models" },
				{ from: "./src/font", to: "./font" },
				{ from: "./src/components", to: "./components" },
				{ from: "./src/js", to: "./js" },
			],
		})
	]
};
