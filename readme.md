# Calculate Pixel Width
### A small browser library to calculate text width in pixels

## Usage
If you include `calculate-pixel-width.js` in your HTML file, `calculatePixelWidth` is exposed as a global variable. If you install via `npm` or `yarn`, `calculatePixelWidth` is exposed as the default export.

```javascript
var text = "Some text to measure";
var widthInPixels = calculatePixelWidth(text);
```

### Important Note
Calculate Pixel Width relies on the `<body>` element being loaded. Therefore, you must load `calculate-pixel-width.js` at the end of the `<body>` tag, preferrably directly before the closing `</body>`. At some point in the future, I may include an optional callback to `calculatePixelWidth` to allow it to be called asynchronously before the body loads.

## Installation
### Script tag
Download [`calculate-pixel-width.js`](https://jdormit.github.io/calculate-pixel-width/calculate-pixel-width.js) or [`calculate-pixel-width.min.js`](https://jdormit.github.io/calculate-pixel-width/calculate-pixel-width.min.js) (minified), then include the file in a script tag:

```html
<script type="text/javascript" src="/path/to/calculate-pixel-width.js"></script>
```

### NPM
`npm install calculate-pixel-width`

## License
Calculate Pixel Width is distributed under the MIT license.
