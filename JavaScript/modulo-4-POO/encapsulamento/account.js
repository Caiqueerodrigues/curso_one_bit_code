class Account {
    #password
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password) {
        if(password === this.#password && email === this.email) {
            return this.#balance
        } else {
            return `ERRO`
        }
    }
}

const user = {
    email: `caique@caique.com`,
    password: `um2tres4`
}

const myAccount = new Account(user)

console.log(myAccount.getBalance(`caique@caique.com`, `um2tres4`))
