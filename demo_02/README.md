# webpack demo 02

`webpack`提供了一个基于`node.js`的本地服务器，可以监听源码，在改动后自动刷新显示改动后的结果。

## 安装并配置

1. `webpack`提供的本地服务器是一个单独的模块，需要安装`webpack-dev-server`并添加到项目依赖。

```
$ npm install --save-dev webpack-dev-server
```

2. `devServer`是配置本地服务器的配置项，有以下可选的配置项：

- `after`: 函数;在服务器其他中间件之后执行自定义中间件。
- `allowwebHosts`: 数组;添加白名单服务，允许一些开发服务器访问
- `before`: 函数;在服务器其他中间件之前执行自定义中间件
- `bonjour`: 布尔值;此选项启动时，通过ZeroConf网络广播服务
- `clientLogLevel`: 字符串;打印日志等级，可选的值有`none`，`error`，`warning`，`info`(默认)
- `color`: 仅适用于`CLI`
- `compress`: 布尔值;此选项启动时，一切服务都启动`gzip`压缩
- `contentBase`: 布尔值、数组或字符串;指定静态文件目录
	1. `false`禁用;
	2. 字符串为提供静态文件的路径
	3. 数组为多个路径。默认当前路径。
- `disableHostCheck`: 布尔值;此选项启动时，绕过主机检查，容易受到`DNS`重新连接攻击
- `filename`: 字符串;在惰性模式(`lazy: true`)下,指定文件在请求时才会编译。
- `headers`: 对象;请求头内容
- `historyApiFallback`: 布尔值或对象;此选项启动时，任何`404`响应都会跳转到`index.html`;配置`rewrites`选项，指定跳转页面。

```
{
	devServer: {
		historyApiFallback: {
			rewrites: [
				{from: /^\/$/, to: 'views/landing.html'},
				{from: /^\login/, to: 'views/login.html'},
				{from: /./, to: 'views/404.html'}
			]
		}
	}
}
```

- `host`: 字符串;指定访问的`host`，默认`localhost`
```
{
	devServer: {
		host: '0.0.0.0' // 服务器外部访问
	}
}
```
- `hot`: 布尔值;此选项启动时，启动模块热替代
- `https`: 布尔值或对象;`true`使用自带证书的`https`服务，对象可以指定证书路径
```
{
	devServer: {
		https: {
			key: fs.readFileSync('path/to/server.key'),
			cert: fs.readFileSync('path/to/server.crt'),
			ca: fs.readFileSync('path/to/server.pem'),
		}
	}
}
```
- `index`: 字符串;指定首页文件
- `info`: 仅使用`CLI`
- `inline`: 布尔值;切换内联模式和`iframe`模式，内联模式会将实时重载脚本插入包中，构建信息出现在`console`;`iframe`模式在通知栏插入`iframe`
- `lazy`: 布尔值;此选项启动时，`webpack`不会监听文件改动
- `noInfo`: 布尔值;此选项启动时，隐藏`info`信息打印
- `open`: 布尔值;此选项启动时，自动打开浏览器，默认为`true`
- `openPage`: 字符串;打开浏览器时打开的页面
- `overlay`: 布尔值;此选项启动时，编译错误全屏显示错误信息，默认`false`
- `port`: 整型;指定端口，默认`8080`

本地配置项
```
# webpack.config.js
{
	devServer: {
		contentBase: './build',
		inline: true,
		historyApiFallback: true
	}
}
```

3. 添加启动本地服务器的命令

```
{
	"scripts": {
		"server": "webpack-dev-server --open"
	}
}
```

4. 终端启动本地服务

```
$ npm run server
```

## 使用`HtmlWebpackPlugin`插件模板

1. 安装`html-webpack-plugin`模块

```
$ npm install --save-dev html-webpack-plugin
```

2. 移动`build/index.html`文件到根目录，并删除

```
<script src="./bundle.js"></script>
```

3. `webpack.config.js`文件添加`HtmlWebpackPlugin`的配置

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	...
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/index.html' // 指定模板文件路径
		})
	]
}
```
