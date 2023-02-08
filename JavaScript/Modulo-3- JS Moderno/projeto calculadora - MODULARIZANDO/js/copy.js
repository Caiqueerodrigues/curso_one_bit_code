import { som, input, caracteres, root, main, resultado } from "./gerais.js"

export default function (ev) {
    const button = ev.currentTarget
    if ( button.innerText === `Copiar`) { 
        button.innerText = `Copiado`
        button.classList.add(`sucess`)
        navigator.clipboard.writeText(resultado.value)
    } else {
        button.innerText = `Copiar`
        button.classList.remove(`sucess`)
    }
}