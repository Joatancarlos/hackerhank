function pangrams(s) {
  const sWithoutSpaces = s.replace(/ /g, '').toLowerCase();;
  const alphabet = 'abcdefghijklmnoprstuvwxyz'.split('');
  const isPangram = alphabet.every((lt) => sWithoutSpaces.includes(lt));
  return isPangram ? 'pangram' : 'not pangram';
}
const pangram =  'We promptly judged antique ivory buckles for the next prize';
const notPangram = 'We promptly judged antique ivory buckles for the prize';
console.time()
pangrams(notPangram)
console.timeEnd()

// Versão não refatorada
// function pangrams(s) {
//   const alphabet = 'abcdefghijklmnoprstuvwxyz'.split('');
//   const arrS = s.split('').filter((letter) => letter !== ' ');
//   const isPangram = alphabet.every((lt) => arrS.some((lts) => lts.toLowerCase() === lt))
//   return isPangram ? 'pangram' : 'not pangram';
// }