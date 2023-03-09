async function asyncSum(a, b) {
    if(typeof a != `number` || typeof b != `number`) {
        return Promise.reject(`[ERRO Soma]Valores informados nao sao números`)
    }
    return a + b
}

function asyncSubtract(a, b) {
    if(typeof a != `number` || typeof b != `number`) {
        return Promise.reject(`[ERRO Subtração]Valores informados nao sao números`)
    }
    return a - b
}

const sumResult = asyncSum(50, 10)
const subtractResult = asyncSubtract(50, 20)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})