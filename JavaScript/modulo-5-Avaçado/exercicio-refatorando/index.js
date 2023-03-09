async function imc(peso, altura) {
    if(typeof peso != `number` || typeof altura != `number`) {
        if( typeof altura != `number`) {
            return Promise.reject(`[ERRO], Valor informado para ALTURA NÃO é um Número.`)
        } else {
             return Promise.reject(`[ERRO], Valor informado para PESO NÃO é um Número.`)
        }
    } else {
        return peso / (altura * altura) 
    }
}

async function resultado(peso, altura) {
    try {
        console.log(`calculando IMC peso: ${peso} e altura ${altura}`)
        const resultadoImc = await imc(peso,altura)
        if(resultadoImc < 18.5) {
            console.log(`Seu IMC foi de: ${resultadoImc} = MAGREZA`)
        } else if (resultadoImc <= 24.9) {
            console.log(`Seu IMC foi de: ${resultadoImc} = NORMAL`)
        } else if (resultadoImc <= 29.9) {
            console.log(`Seu IMC foi de: ${resultadoImc} = SOBREPESO`)
        } else if (resultadoImc <= 39.9) {
            console.log(`Seu IMC foi de: ${resultadoImc} = OBESIDADE`)
        } else {
            console.log(`Seu IMC foi de: ${resultadoImc} = OBESIDADE GRAVE`)
            return
        }
    } 
    catch(error) {
        console.log(`a promise foi rejeitada pelo Motivo: ${error}`)
    } 
    finally {
        setTimeout( () => {
            console.log(`A aplicação foi Encerrada`)
        }, 1000 * 2)
    }
}

resultado(70,1.80)
resultado(`1`,1.80)
resultado(70,1.54)
resultado(89,`1.80`)
resultado(100,1.80)
