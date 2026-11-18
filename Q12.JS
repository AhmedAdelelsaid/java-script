function myPromise() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Success");
    }, 3000);
  });
}
myPromise().then(function(msg) {
  console.log(msg);
});