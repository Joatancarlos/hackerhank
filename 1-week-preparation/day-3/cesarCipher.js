function caesarCipher(s, k) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let alphabetUpper = alphabet.toUpperCase()
  let newString = ''
  let newLetter = ''
  let newIndex = 0
  for (let i = 0; i < s.length; i++) {
    if (alphabet.includes(s[i])) {
      newIndex = alphabet.indexOf(s[i]) + k
      if (newIndex > 25) {
        newIndex = newIndex % 26
      }
      newLetter = alphabet[newIndex]
      newString += newLetter
    } else if (alphabetUpper.includes(s[i])) {
      newIndex = alphabetUpper.indexOf(s[i]) + k
      if (newIndex > 25) {
        newIndex = newIndex % 26
      }
      newLetter = alphabetUpper[newIndex]
      newString += newLetter
    } else {
      newString += s[i]
    }
  }
  return newString
}
// Essa solução é a do Copilot
caesarCipher('middle-Outz', 2) // cde

// function caesarCipher(s, k) {
//   const alphabetArray = Array.from('abcdefghijklmnopqrstuvwxyz');
//   const upperCaseArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
//   const stringArray = Array.from(s);
//   const newString = stringArray.map((letter) => {
//       const letterIndex = alphabetArray.findIndex((lt) => lt === letter)
//       const upperCaseIndex = upperCaseArray.findIndex((lt) => lt === letter)
//       if(letterIndex !== -1) {
//           if(letterIndex + k > 25 && letterIndex < 26) {
//               return alphabetArray[letterIndex + k - 26];
//           }
//           return alphabetArray[letterIndex + k];
//       }
//       if (upperCaseIndex !== -1) {
//           if(upperCaseIndex + k > 25 && upperCaseIndex < 26) {
//               return upperCaseArray[upperCaseIndex + k - 26];
//           }
//           return upperCaseArray[upperCaseIndex + k];
//       }
        
      
//       return letter;
//   });
  
//   return newString.join('');
// }

// Essa é a minhas solução, porém não passa em todos os testes