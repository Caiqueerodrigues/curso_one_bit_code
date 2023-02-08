import { calculate } from "./calculate.js"
import { clean } from "./clean.js"
import copy from "./copy.js"
import { buttonApertado, verificadorApertado } from "./keys.js"
import { theme } from "./theme.js"
import { som, input, caracteres, root, main, resultado } from "./gerais.js"

//botão de apagar
document.getElementById(`clear`).addEventListener(`click`, clean)

//para mostrar a tecla apertada no visor
document.querySelectorAll(`.charKey`).forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener(`click`, buttonApertado)
})

//verificador de tecla apertada
input.addEventListener(`keydown`, verificadorApertado)

//botão de IGUAL
document.getElementById(`equal`).addEventListener(`click`, calculate)

//switch theme
document.getElementById(`themeSwitcher`).addEventListener(  `click`, theme)

//botao de copiar
document.getElementById(`copyToClipboard`).addEventListener(`click`, copy)


