var webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/docs",
        filename: "calculate-pixel-width.min.js",
        library: "calculatePixelWidth",
        libraryTarget: "var"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
