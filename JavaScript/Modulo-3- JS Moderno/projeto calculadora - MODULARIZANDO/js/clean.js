import { som, input, caracteres, root, main, resultado } from "./gerais.js"

function clean () {
    input.value = ``
    input.focus()
    resultado.value = ``
    resultado.classList.remove('error')
    som.play()
}

export { clean }