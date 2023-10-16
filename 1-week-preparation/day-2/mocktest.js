function flippingMatrix(matrix) {
  let col = [];
  for (let i = 0; i < matrix.length; i++) {
    col.push(matrix[i][2])
  }
  col.reverse()
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][2] = col[i]
  }
  matrix[0].reverse()
  let uppLeftQuad = [matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1]];
  let sum = 0;
  for (let i = 0; i < uppLeftQuad.length; i++) {
    sum += uppLeftQuad[i]    
  }
  return sum;
}

flippingMatrix([
  [112, 42, 83, 119],
  [56, 125, 56, 49], 
  [15, 78, 101, 43],
  [62, 98, 114, 108],
])