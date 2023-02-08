import { som, input, caracteres, root, main, resultado } from "./gerais.js"

function calculate () {
    resultado.value = `[ERRO]`
    resultado.classList.add('error')
    som.play()

    let result = eval(input.value)

    resultado.value = result
    resultado.classList.remove('error')
}

export { calculate}