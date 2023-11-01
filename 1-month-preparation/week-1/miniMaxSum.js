function miniMaxSum(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  let maxSum = 0;
  for (let i = 1; i < arr.length; i++) {
        maxSum += arr[i];
  }
  arrSorted.pop();
  const minSum = arrSorted.reduce((acc, curr) => acc + curr);
  console.log(minSum, maxSum);
};
console.time()
miniMaxSum([1, 3, 5, 7, 9]);
console.timeEnd()