'use strict'

const assert = require('assert')
const isGlobalObject = require('.')

describe('isGlobalObject()', function () {
  it('should return true for `global`', function () {
    assert.strictEqual(true, isGlobalObject(global))
  })

  it('should return false for another object', function () {
    assert.strictEqual(false, isGlobalObject({}))
  })

  it('should return false for a non-object', function () {
    assert.strictEqual(false, isGlobalObject('not an object'))
  })
})
