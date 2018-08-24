# webpack demo 03

`Babel`是编译`javascript`的平台，可以将最新标准的`javascript`代码编译成浏览器完全支持的版本

## 安装并配置

`Babel`是金额个模块化的包，核心功能位于`babel-core`npm包中，`webpack`可以将不同的包整合在一起使用，对于每个单独功能需要安装单独的包。

```
$ npm install --save-dev babel-core babel-loader babel-preset-es2015

# webpack.config.js

module.exports = {
	...
	module: {
		rules: [
			...
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
```
