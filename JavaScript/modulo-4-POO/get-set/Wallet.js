class Wallet {
    #amount
    #userName

    constructor() {
        this.#amount = 100.99 * 100 //retornará 10099 (número inteiro)
    }

    get amount() {
        return this.#amount / 100 //para retornar numero com virgula
    }

    set userName(newUserName) {
        if(typeof newUserName === 'string') {
            this.#userName = newUserName
        } else {
            console.log('UserName precisa ser uma STRING')
        }
    }

    get userName() {
        return this.#userName
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount)
myWallet.userName = 'Caique'
console.log(myWallet.userName)

myWallet.userName += ' Rodrigues'
console.log(myWallet.userName)

myWallet.userName = 35240 //testando a regra dentro do set
console.log(myWallet.userName)