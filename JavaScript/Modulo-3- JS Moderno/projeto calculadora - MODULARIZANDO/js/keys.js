import { som, input, caracteres, root, main, resultado } from "./gerais.js"
import { calculate } from "./calculate.js"

function buttonApertado(ev){
    const value = ev.currentTarget.dataset.value
    input.value += value
    som.play()
}

function verificadorApertado (ev) {
    ev.preventDefault()
    if (caracteres.includes(ev.key)) {
        input.value += ev.key
        som.play()
        return
    }
    if (ev.key === `Backspace`) {
        input.value = input.value.slice(0,-1)
    }
    if (ev.key === `Enter`) {
        calculate()
    }
    if (ev.key === `c`) {
       input.value = ``
       input.focus()
       resultado.value = ``
    }
}

export { buttonApertado, verificadorApertado }