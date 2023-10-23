function diagonalDifference(arr) {
  let ltlDiagonal = 0;
  let rtlDiagonal = 0;

  for(let i = 0; i < arr.length; i++) {
    ltlDiagonal += arr[i][i]
    rtlDiagonal += arr[arr.length - 1 - i][i]
  }
  const absolutValue = Math.abs(ltlDiagonal - rtlDiagonal);
  console.log(absolutValue);
  return absolutValue
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
])