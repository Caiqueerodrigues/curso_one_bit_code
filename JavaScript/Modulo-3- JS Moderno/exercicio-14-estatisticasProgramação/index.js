const visorResultado = document.getElementById(`resultado`)


const mediaSimples = (...numbers) => {
    console.log(numbers)
    let soma = numbers.reduce((accum, num) => accum + num, 0)
    console.log(soma)
    console.log(numbers.length)
    visorResultado.innerText =`A média SIMPLES é: ${soma/numbers.length}`
    return
}


const mediaPonderada= (... entradas) => {
    const soma = entradas.reduce((accum, {number, peso}) => accum + (number * (peso ?? 1)), 0)
    const somaPesos = entradas.reduce((accum, entradas) => accum + (entradas.peso ?? 1), 0)
    visorResultado.innerText = `A soma PONDERADA é: ${soma/somaPesos}`
}

//minha RESOLUCAO
const mediana = (...numbers) => {
    const numberOrdenad = [...numbers].sort((a,b) => a-b)
    const lenght = Math.ceil((numbers.length /2) -1)
        if (numbers.length %2 !== 0){
            visorResultado.innerText = `A MEDIANA é: ${numberOrdenad[lenght]}`
        } else { 
            let resultadoMediana = (numberOrdenad[lenght] + numberOrdenad[lenght+1]) /2
            visorResultado.innerText = `A MEDIANA é: ${resultadoMediana}`
        }
    console.log({numbers}, lenght, numbers.length%2)
}

const moda = (...numbers) => {
    const quantidades = numbers.map(num => [
        num,
        numbers.filter(n => num ===n).length
    ])
    //ordem descrecente
    quantidades.sort((a,b) =>{
        b[1] - a[1]
    })
    visorResultado.innerText = `O número que mais se REPETIU é: ${quantidades[0][0]}`
}