# arraywrap.js

[![npm version](https://badge.fury.io/js/arraywrap.svg)](http://badge.fury.io/js/arraywrap)

If it's not an array, make it one:

```js
const arraywrap = require("arraywrap");

arraywrap(123); // => [123]
arraywrap("yo"); // => ['yo']
arraywrap(null); // => [null]
arraywrap(undefined); // => [undefined]
arraywrap(); // => []
```

If it's already an array, do nothing:

```js
arraywrap([1, 2, 3]); // => [1, 2, 3]
arraywrap([]); // => []

const arr = [1, 2];
arrayWrap(arr) === arr; // true
```

This supports environments that don't have `Array.isArray` (like IE8 and below).
