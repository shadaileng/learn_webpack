# webpack demo 01

## 前期准备

1. 安装`webpack`以及`webpack-cli`

```
$ npm install --save-dev webpack webpack-cli
```

2. 新建文件夹`src`和`build`，并添加文件`main.js`，`greet.js`和`index.html`

```
$ mkdir src build
$ touch src/{main.js,greet.js} build/index.html


# build/index.html

<DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatble" content="IE-edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Webpack Demo 1</title>
		<style>
			* {
				margin: 0;
				paddind: 0;
			}
			html, body {
				width: 100%;
				height: 100%;
			}
		</style>
	</head>
	<body>
		<div id="app"></div>
		<script src="./bundle.js"></script>
	</body>
</html>


# src/greet.js

module.exports = function (msg) {
	let el = document.createElement('div')
	el.textContent = msg
	return el
}


# src/main.js

const greet = require('./greet.js')
document.querySelector('#app').appendChild(greet('hello webpack !!!'))
```
## 使用`webpack`

- 终端使用`webpack`编译源文件，并输出

```
# 命令格式: webpack {src} {dist}
$ ./node_modules/.bin/webpack src/mian.js build/bundle.js
```

- 使用配置文件`webpack.config.js`配置编译选项

1. 新建配置文件，并配置输入输出

```
$ touch webpack.config.js

# webpack.config.js

module.exports = {
	mode: "development", 					// 开发模式
	entry: __dirname + "/src/main.js", 	//入口文件
	output: {
		path: __dirname + "/build",		// 输出文件路径 
		filename: "bundle.js"				// 输出文件名
	}
}
```
2. 配置项目命令,添加`dev`命令

```
"scripts": {
	"dev": "webpack"
}
```
3. 执行`dev`命令

```
$ npm run dev
```

## 源码调试

`webpack`配置文件有一个配置选项`devtool`可以配置打包文件的源码映射，可选的选项有：

- `source-map`: 单独文件中生成完整的源码文件，具有最好的映射功能，打包速度最慢
- `cheap-module-source-map`: 单独文件中生成不带列映射的`source-map`，提高了打包速度，但不利于调试。
- `eval-source-map`: 使用`eval`打包源码模块，不影响打包速度的情况下生成完整的`source-map`,输出的`js`文件对性能和安全具有一定隐患，在开发阶段可以使用。
- `cheap-module-eval-source-map`: 最快的生成`source-map`的方式，生成的`source-map`与`js`文件同行显示，性能和安全具有一定隐患。

开发阶段一般使用`eval-source-map`

```
module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	entry: __dirname + "/src/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	}
}
```

