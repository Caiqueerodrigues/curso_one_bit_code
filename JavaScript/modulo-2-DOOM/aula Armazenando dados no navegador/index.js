document.getElementById(`session`).addEventListener(`click`, function(){
    const input = document.getElementById(`inf1`)
    sessionStorage.setItem(`info`,input.value)
    console.log(input.value)
    input.value = ``
})
document.getElementById(`readSession`).addEventListener(`click`, function(){
    const info = sessionStorage.getItem(`info`)
    alert(`a informão que esta salva é : \n
    ${info}`)
})

//local storage 
document.getElementById(`local`).addEventListener(`click`, function() {
    const input = document.getElementById(`inf2`)
    localStorage.setItem(`text`, input.value)
    input.value = ``
})
document.getElementById(`readLocal`).addEventListener(`click`, function(){
    const text = localStorage.getItem(`text`)
    alert(`a informão que esta salva é : \n
    ${text}`)
})

//cokie
document.getElementById(`cookies`).addEventListener(`click`, function() {
    const input = document.getElementById(`inf3`)
    let cookieName = 'infoCookie=' + 'A informação salva no COOKIE é:' + input.value + ';'
    let expires = 'expires' + new Date(2023,0,29) + ';'
    document.cookie = cookieName + expires
})

//outra forma de cookie
document.getElementById(`cookies2`).addEventListener(`click`, function() {
    const input = document.getElementById(`inf4`)
    let cookieName = 'info=' + 'A informação salva no COOKIE é:' + input.value + ';'
    let expires = 'expires' + new Date(2023,01,29) + ';'
    document.cookie = cookieName + expires
})