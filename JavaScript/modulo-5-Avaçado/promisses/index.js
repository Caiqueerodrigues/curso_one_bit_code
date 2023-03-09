const p = new Promise((resolve, reject) => {
    console.log(`a promisse esta sendo executada`)
    setTimeout( () => {
        // if(true) {
        //     reject(false)
        // }
        console.log(`resolvendo a PROMISE`)
        resolve(`Caique Rodrigues`)
    }, 1000 * 2)
})

console.log(p)

setTimeout( () => {
    console.log(p)
},3000)