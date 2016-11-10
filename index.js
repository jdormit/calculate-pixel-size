var measureText = function(textToMeasure, style) {
    var widthCalculator = document.getElementById("size-calculator-width-span");
    if (!widthCalculator) {
        widthCalculator = document.createElement("span");
        widthCalculator.id = "size-calculator-width-span";
        widthCalculator.style.cssText = "position: absolute; white-space: pre; opacity: 0;";
        document.body.appendChild(widthCalculator);
    }
    widthCalculator.innerText = textToMeasure;
    if (style) {
        var relevantStyles = [
            'letterSpacing',
            'tabSize',
            'wordSpacing',
            'font',
            'fontFamily',
            'fontKerning',
            'fontSize',
            'fontStretch',
            'fontStyle',
            'fontVariant',
            'fontVariantCaps',
            'fontWeight'
        ];
        Object.keys(style).filter(function(key) {
            return relevantStyles.indexOf(key) >= 0;
        }).forEach(function(key) {
            widthCalculator.style[key] = style[key];
        });
    }
    var size = {};
    var boundingRect = widthCalculator.getBoundingClientRect();
    if (boundingRect.width) {
        size.width = boundingRect.width;
    }
    else {
        size.width = boundingRect.right - boundingRect.left;
    }
    if (boundingRect.height) {
        size.height = boundingRect.height;
    }
    else {
        size.height = boundingRect.bottom - boundingRect.top;
    }
    return size;
}

module.exports = function(textToMeasure, options) {
    if (!document.body) {
        console.error("Document body not found! Make sure to load calculate-pixel-width.js at the end of the <body> tag.");
    }
    else {
        if (!options) options = {};
        return measureText(textToMeasure, options.style);
    }
};

