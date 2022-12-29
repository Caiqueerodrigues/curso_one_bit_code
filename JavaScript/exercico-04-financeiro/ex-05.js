function menu(value) {
    const div = document.getElementById(`menuInterativo`)
    do {
        switch(value) {
            case 1: 
                alert(`Você escolheu a opção número UM`)
                break
            case 2: 
                alert(`Você escolheu a opção número DOIS`)
                break
            case 3: 
                alert(`Você escolheu a opção número TRÊS`)
                break
            case 4: 
                alert(`Você escolheu a opção número QUATRO`)
                break
            case `encerrar`:
                alert(`O programa está sendo ENCERRADO!`)
                div.style.display=`none`
        }
    } while (value === null)
}

function financeiro (value) {  
    if (value === 0){
        let valorInicial = Number(prompt(`Digite aqui o VALOR inicial em DINHEIRO:`))
        resultado = valorInicial
        document.getElementById(`iniciar`).style.display=`none`
    }else if(resultado > 0) {
        switch(value) {
            case 1: 
                let somar = Number(prompt(`Digite aqui o valor que quer ADICIONAR:`))
                resultado += somar
                break
            case 2:
                let tirar = Number(prompt(`Digite aqui o valor que quer SUBTRAIR:`))
                resultado -= tirar
                break
            case 3:
                alert(`Após todas as operações realizadas restaram-lhe \n ${resultado} Reais`)
        }
    } else {
            alert(`[ERRO] Seu saldo está NEGATIVO, Atualize a página e inicie novamente`)
        }
}