// sortear numeros aleatorios e armazenar no array
function arr(arrayLength: number) {
  const array: Array<number> = [];

  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    array.push(randomNumber);
  }
  array.sort((a, b) => a - b);
  return array;
}
const sortedArray = arr(10);

// Binary Search
function binarySearch(array: number[], target: number): number | string {
  let begin = 0;
  let end = array.length - 1;

  // O algoritmo de busca binária
  while (begin <= end) {
    const middle = Math.floor((begin + end) / 2);

    // Verifica se o valor de destino foi encontrado
    if (target === array[middle]) {
      return `Está no índice ${middle}`;
    } else if (target < array[middle]) {
      // Se o valor de destino for menor, ajusta o índice final para buscar na metade inferior
      end = middle - 1;
    } else {
      // Se o valor de destino for maior, ajusta o índice inicial para buscar na metade superior
      begin = middle + 1;
    }
  }

  // Se o valor de destino não for encontrado, retorna -1
  return -1;
}

console.log(binarySearch([1, 37, 48, 54, 59, 64, 65, 66, 83, 87], 87)); // Está no índice 8

const value = binarySearch([1, 37, 48, 54, 59, 64, 65, 66, 83, 87], 8);

if (value === -1) {
  console.log("Valor nao encontrado");
}
