let main = document.querySelector(`main`)
let section = document.querySelector(`section`)
// let jogo = document.getElementById(`jogo`)

let btnSwitchTheme = document.getElementById(`theme`).addEventListener(`click`, function(){
    const root = document.querySelector(`:root`)
    const labelTheme = document.getElementById(`themeLabel`)
    let body = document.querySelector(`body`)
       if (body.dataset.theme ===`light`) {
        root.style.setProperty(`--bg-color`,`#000`)
        root.style.setProperty(`--color`,`#f00`)
        body.dataset.theme=`dark`
        labelTheme.innerText=`Tema Dark`
       } else {
        root.style.setProperty(`--bg-color`,`#fff`)
        root.style.setProperty(`--color`,`#000`)
        body.dataset.theme=`light`
        labelTheme.innerText=`Tema Light`
       }
})

let btnIniciar = document.querySelector(`#btnIniciar`)
    btnIniciar.addEventListener(`click`, function(ev) {
        document.getElementById(`btnIniciar`).style.display=`none`

    let label1 = document.createElement(`label`)
        label1.innerHTML= `<label for="jogador1">Qual o nome do Primeiro Jogador? </label>`
    let jogador1 = document.createElement(`input`)
        jogador1.type= `text`
        jogador1.id= `jogador1`
        jogador1.autocomplete=`off`
        jogador1.style.borderRadius=`20px`
        jogador1.style.padding=`10px`
    var btnJogador2 = document.createElement(`button`)
        btnJogador2.innerText = `Próximo Jogador`
        btnJogador2.classList=`btn btn-outline-danger`
        btnJogador2.style.marginTop=`10px`
        btnJogador2.id=`btnSeguir`

    let paragrafo = document.createElement(`p`)
        paragrafo.innerText=`Você escolhe ser: `
    let switcOpcao = document.createElement(`input`)
        switcOpcao.type=`checkbox`
        switcOpcao.classList= `form-check-input`
        switcOpcao.id=`switchOpcao`
    var opcaoJogador1 = `O`
    let opcaoSwitch = document.createElement(`div`)
        opcaoSwitch.classList=`form-switch`
        opcaoSwitch.role=`switch`
    opcaoSwitch.append(switcOpcao)

    let opcaoX = document.createElement(`span`)
        opcaoX.innerHTML=`<label id="x" for="switchOpcao"> X</label>`
    let opcaoO = document.createElement(`span`)
        opcaoO.innerHTML=`<label id="o" for="switchOpcao"> O</label>`

    let divOpcao = document.createElement(`div`)
        divOpcao.id=`divOpcao`
    divOpcao.append(opcaoO, opcaoSwitch, opcaoX)
    
    
    section.append(label1, jogador1, document.createElement(`br`), paragrafo, divOpcao, document.createElement(`br`), btnJogador2)
    jogador1.focus()


//button seguir
    btnJogador2.addEventListener(`click`, function(){
    //dados jogador 1
    if (switcOpcao.checked) {
        switcOpcao.value = `X`
        opcaoJogador1 = switcOpcao.value
    }else {
        switcOpcao.value = `O`
        opcaoJogador1 = switcOpcao.value
    }   
    if (jogador1.value.length == 0) {
        alert(`[ERRO] Digite um nome para o Jogador`)
        return
    } else{
        var nomeJogador1 = jogador1.value
        label1.innerHTML= `<label for="jogador1">Qual o nome do Segundo Jogador? </label>`
        alert(`ATé Aqui tudo OK \n Nome: ${nomeJogador1} \n Opção: ${opcaoJogador1}`)
        jogador1.value = `` 
        jogador1.focus()
        switcOpcao.style.display=`none`
    }
    if (opcaoJogador1 === `X`) {
        var opcaoJogador2 = `O`
        paragrafo.innerText=`Você será:`
        opcaoX.style.display=`none`
        divOpcao.id=`divOpcaoTextCenter`
        opcaoO.innerHTML=`<label id="o2" for="switchOpcao"> O</label>`
    } else {
        var opcaoJogador2 = `X`
        paragrafo.innerText=`Você será:`
        opcaoO.style.display=`none`
        divOpcao.id=`divOpcaoTextCenter`
        opcaoX.innerHTML=`<label id="x2" for="switchOpcao"> X</label>`
    } 
    btnJogador2.style.display=`none`
        //2 jogador
    let btnSeguir = document.createElement(`button`)
        btnSeguir.innerText = `Seguir`
        btnSeguir.classList=`btn btn-outline-danger`
        btnSeguir.style.marginTop=`10px`
    section.appendChild(btnSeguir).addEventListener(`click`,function(){
        if (jogador1.value.length == ``) {
            alert(`[ERRO] Digite um Nome válido`)
            jogador1.focus()
            return
        } else {
            var nomeJogador2 = jogador1.value
        }
        alert(`Nome do jogador 1: ${nomeJogador1} Opção Escolhida: ${opcaoJogador1} \n Nome do Jogador 2: ${nomeJogador2} Opção: ${opcaoJogador2}`)
    section.style.display=`none`
    main.style.display=`block`
    
    })
})
    
    
    //dados do jogador 2
//     var jogador2 = jogador1.value
//     var nomeJogador2 = jogador2
//     if(jogador2.length = 0) {
//         alert(`[ERRO] Digite um nome para o Jogador Nº 2`)
//         return
//     } else{ 
//         
//     }
    
//     res = `Nome: ${nomeJogador2} Opcao: ${opcaoJogador2}`
//     console.log(res)
// })
})