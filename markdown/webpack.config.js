const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: __dirname + '/src/main.js',
	output: {
		path: __dirname + 'build',
		filename: 'bundle.js'
	},
	devServer: {
		host: '0.0.0.0',
		contentBase: __dirname,
		inline: true,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /(\.md)$/,
				use: 'raw-loader'
			}
		]
	},
	node: {
        fs: 'empty'
    },
}
