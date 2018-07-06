const path = require('path');

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname,'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/',
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                }
            },
            exclude: '/node_modules/',
            include: path.join(__dirname,'src'),
        }]
    },
};