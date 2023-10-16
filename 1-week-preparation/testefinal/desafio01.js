// participantes agrupados em equipes
// cada equipe tem 2 candidatos
// soma das habilidades devem ser iguais para todas as equipes
// eficiência = produto das habilidades dos candidatos
// objetico: encontrar a soma das eficiências das equipes

function getTotalEfficiency(skill) {
  const skillSorted = skill.sort((a, b) => a - b);
  if (skillSorted.length % 2 !== 0) {
    return -1;
  };
  let maximunHability = skillSorted[0] + skillSorted[skillSorted.length - 1]
  const separeted = [];

  for (let i = 0; i  < skillSorted.length / 2; i++) {
    if(maximunHability !== (skillSorted[i] + skillSorted[skillSorted.length - 1 - i])) {
      return -1;
    } else {
      separeted.push([skillSorted[i], skillSorted[skillSorted.length - 1 - i]])
    }
  }
  let sum = 0;
  for (let i = 0; i < separeted.length; i++) {
    sum += separeted[i].reduce((acc, curr) => acc * curr)
  }
  return sum;
}

console.log(getTotalEfficiency([2, 1, 1, 4, 3, 5]))


// Refatorada

function getTotalEfficiency(skill) {
  // Verifica se o número de habilidades é par
  if (skill.length % 2 !== 0) {
    return -1;
  }

  // Ordena o array de habilidades
  const skillSorted = skill.slice().sort((a, b) => a - b);

  // Verifica se todas as somas de habilidades adjacentes são iguais
  const targetSum = skillSorted[0] + skillSorted[skillSorted.length - 1];
  for (let i = 0; i < skillSorted.length / 2; i++) {
    if (skillSorted[i] + skillSorted[skillSorted.length - 1 - i] !== targetSum) {
      return -1;
    }
  }

  // Calcula a eficiência total multiplicando as habilidades em pares
  const totalEfficiency = skillSorted.reduce((acc, curr, index) => {
    if (index < skillSorted.length / 2) {
      return acc * curr * skillSorted[skillSorted.length - 1 - index];
    }
    return acc;
  }, 1);

  return totalEfficiency;
}