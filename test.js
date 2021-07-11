const arrayWrap = require('./')

const assert = require('assert')

assert.deepEqual(arrayWrap(), [])

const shouldBeUntouched = [[], [1, 2, 3], [[1, 2], [3]]]
for (const input of shouldBeUntouched) {
  assert.strictEqual(arrayWrap(input), input)
}

assert.deepEqual(arrayWrap(12), [12])
assert.deepEqual(arrayWrap(true), [true])
assert.deepEqual(arrayWrap('yas'), ['yas'])
assert.deepEqual(arrayWrap(null), [null])
assert.deepEqual(arrayWrap(undefined), [undefined])
assert.deepEqual(arrayWrap(0 / 0), [NaN])

const obj = { foo: 'bar' }
assert.strictEqual(arrayWrap(obj).length, 1)
assert.strictEqual(arrayWrap(obj)[0], obj)
