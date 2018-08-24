const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: __dirname + "/src/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: './build',
		inline: true,
		historyApiFallback: true,
		host: '0.0.0.0'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/index.html' // 指定模板文件路径
		})
	],
	module: {
		rules: [
			{
				test: /(\.css)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /(\.js)$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}
				],
				exclude: /node_module/
			}
		]
	}
}
