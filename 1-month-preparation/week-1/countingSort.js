const mock = require('./countingSort.mock')
function countingSort(arr) {
  let zerosArr = Array(100).fill(0)
  for (let num of arr) {
    zerosArr[num]++
  }
  return (zerosArr);
}
console.time()
countingSort(mock)
console.timeEnd()

// function countingSort(arr) {
//   let zerosArr = arr.map((num) => num * 0)
//   for (let i = 0; i < arr.length; i++) {
//     zerosArr[arr[i]]++
//   }
//   console.log(zerosArr);
// }