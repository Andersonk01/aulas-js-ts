/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {
  private _data: Array<T> = new Array(10)

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item
    } else {
      alert('Index is greater than 10')
    }
  }
  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index]
    } else {
      return
    }
  }
}

let cities = new DataStore()

cities.AddOrUpdate(0, 'Mumbai')
cities.AddOrUpdate(1, 'Chicago')
// cities.AddOrUpdate(11, 'London') // item not added

console.log(cities.GetData(1)) // returns 'Chicago'
console.log(cities.GetData(12)) // returns 'undefined'

// TODO Test items as numbers.
let testNumbers = new DataStore<number>()
testNumbers.AddOrUpdate(2, 10)
testNumbers.AddOrUpdate(1, 90)

console.log(testNumbers.GetData(1))

// TODO Test items as objects.
type Pets = {
  name: string
  breed: string
  age: number
}
let testObjects = new DataStore<Pets>()

testObjects.AddOrUpdate(0, { name: 'Cat', breed: 'not', age: 2 })
testObjects.AddOrUpdate(1, { name: 'Dog', breed: 'not', age: 3 })

console.table(testObjects.GetData(0))
console.table(testObjects.GetData(1))
