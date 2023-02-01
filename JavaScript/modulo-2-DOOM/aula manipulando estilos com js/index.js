function useLightTheme () {
    document.body.style.color = `blue`
    document.body.style.backgroundColor = `lightgrey`
}

function useDarkTheme () {
    document.body.style.color = `red`
    document.body.style.backgroundColor = `black`
}

function trocar() {
    document.body.classList.toggle('isLightTheme')
    document.body.classList.toggle('isDarkTheme')
}
 
document.getElementById(`lightBtn`).addEventListener(`click`, useLightTheme)
document.getElementById(`darkBtn`).addEventListener(`click`, useDarkTheme)
document.getElementById(`switchBtn`).addEventListener(`click`, trocar)