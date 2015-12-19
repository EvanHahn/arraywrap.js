;(function () {
  var isArray = Array.isArray || function (value) {
    return Object.prototype.toString.call(value) === '[object Array]'
  }

  function arrayWrap (value) {
    if (arguments.length) {
      return isArray(value) ? value : [value]
    } else {
      return []
    }
  }

  if (typeof module !== 'undefined') {
    module.exports = arrayWrap
  } else {
    this.arrayWrap = arrayWrap
  }
})()
