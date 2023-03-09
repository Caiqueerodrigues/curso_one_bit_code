function promises () {
    // faz alguma coisa
    return new Promise( (resolve, reject) => {
        console.log(`a promise está sendo executada`)
        if (true) {
            reject(`a promise foi REJEITADA`)
        } else {
            setTimeout( () => {
                console.log(`Resolvendo a promise. . . `)
                resolve(`Caique Rodrigues`)
            }, 1000 * 2)
        }
    })
}

// const p = promises()
//Promise RESOLVIDA
// p.then( (result) => {
//     console.log(`resultado da promise é: ${result}`)
// })

//promise REJEITADA
// p.catch( (result) => {
//     console.log(result)
// })

//Jeito mais FACIL (encadeando)/MAIS UTILIZADO
promises().then( (result) => {
    console.log(`resultado da promise é: ${result}`)
}).catch( (error) => {
    console.log(error)
}).finally( () => {
    setTimeout(() => {
        console.log(`a Promise foi FINALIZADA`)
    },1000 * 3)
})