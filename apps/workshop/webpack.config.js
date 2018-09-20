module.exports = {
	devtool: 'source-map',
	entry: './src/app.js',
	output: {
		path: `${__dirname}/js`,
		chunkFilename: '[name].workshop.chunk.js',
		filename: "workshop.bundle.js",
		publicPath: 'apps/workshop/js/'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}]
	}
}
