function flippingBits(n) {
  return (n ^ 4294967295) >>> 32;
  // Essa eu peguei a resposta de "discussions". Quando se trata de comparadores de bits eu não tenho muito domínio.
}

flippingBits(0)

// - n ^ 4294967295: O operador ^ é o operador XOR (OU exclusivo), que realiza uma operação bitwise XOR entre n e 4294967295. 4294967295 é uma máscara binária que consiste em todos os bits definidos como 1. Em representação binária, 4294967295 é 11111111111111111111111111111111. Quando você executa a operação XOR com essa máscara, todos os bits de n são invertidos.

// - >>> 32: Em seguida, a operação de deslocamento à direita sem sinal é usada com >>> 32. Isso desloca todos os bits em n ^ 4294967295 32 posições para a direita, preenchendo os bits à esquerda com zeros. O resultado é o valor invertido dos bits originais em n.