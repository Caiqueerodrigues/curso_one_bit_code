let btnSim = document.getElementById(`sim`)
let btnNao = document.getElementById(`nao`)

let title = document.querySelector(`h1`)
let topBottom = 0
let leftRight = 0

let width = window.innerWidth

function ativar () {
    calcular()
    if(topBottom < window.innerHeight && leftRight < window.innerWidth) {
        btnSim.style.position=`absolute`
        btnSim.style.display=`block`
        btnSim.style.margin= `${(topBottom/2)}px ${(leftRight/2)}px`    
        console.log(topBottom, leftRight)
        console.log(`${window.innerHeight} height width ${window.innerWidth}`)
    } else {
        ativar()
        console.log('maior')
    }
    
}

function calcular() {
    topBottom = Math.floor(Math.random() *2813)
    leftRight = Math.floor(Math.random() *1603)
}