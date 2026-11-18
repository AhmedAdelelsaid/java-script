function getKeys(obj) {
  var keys = [];
  for (var k in obj) {
    keys.push(k);
  }
  return keys;
}
console.log(getKeys({ name: "John", age: 30 }));