# webpack demo 03

`webpack`将所有文件都当作模块处理，不同的文件使用对应的`loader`处理

## 安装并配置

`webpack`提供了两种处理`css`文件的`loader`，`css-loader`和`style-loader`，`css-loader`可以处理`@import`和`url(...)`等操作，`style-loader`将所以处理后的样式加入到页面中
```
$ npm install --save-dev css-loader style-loader


# webpack.config.js

module.exports = {
	module: {
		rules: [
			{
				test: /(\.css)$/,
				use: [
					{
						loader: 'css-loader'
					},
					{
						loader: 'style-loader',]
						options: {
							module: true
						}
					}
				]
			}
		]
	}
}
```

## 使用css模块

1. 新建文件`src/greet.css`

```
$ touch src/greet.css

# greet.css

.root {
	outline: 1px solid #ccc;
}
```

2. 修改`greet.js`

```
// 导入css文件
import style from './greet.css'
export default function (msg) {
	let el = document.createElement('div')
	el.textContent = msg
	// 命名元素的class
	el.className = style.root
	return el
}
```

> 注意: `webpack`打包时，js文件中`import`和`moudle.exports`不能混用，所以导入文件改为`ES6`格式的`import`和`export default`
