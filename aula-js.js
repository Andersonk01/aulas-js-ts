console.log("anderson");
// * Estrutura de controle
// let monther = 2;

// switch (monther) {
//     case 1:
//         console.log('January')
//         break;
//     case 2:
//         console.log('February')
//         break;
//     case 3:
//         console.log('March')
//         break;
//     default:
//         break;
// }
// * Laco for

// let names = ['anderson', 'kauer', 'santos', 'sousa',]

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     console.log(i);
// }
// * while
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// * do...while
// do {
//     console.log(i); // o codigo é executado pelo menos uma vez
// } while (i < 10);

// * Funcoes js
// argumentos sao variaveis com as quais se supoe que a funcao fara algo
function diplayText(a, b) {
  return a + b;
}
let result = diplayText(2, 2);
console.log(result);

// * Arrow functions
const area = (r) => {
  const PI = 3.14;
  let area = PI * r * r;
  return area;
};
console.log(area(2));
// forma resumida se conter apenas uma instrucao
const area2 = (radiu) => 3.14 * radiu * radiu;
console.log(area2(10));
// forma resumida se nao conter instrucao/argumentos
const area3 = () => console.log("Funcao sem instruncao - tipo void");
area3();

// * Valores padrao para funcoes
function soma(a = 2, b = 2, c = 10) {
  return a + b + c;
}
let results = soma(4, 4);
console.log(results);

// * operadores de espalhamentos e rest

const valores = [2, 2];
console.log(soma(...valores, 4));

// usando o //? rest
function restOparator(x, y, ...z) {
  return (x + y) * z.length;
}
console.log(restOparator(2, 2, 2, 2, "anderson", true));

let a = "1-a";
let b = "2-b";

[a, b] = [b, a]; // fazer swap
console.log(a, b);
// como se fosse tuples
const [name, age, job] = ['Anderson', 22, 'Front-End']
const objNames = {name, age, job}
console.log(objNames);