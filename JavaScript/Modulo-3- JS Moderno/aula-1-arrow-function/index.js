function normal(a,b) {
    return a+b
}
console.log(`A soma normal é: ${normal(2,6)}`)


const anonimous = function (a,b) {
   return a+b
}
console.log(`A soma Anonima é: ${normal(3,7)}`)


let arrow = (a,b) =>  a+b
console.log(`A soma ARROW é: ${arrow(5,9)}`)

let subtracao = (a, b) => a-b 
console.log(subtracao(10,6))

let double = n => `O dobro de ${n} é ${n*2}`
console.log(double(10))