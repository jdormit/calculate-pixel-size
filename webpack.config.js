module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/docs",
        filename: "calculate-pixel-width.js",
        library: "calculatePixelWidth",
        libraryTarget: "var"
    }
};
