const mediaSimples = (...numbers) => {
    console.log(numbers)
    const soma = numbers.reduce((accum, num) => accum + num, 0)
    return soma/numbers.length
}
console.log(`A média Simpels é : ${mediaSimples(1,2,3,4,5,6,7,8,9,10)}`)

// const mediaPonderada = (...entradas) => {
//     const soma = entradas.reduce((accum, {number, weight})=> accum + (number * weight),0)
//     const weightSoma = entradas.reduce((accum, entry) => accum+ entry.weight, 0)
//     return soma/weightSoma
// }
// console.log(`A média Ponderada é : ${soma(1,2,3,4,5,6,7,8,)}`)