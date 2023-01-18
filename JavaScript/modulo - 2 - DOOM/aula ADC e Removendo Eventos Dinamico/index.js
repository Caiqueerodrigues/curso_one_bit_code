function registro (ev) {
    alert( `Botão Clicado`)
    console.log(ev)
}

const button = document.getElementById(`registro`)

button.addEventListener(`click`, registro)