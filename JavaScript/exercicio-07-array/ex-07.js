function dr(value) {
    let pacientes = []
    let resposta = null

    if (value === 0) {
        resposta = prompt(`Quer adicionar um paciente na fila? (Sim/Nao)`)

        while(resposta === `sim`) { 
            pacientes.push(prompt(`Digite o nome do paciente:`))
            resposta = prompt(`Quer adicionar um paciente na fila? (Sim/Nao)`)
        }
        
    } else if (resposta === `nao`) {
            alert(`Ta bom, obigado, esta é a fila \n ${pacientes}`)

    } else if (value === `fim`) {
        document.getElementById(`dr`).style.display=`none`
    }
}

function  baralho(value) {
    let cartas = [`A❤️`, `4♠️`, `8♠️`, `1♦️`]
    let resposta = String(null)
    let adicionarCarta = ` `

    if (value === 1) {
        alert(cartas)
        resposta = prompt(`Quer adicionar uma carta? (Sim/Nao)`)
    }
    while (resposta === `sim` || value === `adc`) {
        adicionarCarta += prompt(`Qual o nome e o nipe da carta que quer adicionar?`) + (',')
        cartas.unshift(adicionarCarta)
        for (i = 0; cartas.length > i; i++) {
            alert(`${i} - ${cartas[i]}`)
        }
        resposta = prompt(`Quer adicionar mais uma carta? (Sim/Nao)`)
    }
    if (resposta === `nao` || value === `puxar`) {
        let respostaPuxar = prompt(`Quer puxar uma carta? (Sim/Nao)`)
            if (respostaPuxar === `sim`) {
                let cartaRemovida = cartas.shift()
                alert(`A carta removida foi ${cartaRemovida}`)
            } else  {
                for (i = 0; cartas.length > i; i++) {
                    alert(`${cartas.indexOf(i)} - ${cartas[i]}`)
                }
            }
    } 
}