var createCounter = function(init) {
  var current = init;
  return {
    increment: function() {
      current = current + 1;
      return current;
    },
    decrement: function() {
      current = current - 1;
      return current;
    },
    reset: function() {
      current = init;
      return current;
    }
  };
};
var counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());