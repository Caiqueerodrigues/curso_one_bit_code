function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

getAge('1996-12-05').then((age => {
    checkAge(age).then( (maior) => {
        if (maior === true) {
            console.log(`Maior de IDADE`)
        } else {
            console.log(`Menor de IDADE`)
        }
    }).catch( (err) => {
        console.log(err.message)
    })
})).catch( (err) => {
    console.log(err.message)
})