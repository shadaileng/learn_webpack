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

