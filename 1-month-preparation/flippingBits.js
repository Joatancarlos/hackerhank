function flippingBits(n) {
  return (n ^ 4294967295) >>> 32;
  // Essa eu peguei a resposta de "discussions". Quando se trata de comparadores de bits eu não tenho muito domínio.
}

flippingBits(0)

// Converter o número para 32 bits
// Inverter os O's para 1's e vice-versa
// Converter o novo conjunto de bits para um número
// Retornar o número