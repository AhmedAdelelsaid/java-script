var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var merged = [];
for (var i = 0; i < arr1.length; i++) {
  merged.push(arr1[i]);
}
for (var j = 0; j < arr2.length; j++) {
  merged.push(arr2[j]);
}
console.log(merged);