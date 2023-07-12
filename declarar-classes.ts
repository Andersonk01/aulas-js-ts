// Declarar Classes
class Car implements Vehicle {
  //* Properties
  // Sao dados brutos que são passados para o objeto quando ele é inicializado.
  private _make: string
  private _color: string
  private _doors: number
  private static numberOfCars: number = 0 // properties static

  //* Constructor
  // também é conhecido como o tipo "lado estático"
  // porque inclui membros estáticos da classe.
  constructor(make: string, color: string, doors = 4) {
    this._make = make
    this._color = color
    Car.numberOfCars++ // increments the value of the static property

    if (doors % 2 === 0) this._doors = doors
    else throw new Error('Doors must be en even nmber')
  }

  //* Accessors
  // getters/setters como uma forma de interceptar o acesso a uma propriedade.

  // retorna o valor da propriedade _make.
  get make() {
    return this._make
  }

  // define o valor da propriedade _make como o valor do parâmetro make.
  set make(make) {
    this._make = make
  }

  // parametro color
  get color() {
    return 'The color of the car is ' + this._color
  }
  set color(color) {
    this._color = color
  }

  // parametro doors
  get doors() {
    return this._doors
  }
  set doors(doors) {
    if (doors % 2 === 0) this._doors = doors
    else throw new Error('Doors must be an even number')
  }

  //* Methods
  // descrevem os comportamentos que sua classe pode executar
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
  }
  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`
  }

  public static getNumberOfCars(): number {
    return Car.numberOfCars
  }

  // This function performs work for the other method functions
  protected worker(): string {
    return this._make
  }
}

//#region //* instanced of class and console.log

// let myCar1 = new Car('My Car', 'gray', 2)

// console.log(myCar1.color)
// console.log(myCar1._color) // is private now

// let myCar2 = new Car('Volvo', 'violet', 2)
// console.log(myCar2.doors)
// myCar2.doors = 3 // Doors must be an enven number

// let myCar3 = new Car('Uno', 'gray')
// console.log(myCar3.doors)

// metodos de saida
// console.log(myCar1.accelerate(35))
// console.log(myCar2.brake())
// console.log(myCar3.turn('right'))

// number of class instanced
// console.log(Car.getNumberOfCars())

//#endregion

//* Using Extends

class ElectricCar extends Car {
  //* Properties unique to EletricCar
  private _range: number
  //* Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors)
    this._range = range
  }

  //* Accessors
  get range() {
    return this._range
  }

  set range(range) {
    this._range = range
  }

  // Methods
  charge() {
    console.log(this.worker() + 'is charging')
  }

  //* Overrides the brake method of the Car class
  brake(): string {
    return `${this.worker()} is braking with the regenerative braking system.`
  }
}

let myEletric1 = new ElectricCar('Spark Motors ', 'aqua', 200, 4)
let myEletric2 = new ElectricCar('AK Motors ', 'blue', 400)

console.log(myEletric2.doors)
myEletric1.charge() // return Spark Motors is charging
console.log(myEletric1.brake()) // return Spark Motors  is braking with the regenerative braking system.

//* Declarando a Interface para as classes
interface Vehicle {
  make: string
  color: string
  doors: number
  accelerate(speed: number): string
  brake(): string
  turn(direction: 'left' | 'right'): string
}
