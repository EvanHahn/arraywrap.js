var isArray =
  Array.isArray ||
  function (value) {
    return Object.prototype.toString.call(value) === "[object Array]";
  };

module.exports = function arrayWrap(value) {
  if (arguments.length) {
    return isArray(value) ? value : [value];
  } else {
    return [];
  }
};
