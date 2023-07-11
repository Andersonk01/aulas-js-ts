const currentYear = new Date().getFullYear()
type SexoProps = 'Mulher' | 'Homen'

function verifyPeople(sexo: SexoProps, years: number): string {
  if (years < 1000 || years > 9999)
    throw new Error("O 'Ano' de Nascimento deve ter 4 dígitos.")

  const valueConvert = currentYear - years
  const valueAge = valueConvert.toString()

  return `${sexo} de aproximadamente ${valueAge} anos de idade`

  return 'Escolha o Sexo e o Ano de Nascimento'
}
const result1 = verifyPeople('Homen', 2010)
const result2 = verifyPeople('Mulher', 2000)
const result3 = verifyPeople('Mulher', 100)

console.log(result1) // Homen de aproximadamente 13 anos de idade
console.log(result2) // Mulher de aproximadamente 23 anos de idade
console.log(result3) // O 'Ano' de Nascimento deve ter 4 dígitos.

// if (sexo === 'Mulher') {
//   return `Mulher de aproximadamente ${valueAge} anos de idade`
// } else if (sexo === 'Homen') {
//   return `Homen de aproximadamente ${valueAge} anos de idade`
// }
// return `${sexo === 'Mulher' ? 'Mulher' : 'Homen'} de aproximadamente ${valueAge} anos de idade`;
