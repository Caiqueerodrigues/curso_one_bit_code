let jogadores = [
    {
        posição: `Atacante`,
        nome: `Caique`, 
        numero: 10
    },{
        posicao: `Goleiro`,
        nome: `Felipe`,
        numero: 01
    },{
        posicao: `Zagueiro`,
        nome: `Adriano`,
        numero: 04
    }
]
var visor = document.getElementById(`visor`)

function escalar() {
    repetiçao()

    let title = document.createElement(`h2`)
        title.innerText = `Adicionar um Jogador`
    let visorIncluir = document.getElementById(`incluir`)
        visorIncluir.value = 0
    let ol = document.createElement(`ol`)

    let posicaoLi = document.createElement(`li`)
    posicaoLi.innerHTML = `<label for="posicao"> Posição do Jogador: </label>`
    let posicao = document.createElement(`input`)
        posicao.type = 'text'
        posicao.id=`posicao`
        posicao.placeholder= `Ex: Atacante`
    posicaoLi.appendChild(posicao)
    ol.appendChild(posicaoLi)
    ol.appendChild(document.createElement(`br`))
    
    let nameLi = document.createElement(`li`)
        nameLi.innerHTML = `<label for="nome"> Nome do Jogador: </label>`
        let inputName = document.createElement(`input`)
        inputName.id = `nome`
        inputName.type = `text`
    nameLi.appendChild(inputName)
    ol.appendChild(nameLi)
    ol.appendChild(document.createElement(`br`))
    
    let numeroLi = document.createElement(`li`)
        numeroLi.innerHTML = `<label for="numero"> Número do Jogador: </label>`
    let inputNumero = document.createElement(`input`)
        inputNumero.type= `number`
        inputNumero.placeholder = `Número da Camisa do Jogador`
        inputNumero.id = `numero`
    numeroLi.appendChild(inputNumero)
    ol.appendChild(numeroLi)
    ol.appendChild(document.createElement(`br`))

    let btn = document.createElement(`input`)
        btn.type= `submit`
        btn.value = `Escalar`
        btn.addEventListener(`click`, function(){
            let dados = confirm(`Deseja escalar este Jogador? (ok=SIM / cancel=NÃO)`)
            if (dados === true) {
                    if (inputName.value != `` && inputNumero.value != null && posicao.value != ``) {
                    jogadores.push({posição: posicao.value, nome: inputName.value, numero: inputNumero.value})
                        repetiçao()
                        visorIncluir.removeChild(ol)
                        visorIncluir.removeChild(btn)
                        visorIncluir.removeChild(title)
                    } else {alert(`[ERRO] Informações Inválidas`)}
            }
            })
    visorIncluir.append(title, ol, btn)
}

function excluir() {
    repetiçao()

    let h2 = document.createElement(`h2`)
        h2.innerText = `Excluir um Jogador`
    let visorExcluir = document.getElementById(`excluir`)
    let ol = document.createElement(`ol`)

    let excluirLi = document.createElement(`li`)
        excluirLi.innerHTML = `<label for= excluir>Qual o número do jogador: </label>`
    let numeroExcluir = document.createElement(`input`)
        numeroExcluir.type = `number`
        numeroExcluir.id= `excluir`
        numeroExcluir.placeholder = `Número do Jogador`
    excluirLi.appendChild(numeroExcluir)
    ol.appendChild(excluirLi)

    let btnExcluir = document.createElement(`button`)
        btnExcluir.innerText = `Excluir`
        btnExcluir.addEventListener(`click`, function() {
            if (numeroExcluir != null) {
                let excluir = (numeroExcluir.value -1)
                let confirmacao = confirm (`Deseja realmente excluir o Jogador ${jogadores[excluir].nome}?`)
                jogadores.splice(excluir)
                visor.append(repetiçao())
            }
            
        })

    visorExcluir.append(h2, ol, btnExcluir)
}

function repetiçao() {
    for (i = 0; jogadores.length > i;i++) {
        visor.innerText += ( `N ${i+1} \n Nome do jogador: ${jogadores[i].nome} \n Número do Jogador: ${jogadores[i].numero} \n Posição: ${jogadores[i].posição} \n \n`)
    }
}