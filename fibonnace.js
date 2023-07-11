let sum = 0;
let previousNumber = 0;
let nextNumber = 1;

// anterior proximo soma 0 1 1 2 3 5

const value = 20;

for (let i = 0; i < value; i++) {
  sum = previousNumber + nextNumber;
  previousNumber = nextNumber;
  nextNumber = sum;
  console.log(previousNumber);
}
