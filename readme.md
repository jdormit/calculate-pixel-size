# Calculate Pixel Size
### A small browser library to calculate text size in pixels

## Usage
If you include `calculate-pixel-size.js` in your HTML file, `calculatePixelSize` is exposed as a global variable. If you install via `npm` or `yarn`, `calculatePixelSize` is exposed as the default export.

```javascript
var text = "Some text to measure";
var widthInPixels = calculatePixelSize(text).width;
var heightInPixels = calculatePixelSize(text).height;
```

### Options
`calculatePixelSize` accepts an options object. Currently, only one option, `style`, is supported. It defines the style of the text to be measured, in the same syntax as [`HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style). Acceptable values:

```javascript
options = {
    style: {
        'letterSpacing': String,
        'tabSize': String,
        'font': String,
        'fontFamily': String,
        'fontKerning': String,
        'fontSize': String,
        'fontStretch': String,
        'fontStyle': String,
        'fontVariant': String,
        'fontVariantCaps': String,
        'fontWeight': String
    }
}

var styledSize = calculatePixelSize("Some text to measure", options);
```

Other values of `options.style` will be ignored.

### Important Note
Calculate Pixel Size relies on the `<body>` element being loaded. Therefore, you must load `calculate-pixel-size.js` at the end of the `<body>` tag, preferrably directly before the closing `</body>`. At some point in the future, I may include an optional callback to `calculatePixelSize` to allow it to be called asynchronously before the body loads.

## Installation
### Script tag
Download [`calculate-pixel-size.js`](https://jdormit.github.io/calculate-pixel-size/calculate-pixel-size.js) or [`calculate-pixel-size.min.js`](https://jdormit.github.io/calculate-pixel-size/calculate-pixel-size.min.js) (minified), then include the file in a script tag:

```html
<script type="text/javascript" src="/path/to/calculate-pixel-size.js"></script>
```

### NPM
`npm install calculate-pixel-size`

## License
Calculate Pixel Size is distributed under the MIT license.
