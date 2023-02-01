function soma (...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

//accum é o acumulador/ acumulado do array


console.log(soma (1,2))