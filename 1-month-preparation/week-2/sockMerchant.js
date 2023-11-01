function sockMerchant(n, ar) {
  const arSorted = ar.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < n;) {
    if (arSorted[i] === arSorted[i + 1]) {
      count++;
      i += 2;
    } else {i++}
  }
  console.log(arSorted);
  console.log(count);
  return count;
}

sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5])