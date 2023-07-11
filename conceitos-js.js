//! Capitulo
//* Topico
//? Diferenciacao

//! Rest Operator

// const user = {
//   name: "Anderson",
//   age: 1,
//   address: { pais: "BR", state: "MA" },
// };

// const { name, age, ...rest } = user;
// console.log(rest);

//! Pulando um numero
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [ first, second, , ...restArray ] = arr;
// console.log(restArray);

//! Short Syntax

// const name = "Anderson";
// const age = 22;

// const user = {
// name: name,
// age: age,
// o mesmo que:
//   name,
//   age,
// };

//! Optional Chaining

// const user = {
//   name: "Anderson",
//   age: 1,
//   address: {
//     pais: "BR",
//     state: {
//       // estado: "MA",
//       city: "Caxias",
//     },
//     ShowReturnOK() {
//       return "ok";
//     },
//   },
// };
// console.log(user.address.state.estado ?? "Nao informado");
// o Ponto de interrogacao antes da 'variavel' indica q "se existir continua senao break"
// vale pra metodos
// console.log(user.address.state?.estado ?? "Nao informado");

// console.log(user.address.ShowReturnOK?.());

//* uma forma de trazer um valor pela key
// const key = "name";
// console.log(user[key]);

//! Array Methods

const arr = [1, 2, 3, 4, 5];
//todo: O map() nos traz um retorno, ja no ForEach nao

// Exemplo:

// arr.forEach((i) => {
//   console.log(i);
// });
//* retorno sera undefine desse codigo:
// const novoArray = arr.forEach((i) => {
//   return i * 2;
// });
// console.log(novoArray)

//* nao tem como com o map() fazer alguns tipos de filtros, exclusao...
//* sempre vai ser um array do mesmo tamanho,
//* ou seja, eu uso o map() quando quero transforma meu array em outra informacao porem em outro array
// const novoArrayMap = arr.map((i) => {
//   if (i % 2 === 0) {
//     return i * 10;
//   }
//   return `value Normal: ${i}`;
// });
// console.log(novoArrayMap);

//#region Important Methods:
//! Important Methods:
//? map(), filter(), every(), some(), find(), findIndex(), reduce()

//! filter(): ele 'corta' o array e traz so a informacao desejada
//  ou seja, me retorna parte do array se essa condicao for true or false
// const filteredArray = arr
//   .filter((i) => i % 2 !== 0) // numeros impares
//   .map((i) => "impar multiplicado: " + i * 10); // concatenando filter com o map()
// console.log(filteredArray);

//! every(): retorna um boleano, ex: traz um 'true' se todos os items satisfazem uma condicao

// const everyArray = arr.every((i) => typeof i === "number"); // verifica se todos sao do tipo number
// console.log(everyArray);

//! some(): retorna um boleano, verifica se pelo menos um satisfaz aquela condicao
// const someArray = arr.some((i) => typeof i !== "number"); // verifica se pelo menos um item diferente de number
// console.log(someArray);

//! find(): serve para encontrar '1 item' do array, percorre do comeco ao fim
//  caso nao encontre, tras undefined
// const findArray = arr.find((i) => i % 2 === 0); // ele encontra o primeiro elemento q satisfaz essa condicao, no caso 2
// console.log(findArray);

//! finINdex(): retorna o indice do item, ou seja, qual posicao ele esta
// const findIndexArray = arr.findIndex((i) => i === 4);
// console.log(findIndexArray);

//! reduce(): usado para criar uma nova estrutura de dados... 'reduze o meu array a algo'
// primeiro parametro: funcao para cada elemento. second: item/informacao em si do array
// const reduceArray = arr.reduce((acc, item) => {
//   console.log(acc );
//   return item
// }, 0);

//#endregion

//! Template Literals: crase ``
// const fullName = `${firtName} + ${secondName}`

//! Tagged Template Literals:
// estudar

//! Promises:
// metodos .then() / .catch

fetch("https://api.github.com/users/Andersonk01")
  .then((response) => {
    response.json().then((body) => console.log(body));
  })
  .catch((err) => console.log("o erro foi: " + err));
