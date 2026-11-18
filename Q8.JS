function checkDivisible(n) {
  if (n % 3 == 0 && n % 5 == 0) {
    return "Divisible by both";
  } else if (n % 3 == 0) {
    return "Divisible by 3";
  } else if (n % 5 == 0) {
    return "Divisible by 5";
  } else {
    return "Not divisible";
  }
}
console.log(checkDivisible(15));