module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    output: {
        filename: 'magic.js',
        path: __dirname + '/public'
    }
};