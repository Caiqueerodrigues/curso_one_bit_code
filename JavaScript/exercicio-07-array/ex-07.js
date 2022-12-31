function dr(value) {
    let pacientes = [`Caique`, `Rodrigo`, `Felipe`, `Tainara`,`Rodrigues`]
    let resposta = ``

    if (value === 0) {
        resposta = prompt(`Quer adicionar um paciente na fila? (Sim/Nao)`)
    }      

    if (value === `consultar`) {
        let respostaConsulta = prompt(`Quer Chamar o próximo paciente para a consulta? (Sim/Nao)`)
        if (respostaConsulta === `sim`) {
            for (i2 = 0; pacientes.length > 0; i2++) {
                let pacienteRemovido = pacientes.shift(i2)
                alert(`O próximo paciente a consultar é o ${pacienteRemovido}`)
                respostaConsulta = prompt(`Quer Chamar o próximo paciente para a consulta? (Sim/Nao)`)
                if (respostaConsulta === `nao` || respostaConsulta ``) {
                    alert(`Esta é a fila \n ${pacientes}`)
                    break
                }
            }
        }
        if (respostaConsulta === `nao`) {
            alert(`Aguarde o Médico chamar o próximo!`)
        }
    }

    while(resposta === `sim`) { 
        let adicionarPaciente = prompt(`Digite o nome do paciente:`)
        pacientes.push(adicionarPaciente)
        resposta = prompt(`Quer adicionar um paciente na fila? (Sim/Nao)`)
    }

    if (resposta === `nao`) {
        for (i = 0; pacientes.length > i; i++) {
            let resultado = alert('Olá, esta é a fila \n' + i + ' - '+ pacientes[i])
        } 
    } 

    if (value === `fim`) {
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
    } else  if (value === `fim`) {
        document.getElementById(`baralho`).style.display=`none`
    }
    while (resposta === `sim` || value === `adc`) {
        adicionarCarta = prompt(`Qual o nome e o nipe da carta que quer adicionar?`)
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