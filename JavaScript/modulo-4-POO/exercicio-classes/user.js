class User {
    constructor(fullName, email, password) {
        this.nome = fullName,
        this.email = email,
        this.senha = password
    }
    login(email1, password1) {
        if(email1 === this.email && this.senha === password1) {
            console.log(`Login Bem Sucessido`)
        } else {
            console.log(`Erro, verifique os dados`)
        }
    }
}

var caique = new User(`caique`, `example@example.com`, 123456)
caique.login(`example@example.com`, 123456)

console.log(caique)