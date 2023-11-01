function matchingStrings(strings, queries) {
  const macthes = queries.map((q) => {
    let qtd = 0;
    for (let i = 0; i < strings.length; i++) {
      if(strings[i] === q) qtd++
    }

    return qtd;
  });
  return macthes
}
console.time()
matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])
console.timeEnd()