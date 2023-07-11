// Validar alteracoes em objetos

const p = {
  id: 1,
  name: 'Anderson',
  age: 22,
}

const person = new Proxy(p, {
  set(target, key, value) {
    if (key === 'age' && value < 0) throw new Error('Idade menor que zero')

    target[key] = value
  },
})

person.age = 10
console.table(person)

person.age = -20
console.table(person)
