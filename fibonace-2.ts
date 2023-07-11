function fibonacciSequence(n: number): number[] {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Invalid argument: n must a positive integer");
  }
  const sequence: number[] = [];
  let current = 0;
  let next = 1;
  // ! 0 1 1 2 3 5 8
  while (current <= n) {
    sequence.push(current);
    const sum = current + next;
    current = next;
    next = sum;
  }
  return sequence;
}
try {
  const limit = 10;
  const sequence = fibonacciSequence(limit);
  console.log(`Sequencia de Fibonacci até ${limit}: ${sequence}`);
} catch (error) {
  console.error(error);
}

// TODO: Implementar no react.js para criar uma imagem com pontos
// TODO: Usar pontos vermelhos(div) para ficar visivel
// TODO: Centralizar no body a div principal

//* Renamed the function to fibonacciSequence to better reflect what it does.
//* Added an error check at the beginning of the function to ensure that n is a positive integer.
//* Changed the implementation of the function to use a while loop instead of a for loop to generate the sequence more efficiently.
//* Changed the implementation of the function to use two variables, current and next, to keep track of the current number in the sequence and the next number in the sequence, respectively. This avoids the need for an array to keep track of the sequence.
//* Used Number.isInteger() to ensure that n is an integer.
