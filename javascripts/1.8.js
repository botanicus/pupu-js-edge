// https://developer.mozilla.org/en/New_in_JavaScript_1.8

// https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Global_Objects/Array/Reduce
// [1, 2, 3].reduce(function(sum, item) { return sum + item }, 0)
Array.prototype.reduce = function(callback, initialValue) {
  var last, returned;
  this.forEach(function(item, index, array) {
    if (index == 0 && initialValue) {
      returned = initialValue;
    } else if (index == 1 && !initialValue) {
      returned = item;
    } else {
      last = returned, returned = null;
      returned = callback(last, item, index, array);
    };
  });
  return returned;
};

// functional-style
// ladit pres file:///Users/botanicus/Desktop/index.html
Array.prototype.reduce = function(callback, initialValue) {
  // var tail = this, head = initialValue || tail.shift(), initialValue = null;
  var head = initialValue || this.shift();
  var tail = this;
  var initialValue = null;
  if(tail) {
    tail.reduce(callback, head);
  } else {
    return head;
  }
};
[1, 2, 3].reduce(function(sum, item) { return sum + item })

Array.prototype.reduceRight

String.prototype.trim
String.prototype.trimLeft
String.prototype.trimRight
