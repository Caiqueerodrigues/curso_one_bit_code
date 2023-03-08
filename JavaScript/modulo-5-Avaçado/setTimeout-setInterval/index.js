console.log(`Hello, world`)

// setTimeout( () => {
//     console.log(`passados 3seg desde o inicio do programa`)
// }, 1000 * 3)

let seconds = 0
const id = setInterval( () => {
    seconds ++ 
    console.log(`Se passaram ${seconds} segundos`)
    if(seconds > 10) {
        clearInterval(id)
        console.log(`tempo máximo de ${seconds} segundos ATINGIDO, Encerrando. . .`)
    }
}, 1000)

