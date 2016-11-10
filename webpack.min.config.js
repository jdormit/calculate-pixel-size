var webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/docs",
        filename: "calculate-pixel-size.min.js",
        library: "calculatePixelSize",
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
