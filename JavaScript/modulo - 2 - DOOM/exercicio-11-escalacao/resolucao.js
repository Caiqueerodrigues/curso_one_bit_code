

function escalar(){
    let posicao = document.getElementById(`posicao`).value
    let name = document.getElementById(`name`).value
    let number = document.getElementById(`number`).value
    let jogadores = {
        posicao,
        name,
        number
    }

    let confirmacao = confirm(`Escalar o jogador ${jogadores.name} na posição ${jogadores.posicao}? \n (OK=SIM / CANCEL=NÃO)`)
    if (confirmacao === true) {
        const teamList = document.getElementById(`teamList`)
        const playerItem = document.createElement(`li`)
        playerItem.id=`Jogador${jogadores.number}`
        playerItem.innerText=`Posição: ${jogadores.posicao} \n Nome: ${jogadores.name} \n Camisa número: ${jogadores.number} \n`

        teamList.appendChild(playerItem)

        //Limpar os INPUT`S
        document.getElementById(`posicao`).value = ``
        document.getElementById(`name`).value = ``
        document.getElementById(`number`).value = ``

    }
}

function remover() {
    let number = document.getElementById(`numberToRemove`).value
    const playerToRemove = document.getElementById(`Jogador${number}`)
    let confirmacao = confirm(`Deseja Remover o Jogador ${playerToRemove.innerText}? \n Não é possível desfazer após a Exclusão`)
    if (confirmacao === true) {
        document.getElementById(`teamList`).removeChild(playerToRemove)
        document.getElementById(`numberToRemove`).value = ``
    }
}