async function asyncSum(a, b) {
    if(typeof a != `number` || typeof b != `number`) {
        return Promise.reject(`[ERRO Soma]Valores informados nao sao números`)
    }
    return a + b
}

// asyncSum(33,22).then( (result) => console.log(result))

async function execute () {
    try {
        const execute2 = await asyncSum(33,22)
        console.log(execute2)
    } catch (err) {
        console.log(err)        
    }
}

execute()