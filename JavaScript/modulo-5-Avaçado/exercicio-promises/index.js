function imc(peso, altura) {
    return calculoImc = new Promise( (resolved, rejected) => {
        if(typeof peso != `number` || typeof altura != `number`) {
            if( typeof altura != `number`) {
                rejected(`[ERRO], Valor informado para ALTURA NÃO é um Número.`)
            } else {
                rejected(`[ERRO], Valor informado para PESO NÃO é um Número.`)
            }
        } else {
            let alturaTotal = altura*altura
            resolved(peso / alturaTotal)
        }
    })
}

function resultado(peso, altura) {
    setTimeout( () => {
        imc(peso,altura).then( (result) => {
            if(result < 18.5) {
                console.log(`Seu IMC foi de: ${result} = MAGREZA`)
                return
            }
            if (result >= 18.5 && result <= 24.9) {
                console.log(`Seu IMC foi de: ${result} = NORMAL`)
                return
            }
            if (result >= 25 && result <= 29.9) {
                console.log(`Seu IMC foi de: ${result} = SOBREPESO`)
                return
            }
            if (result >= 30 && result <= 39.9) {
                console.log(`Seu IMC foi de: ${result} = OBESIDADE`)
                return
            }
            if (result >= 40) {
                console.log(`Seu IMC foi de: ${result} = OBESIDADE GRAVE`)
                return
            }
        }).catch( (error) => {
            console.log(`a promise foi rejeitada pelo Motivo: ${error}`)
        }).finally ( () => {
            setTimeout( () => {
                console.log(`A aplicação foi Encerrada`)
            }, 1000 * 2)
        })
    }, 1000 * 3)

    console.log(`a segunda funçao foi chamada`)
}

resultado(70,1.80)