function calcular () {
    let num1 = Number(prompt(`Digite aqui o primeiro Número:`))
        Number(num1)
    let num2 = Number(prompt(`Digite aqui o segundo Número:`))


    let soma = num1 + num2
    let multiplcacao = num1 * num2
    let divisao = num1 / num2
    let divisao2 = num2 / num1
    let subtracao = num1 - num2
    let subtracao2 = num2 - num1

    alert(`A SOMA entre ${num1} e ${num2} é ${soma}`)
    alert(`A MULTIPLICAÇÃO entre ${num1} e ${num2} é ${multiplcacao}`)
    alert(`A DIVISÃO entre ${num1} e ${num2} pode ser ${divisao} ou ${divisao2}`)
    alert(`A SUBTRAÇÃO entre ${num1} e ${num2} pode ser ${subtracao} ou ${subtracao2}`) 
}