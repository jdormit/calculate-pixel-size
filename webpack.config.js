module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/docs",
        filename: "calculate-pixel-size.js",
        library: "calculatePixelSize",
        libraryTarget: "var"
    }
};
