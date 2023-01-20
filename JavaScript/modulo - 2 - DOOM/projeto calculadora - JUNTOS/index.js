const main = document.querySelector(`main`)
const root = document.querySelector(`:root`)
const input = document.querySelector(`input`)
const resultado = document.getElementById(`result`)

const caracteres = ["0","1","2","3","4","5","6","7","8","9","C",")","(","/","*","-","+","=",".","%",]

document.getElementById(`clear`).addEventListener(`click`,function(){
    input.value = ``
    input.focus()
    resultado.value = ``
})

document.querySelectorAll(`.charKey`).forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener(`click`, function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

input.addEventListener(`keydown`,function (ev) {
    ev.preventDefault()
    if (caracteres.includes(ev.key)) {
        input.value += ev.key
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
})


document.getElementById(`equal`).addEventListener(`click`, calculate)

function calculate () {
    let result = eval(input.value)
    resultado.value = result
}
