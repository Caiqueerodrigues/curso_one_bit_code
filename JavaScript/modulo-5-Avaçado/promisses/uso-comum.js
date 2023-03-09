function promises () {
    // faz alguma coisa
    return new Promise( (resolve, reject) => {
        console.log(`a promise está sendo executada`)
        setTimeout( () => {
            console.log(`Resolvendo a promise. . . `)
            resolve(`Caique Rodrigues`)
        }, 1000 * 3)
    })
}

const p = promises()

console.log(p)

setTimeout(() => {
    console.log(p)    
}, 1000 * 6);