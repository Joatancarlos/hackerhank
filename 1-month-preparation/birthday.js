function birthday(s, d, m) {
  let ways = 0;
  for (let i = 0; i < s.length; i++) {
    const slicePerMonth = s.slice(i, i + m);
    const sumSquare = slicePerMonth.reduce((acc, curr) => acc + curr);
    if(sumSquare === d) ways++
  }
  return ways;
}

console.time()
birthday([4], 4, 1)
console.timeEnd()
