// Create a new function called "efficient" below the "msytery" function that returns
// the same value as the mystery function. However, the efficient function
// should have only one line of code inside its body instead of 4 lines of code,
// like the mystery function has.
var c = mystery(3, 4, 5)
function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}

console.log(c)

var d = efficient(3, 4, 5)
function efficient(e, f) {
  return c;

}

console.log(d)
