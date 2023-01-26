let main = document.querySelector(`main`)
let section = document.querySelector(`section`)
let visor = document.getElementById(`visor`)

var nomeJogador1 = ``
var opcaoJogador1 = ``
var nomeJogador2 = ``
var opcaoJogador2 = ``
let jogadores = [nomeJogador1, nomeJogador2]

let vezDoJogador1 = ``
let vezDoJogador2 = ``

let comecar = ``

const erro = `[ERRO] Escolha outra casa Vazia, Por favor.`

//tema
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
        jogador1.style.textTransform=`capitalize`
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
    opcaoJogador1 = `O`
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
            nomeJogador1 = jogador1.value
            label1.innerHTML= `<label for="jogador1">Qual o nome do Segundo Jogador? </label>`
            console.log(`ATé Aqui tudo OK \n Nome: ${nomeJogador1} \n Opção: ${opcaoJogador1}`)
            jogador1.value = `` 
            jogador1.focus()
            switcOpcao.style.display=`none`
        }
        if (opcaoJogador1 === `X`) {
            opcaoJogador2 = `O`
            paragrafo.innerText=`Você será:`
            opcaoX.style.display=`none`
            divOpcao.id=`divOpcaoTextCenter`
            opcaoO.innerHTML=`<label id="o2" for="switchOpcao"> O</label>`
        } else {
            opcaoJogador2 = `X`
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
                nomeJogador2 = jogador1.value
                vezDoJogador1 = `É a vez de ${nomeJogador1[0].toUpperCase() + nomeJogador1.substring(1)}`
                vezDoJogador2 = `É a vez de ${nomeJogador2[0].toUpperCase() + nomeJogador2.substring(1)}`
            }
            console.log(`Nome do jogador 1: ${nomeJogador1} Opção Escolhida: ${opcaoJogador1} \n Nome do Jogador 2: ${nomeJogador2} Opção: ${opcaoJogador2}`)
            section.style.display=`none`
            main.style.display=`block`
            quemComeça()
        }) 
    })
})

//sorteio de quem começa
function quemComeça (){
    comecar = Math.floor(Math.random() * 10)
    console.log(`O número sorteado foi ${comecar}`)
    if (comecar === 1 || comecar === 3 || comecar === 5 || comecar === 7 || comecar === 9) {
        visor.innerText = vezDoJogador1
        comecar = vezDoJogador1
    } else {
        visor.innerText = vezDoJogador2
        comecar= vezDoJogador2
    }
}   

//marcar casa
document.querySelector(`.casaA`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === ``) {
        if (comecar === vezDoJogador1 ) {
            buttonTarget.value= opcaoJogador1
            buttonTarget.innerText = opcaoJogador1
            comecar = vezDoJogador2
            visor.innerText = comecar
        } else {
            buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
        }
        return
    }else {
        alert(erro)
    }
})
document.querySelector(`.casaB`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && comecar === vezDoJogador1 ) {
        buttonTarget.value= opcaoJogador1
        buttonTarget.innerText = opcaoJogador1
        comecar = vezDoJogador2
        visor.innerText = comecar
        re
    } else if (buttonTarget.innerText === `` && comecar === vezDoJogador2) {
        buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
    }
    if ( buttonTarget.innerText !== ``) {
        alert(erro)
    }
})
document.querySelector(`.casaC`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && comecar === vezDoJogador1 ) {
        buttonTarget.value= opcaoJogador1
        buttonTarget.innerText = opcaoJogador1
        comecar = vezDoJogador2
        visor.innerText = comecar
        re
    } else if (buttonTarget.innerText === `` && comecar === vezDoJogador2) {
        buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
    }
    if ( buttonTarget.innerText !== ``) {
        alert(erro)
    }
})
document.querySelector(`.casaD`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && comecar === vezDoJogador1 ) {
        buttonTarget.value= opcaoJogador1
        buttonTarget.innerText = opcaoJogador1
        comecar = vezDoJogador2
        visor.innerText = comecar
        re
    } else if (buttonTarget.innerText === `` && comecar === vezDoJogador2) {
        buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
    }
    if ( buttonTarget.innerText !== ``) {
        alert(erro)
    }
})
document.querySelector(`.casaE`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && comecar === vezDoJogador1 ) {
        buttonTarget.value= opcaoJogador1
        buttonTarget.innerText = opcaoJogador1
        comecar = vezDoJogador2
        visor.innerText = comecar
        re
    } else if (buttonTarget.innerText === `` && comecar === vezDoJogador2) {
        buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
    }
    if ( buttonTarget.innerText !== ``) {
        alert(erro)
    }
})
document.querySelector(`.casaF`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && comecar === vezDoJogador1 ) {
        buttonTarget.value= opcaoJogador1
        buttonTarget.innerText = opcaoJogador1
        comecar = vezDoJogador2
        visor.innerText = comecar
        re
    } else if (buttonTarget.innerText === `` && comecar === vezDoJogador2) {
        buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
    }
    if ( buttonTarget.innerText !== ``) {
        alert(erro)
    }
})
document.querySelector(`.casaG`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && comecar === vezDoJogador1 ) {
        buttonTarget.value= opcaoJogador1
        buttonTarget.innerText = opcaoJogador1
        comecar = vezDoJogador2
        visor.innerText = comecar
        re
    } else if (buttonTarget.innerText === `` && comecar === vezDoJogador2) {
        buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
    }
    if ( buttonTarget.innerText !== ``) {
        alert(erro)
    }
})
document.querySelector(`.casaH`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && comecar === vezDoJogador1 ) {
        buttonTarget.value= opcaoJogador1
        buttonTarget.innerText = opcaoJogador1
        comecar = vezDoJogador2
        visor.innerText = comecar
        re
    } else if (buttonTarget.innerText === `` && comecar === vezDoJogador2) {
        buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
    }
    if ( buttonTarget.innerText !== ``) {
        alert(erro)
    }
})
document.querySelector(`.casaI`).addEventListener(`click`, function marcarCasa(ev){
    const buttonTarget = ev.currentTarget
    if (buttonTarget.innerText === `` && comecar === vezDoJogador1 ) {
        buttonTarget.value= opcaoJogador1
        buttonTarget.innerText = opcaoJogador1
        comecar = vezDoJogador2
        visor.innerText = comecar
        re
    } else if (buttonTarget.innerText === `` && comecar === vezDoJogador2) {
        buttonTarget.value === opcaoJogador2
        buttonTarget.innerText === opcaoJogador2
        comecar = vezDoJogador1 
        visor.innerText = comecar
    }
    if ( buttonTarget.innerText !== ``) {
        alert(erro)
    }
})