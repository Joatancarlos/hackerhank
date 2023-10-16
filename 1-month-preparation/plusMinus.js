const plusMinus = (arr) => {
  let neg = 0, pos = 0, zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) neg++
    else if(arr[i] > 0) pos++
    else zero++
  };
  const arrLength = arr.length;
  const arrVariaveis = [pos, neg, zero];
  arrVariaveis.forEach((item) => {
    const proportion = (item / arrLength).toFixed(6);
    console.log(proportion);
  })
};
console.time();
plusMinus([-4, 3, -9, 0, 4, 1])
console.timeEnd();