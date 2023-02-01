const input = document.querySelector(`input`)

document.getElementById(`valor`).addEventListener(`click`, function() {
    input.value = `Olá, Mundo!`
    console.log(input.value)
})

document.getElementById(`tipo`).addEventListener(`click`, function () {
    //funciona melhor
    //input.type= input.type !== `radio` ? `radio` : `text`
    input.setAttribute(`type`, `radio`)

})

document.getElementById(`placeholder`).addEventListener(`click`, function () {
    input.placeholder=`Digite Qualquer coisa`
})

document.getElementById(`desabilitado`).addEventListener(`click`, function() {
    input.setAttribute(`disabled`, !input.disabled)
}) 

document.getElementById(`dados`).addEventListener(`click`, function () {
    const data = input.dataset
})