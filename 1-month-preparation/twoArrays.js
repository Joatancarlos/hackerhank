function twoArrays(k, A, B) {
  const ASorted = A.sort((a, b) => a - b);
  const BSorted = B.sort((a, b) => b - a);
  const isMoreThanK = ASorted.every((a, index) => a + BSorted[index] >= k);
  return isMoreThanK ? "YES" : "NO"
}

twoArrays(10, [1, 2, 2, 1], [3, 3, 3, 4])