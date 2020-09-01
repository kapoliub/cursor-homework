const path = require('path');

module.exports = {
    watch: true,
    entry: {
        main: './homework-14/src/index.js'
    },
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                ],
            },
            {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
                ],
            }
        ]
    },      
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};