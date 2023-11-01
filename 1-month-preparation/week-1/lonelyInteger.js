function lonelyinteger(a) {
  let resultado = 0;
  for (const num of a) {
    resultado ^= num;
  }
  return resultado
}
console.time()
lonelyinteger([1, 2, 3, 4, 3, 2, 1])
console.timeEnd()