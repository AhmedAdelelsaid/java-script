function findLargest(arr) {
  var biggest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}
console.log(findLargest([1, 3, 7, 2, 4]));