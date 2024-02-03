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
