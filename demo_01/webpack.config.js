module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	entry: __dirname + "/src/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	}
}
