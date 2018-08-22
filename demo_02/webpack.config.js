const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	entry: __dirname + "/src/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: './build',
		inline: true,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/index.html' // 指定模板文件路径
		})
	]
}
