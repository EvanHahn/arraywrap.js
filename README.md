array wrap dot js
=================
[![Build Status](https://travis-ci.org/EvanHahn/arraywrap.js.svg?branch=master)](https://travis-ci.org/EvanHahn/arraywrap.js)
[![npm version](https://badge.fury.io/js/arraywrap.svg)](http://badge.fury.io/js/arraywrap)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

If it's not an array, make it one:

```js
arrayWrap(123)        // => [123]
arrayWrap('yo')       // => ['yo']
arrayWrap(null)       // => [null]
arrayWrap(undefined)  // => [undefined]
arrayWrap()           // => []
```

If it's already an array, do nothing:

```js
arrayWrap([1, 2, 3])  // => [1, 2, 3]
arrayWrap([])         // => []

var arr = [1, 2]
arrayWrap(arr) === arr  // true
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
