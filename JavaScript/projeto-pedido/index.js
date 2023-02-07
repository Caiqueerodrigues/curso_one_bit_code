let btnSim = document.getElementById(`sim`)
let btnNao = document.getElementById(`nao`)

let title = document.querySelector(`h1`)

function ativar () {
    if (btnSim.innerText !== `sim`) {
        btnSim.innerText = `Sim`
    }
    let position = Math.floor(Math.random() *163)
    btnSim.style.display=`block`
    btnSim.style.margin= `${position}px`
    alert(position)
}