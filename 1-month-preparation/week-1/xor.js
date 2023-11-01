function XOR(str1, str2) {
  let xor = '';
  for (let i = 0; i < str1.length; i++) {
    if(str1[i] === str2[i]) xor += '0';
    else xor += '1';
  }
  console.log(xor)
}

XOR('01010', '10101')