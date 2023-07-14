function getArray(items: any[]): any[] {
  return new Array().concat(items)
}

let numberArray = getArray([5, 10, 15, 20])
let stringArray = getArray(['Cats', 'Dogs', 'Birds'])
numberArray.push(25)
stringArray.push('Rabbits')
numberArray.push('Not a number')
stringArray.push(30)

console.log(numberArray) // [5, 10, 15, 20, 25, "Not a number"]
console.log(stringArray) // ["Cats", "Dogs", "Birds", "Rabbits", 30]

// Generics
function sortedAsc(a, b) {
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
}

function sortedDesc(a, b) {
  if (a > b) {
    return -1
  } else if (b < a) {
    return 1
  } else return 0
}

function getArrayGeneric<T>(
  items: T[],
  orderType?: 'ascending' | 'descending'
): T[] {
  // ordenar array
  if (orderType === 'ascending') items.sort(sortedAsc)
  else if (orderType === 'descending') items.sort(sortedDesc)

  return new Array<T>().concat(items)
}

let numbersArray = getArrayGeneric<number>([50, 10, 15, 40, 20, 5], 'ascending')
let stringsArray = getArrayGeneric<number>(
  [50, 10, 15, 40, 20, 5],
  'descending'
)

// console.log(numbersArray) // [ 5, 10, 15, 20, 40, 50 ]
// console.log(stringsArray) // [ 50, 40, 20, 15, 10, 5 ]

//* Variaveis de varios tipos
//* Restrições genéricas para limitar tipos
//* Usar proteções de tipo com genéricos

type ValidTypes = string | number

function identity<T extends ValidTypes, U>(value: T, message: U) {
  let result: ValidTypes = '' // Error
  let typeValue: string = typeof value

  if (typeof value === 'number') {
    result = value + value
  } else if (typeof value === 'string') {
    result = value + value
  }

  console.log(
    `A mensagem: ${message} e a funcao retorna um tipo '${typeValue}' com valor de ${result}`
  )

  return result
}

let returnNumber = identity<number, string>(100, 'Hello!')
let returnString = identity<string, string>('100', 'Hola!')
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!')  // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

// returnNumber = returnNumber * 100 // 10000
// returnString = returnString * 100 // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100 // Error: Type 'number' not assignable to type 'boolean'

//* usando keyof para exreair chave
function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key]
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 }
console.log(getPets(pets1, 'parrots')) // Returns 6

let numberValue = identity<number, string>(100, 'Hello')
let stringValue = identity<string, string>('100', 'Hello')

console.log(numberValue)
console.log(stringValue)

//* Interface Generica

interface IdentifyType<T, U> {
  value: T
  message: U
}

let identifyNumber: IdentifyType<number, string> = {
  value: 1,
  message: 'Anderson',
}
let identifyString: IdentifyType<string, number> = {
  value: 'Kauer',
  message: 2,
}
console.table(identifyNumber)

//* interface genérica como um tipo de função
interface ProcessIdentityType<T, U> {
  // assinatura genérica de um método,
  (value: T, message: U): T
}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message)
  return value
}

let proces: ProcessIdentityType<number, string> = processIdentity
let returnNumber1 = proces(123, 'Anderson') // Hello!

//* interface genérica como um tipo de classe
//* class genérica sem interface
interface ProcessIdentityClassType<T, U> {
  value: T
  message: U
  process(): T
}
class processIdentityClass<X, Y> implements ProcessIdentityClassType<X, Y> {
  value: X
  message: Y

  constructor(value: X, message: Y) {
    this.value = value
    this.message = message
  }
  process(): X {
    console.log(this.message)
    return this.value
  }
}

let processAnderson = new processIdentityClass<number, string>(22, 'Anderson') // processIdentityClass { value: 22, message: 'Anderson' }
// processor.value = '100';       // Type check error

//class genérica sem interface
class processIdtwo<T, U> {
  private _value: T
  private _message: U

  constructor(val: T, mess: U) {
    this._value = val
    this._message = mess
  }
  getIdentity(): T {
    console.log(this._message)
    return this._value
  }
}
let processor = new processIdtwo<number, string>(100, 'Hello')
console.log(processor.getIdentity())
