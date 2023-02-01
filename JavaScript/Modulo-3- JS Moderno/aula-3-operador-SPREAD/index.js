const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const string = `Olá, Mundo, este é o operador SPREAD`

console.log(...array)

console.log(...string)


//tranformar uma STRING em um ARRAY
const stringToArray = [...string]
console.log(stringToArray)

//copiar ou clonar um array sem afetar o orignal 
const copyArray = [...array]
copyArray.pop()
copyArray.pop()
console.log({copyArray, array})