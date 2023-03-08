const userInputs = {}
    userInputs.name = document.querySelector('#name')
    userInputs.email = document.querySelector('#email')
    userInputs.senha = document.querySelector('#senha')

function validateEmail(email) {
    if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
        const err = new Error(`Email Inválido`)
        err.input = 'email'
        throw err
    } else {
        document.getElementById(`checkEmail`).style.display=`inline`
    }
}

function validatePassword(senha) {
    if(
        senha.length < 8 ||
        !senha.match(/[a-z]/) ||
        !senha.match(/[A-Z]/) ||
        !senha.match(/\d/) ||
        !senha.match(/[^a-zA-Z\s0-9]/)
    ) {
        const err = new Error(`Senha Inválida`)
        err.input = 'senha'
        throw err
    } else {
        document.getElementById(`checkSenha`).style.display=`inline`
    }
}

function resetStyle(inputs) {
    Object.entries(inputs).forEach(([key , value])=> {
        value.classList.remove('success','error')
        document.querySelector(`#${key}-error`).textContent = ''
        document.querySelector(`span`).classList.remove()
        document.querySelector(`span`).style.display=`none`
    })
}

const form = document.querySelector(`form`)
    form.addEventListener(`submit`, (ev) => {
        ev.preventDefault()
        resetStyle(userInputs)

        try {
            userInputs.name.classList.add(`success`)
            validateEmail(userInputs.email.value)
            userInputs.email.classList.add(`success`)
        } catch (err) {
            userInputs[err.input].classList.add(`error`)
            document.querySelector(`#${err.input}-error`).textContent = err.message
        }
        try {
            validatePassword(userInputs.senha.value)
            userInputs.senha.classList.add(`success`)
        } catch (error) {
            userInputs[error.input].classList.add(`error`)
            document.querySelector(`#${error.input}-error`).textContent = error.message
        }
    })