// find the shortest word in a string
function findShort1(s) {
  let arr = s.split(" ")
  let shortest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i]
    }
  }
  return shortest.length
}

console.log(findShort1("bitcoin take over the world maybe who knows perhaps"))

// Completed in 1ms
/******************************************************* */

function findShort2(s) {
  let arr = s.split(" ")
  return arr.reduce((a, b) => a.length <= b.length ? a : b).length
}
console.log(findShort2("bitcoin take over the world maybe who knows perhaps"))
// Completed in 1ms

/******************************************************* */
function findShort(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}

/******************************************************* */

const findShort = (s) => {
  return s.split(' ').sort((a, b) => b.length - a.length).pop().length;
}

