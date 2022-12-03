//  isSquare way1
var isSquare1 = function (n) {
  if (n < 0) {
    return false
  } else {
    for (let i = 0; i <= n; i++) {
      if (i * i == n) {
        return true
      }
    }
    return false
  }
}
console.log(isSquare1(100));
// ====> Completed in 12ms

/********************************************************* */

//  isSquare way2
var isSquare2 = function (n) {
  return Math.sqrt(n) % 1 === 0
}

console.log(isSquare2(100));
// ====> Completed in 2ms

/********************************************************* */
//  isSquare way3
var isSquare3 = function (n) {
  return Number.isInteger(Math.sqrt(100))
}

console.log(isSquare3(100));
