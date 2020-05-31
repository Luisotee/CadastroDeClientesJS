module.exports = {
    entry: {
        main: './src/scripts/index.js',
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },
    devServer: {
        contentBase: __dirname
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }],
    },
};