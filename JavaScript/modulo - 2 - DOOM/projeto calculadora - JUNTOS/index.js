const main = document.querySelector(`main`)
const root = document.querySelector(':root')
const input = document.querySelector(`input`)
const resultado = document.getElementById(`result`)
const som = document.querySelector(`audio`)

const caracteres = ["0","1","2","3","4","5","6","7","8","9","C",")","(","/","*","-","+","=",".","%",]

//botão de apagar
document.getElementById(`clear`).addEventListener(`click`,function(){
    input.value = ``
    input.focus()
    resultado.value = ``
    resultado.classList.remove('error')
    som.play()
})
//para mostrar a tecla apertada no visor
document.querySelectorAll(`.charKey`).forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener(`click`, function(){
        const value = charKeyBtn.dataset.value
        input.value += value
        som.play()
    })
})

//verificador de tecla apertada
input.addEventListener(`keydown`,function (ev) {
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
})

//botão de IGUAL
document.getElementById(`equal`).addEventListener(`click`, calculate)

function calculate () {
    resultado.value = `[ERRO]`
    resultado.classList.add('error')
    som.play()

    let result = eval(input.value)
    resultado.value = result
    resultado.classList.remove('error')
}


//switch theme
document.getElementById(`themeSwitcher`).addEventListener(  `click`, function () {
    if (main.dataset.theme === `dark`) {
        root.style.setProperty(`--bg-color`, `#f1f5f9`)
        root.style.setProperty(`--border-color`, `#aaa`)
        root.style.setProperty(`--font-color`, `#212529`)
        root.style.setProperty(`--primary-color`, `#26834a`)
        main.dataset.theme = `light`
    } else {
        root.style.setProperty(`--bg-color`, `#212529`)
        root.style.setProperty(`--border-color`, `#666`)
        root.style.setProperty(`--font-color`, `#f1f5f9`)
        root.style.setProperty(`--primary-color`, `#4dff91`)
        main.dataset.theme = `dark`
    }
})

//botao de copiar
document.getElementById(`copyToClipboard`).addEventListener(`click`, function (ev) {
    const button = ev.currentTarget
    if ( button.innerText === `Copiar`) { 
        button.innerText = `Copiado`
        button.classList.add(`sucess`)
        navigator.clipboard.writeText(resultado.value)
    } else {
        button.innerText = `Copiar`
        button.classList.remove(`sucess`)
    }
})


