async function asyncSum(a, b) {
    return a + b
}

function asyncSubtract(a, b) {
    return a - b
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 20)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

// const arr = [4,5,6,7,8,9,0,12,34,3]

// function async(x) {
//     return new Promise ((resolve, reject) => {
//         if (typeof x !== `number`) {
//             reject(`[ERRO] DIGITE NUMEROS VALIDOS`)
//         }
//         resolve(x*x)
//     })
// }

// Promise.all(arr.map(number => async(number))).then((quadrados) => console.log(quadrados)).catch( (err) => console.log(err))