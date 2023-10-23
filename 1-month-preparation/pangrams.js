function pangrams(s) {
  const arrS = s.replace(/ /g, '').toLowerCase();;
  const alfabet = 'abcdefghijklmnoprstuvwxyz'.split('');
  const isPangram = alfabet.every((lt) => arrS.includes(lt))
  return isPangram ? 'pangram' : 'not pangram';
}
const pangram =  'We promptly judged antique ivory buckles for the next prize';
const notPangram = 'We promptly judged antique ivory buckles for the prize';
console.time()
pangrams(notPangram)
console.timeEnd()

// Versão não refatorada
// function pangrams(s) {
//   const alfabet = 'abcdefghijklmnoprstuvwxyz'.split('');
//   const arrS = s.split('').filter((letter) => letter !== ' ');
//   const isPangram = alfabet.every((lt) => arrS.some((lts) => lts.toLowerCase() === lt))
//   return isPangram ? 'pangram' : 'not pangram';
// }