var wrap = require('..')

var assert = require('assert')

describe('should not wrap', function () {
  it('empty arrays', function () {
    var empty = []

    assert.equal(wrap(empty), empty)
    assert.deepEqual(wrap(empty), [])
  })

  it('arrays of numbers', function () {
    var arr = [1, 2, 3]

    assert.equal(wrap(arr), arr)
    assert.deepEqual(wrap(arr), [1, 2, 3])
  })

  it('arrays containing arrays', function () {
    var arr = [[1, 2], [3]]

    assert.equal(wrap(arr), arr)
    assert.deepEqual(wrap(arr), [[1, 2], [3]])
  })
})
