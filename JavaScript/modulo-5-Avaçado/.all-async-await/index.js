console.time(`map`)

function waitFor (seconds) {
    return new Promise ((resolve) => {
        setTimeout( () => {
            resolve()
        }, seconds * 1000)
    })
}

const arr = [4, 5, 9, 13, 77]

// const quadrados = arr.map(async (number) =>{
//     await waitFor(2)
//     return number * number
// })

// Promise.all(quadrados).then( result => console.log(result))

async function executar(){
    const quadrados =  Promise.all(arr.map(async (number) =>{
        await waitFor(2)
        return number * number
    })).then(results => console.log(results))
}

executar()

console.timeEnd(`map`)