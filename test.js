var arrayWrap = require("./");

var assert = require("assert");

assert.deepEqual(arrayWrap(), []);

var shouldBeUntouched = [[], [1, 2, 3], [[1, 2], [3]]];
shouldBeUntouched.forEach(function (input) {
  assert.strictEqual(arrayWrap(input), input);
});

assert.deepEqual(arrayWrap(12), [12]);
assert.deepEqual(arrayWrap(true), [true]);
assert.deepEqual(arrayWrap("yas"), ["yas"]);
assert.deepEqual(arrayWrap(null), [null]);
assert.deepEqual(arrayWrap(undefined), [undefined]);

var obj = { foo: "bar" };
assert.strictEqual(arrayWrap(obj).length, 1);
assert.strictEqual(arrayWrap(obj)[0], obj);
