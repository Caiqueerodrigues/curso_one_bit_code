function calcular() {
    const numero = Number(prompt(`Digite um número para ver a TABUADA:`))
    let resultado = ``

    for (indice = 0; indice <= 20; indice++) {
        resultado += `${numero} X ${indice} = ` + numero * indice + '\n'
    }
    alert(`a Tabuada do ${numero} é: \n ${resultado}`)
}

function cacador() {
    let palavra = String(prompt(`Digite uma palavra para testar:`))
    let invertida = ''

    for (indice = palavra.length - 1;indice >= 0; indice--) {
        invertida += (`${palavra[indice]}`)
    }
    if (palavra === invertida) {
        alert(`PARABÉNS, Achamos um PALÍNDROMO`)
    } else {
        alert(`Veja a DIFERENÇA:\n
        Lida corretamente, da DIREITA para esquerda\n 
        ${palavra} \n
        Lida da ESQUERDA para a direita \n
        ${invertida}`)
    }
}


