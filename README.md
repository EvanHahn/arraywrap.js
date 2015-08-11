array wrap dot js
=================

If it's not an array, make it one:

```js
arrayWrap(123)   // => [123]
arrayWrap('yo')  // => ['yo']
arrayWrap(null)  // => [null]
arrayWrap()      // => []
```

If it's already an array, do nothing:

```js
arrayWrap([1, 2, 3]) // => [1, 2, 3]
arrayWrap([])        // => []
```

To use it in Node/Browserify/Webpack:

```js
var arrayWrap = require('arraywrap')
arrayWrap(47)
```

To use it in the browser:

```html
<script src="arraywrap.js"></script>
<script>arrayWrap(47)</script>
```

This should support environments that don't have `Array.isArray` (like IE8 and below).