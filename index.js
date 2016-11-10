var measureText = function(textToMeasure) {
    var widthCalculator = document.getElementById("size-calculator-width-span");
    if (!widthCalculator) {
        widthCalculator = document.createElement("span");
        widthCalculator.id = "size-calculator-width-span";
        widthCalculator.style.cssText = "position: absolute; white-space: pre; opacity: 0;";
        document.body.appendChild(widthCalculator);
    }
    widthCalculator.innerText = textToMeasure;
    var boundingRect = widthCalculator.getBoundingClientRect();
    if (boundingRect.width) {
        return boundingRect.width;
    }
    else {
        return boundingRect.right - boundingRect.left;
    }
}

module.exports = function(textToMeasure) {
    if (!document.body) {
        console.error("Document body not found! Make sure to load calculate-pixel-width.js at the end of the <body> tag.");
    }
    else {
        return measureText(textToMeasure);
    }
};

