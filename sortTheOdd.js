// Sort the odd
function sortArray(array) {
  //  create array with odd numbers and sort them ====> [1 , 3 , 5 ]
  let odd = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
  // map the array and replace the odd numbers with the sorted odd numbers
  return array.map((n) => (n % 2 ? odd.shift() : n));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));