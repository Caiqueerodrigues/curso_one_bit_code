function cadastro (){
    let nome = prompt(`Digite Seu Nome:`)
    let sobrenome = prompt(`Agora seu Sobrenome:`)
    let estudo = prompt(`Qual seu campo de estudo ?`)
    let nascimento = prompt(`Digite agora seu ANO de nascimento`)
        let resultado = 2022 - nascimento

        alert(`Seu nome é ${nome} ${sobrenome} Você estuda ${estudo} e sua idade é ${resultado}`)
}