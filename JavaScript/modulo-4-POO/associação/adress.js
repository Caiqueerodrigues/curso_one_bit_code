class Address {
    constructor(rua, numero, vizinhanca, cidade, estado) {
        this.rua = rua
        this.numero = numero
        this.vizinhanca = vizinhanca
        this.cidade = cidade
        this.estado = estado
    }
    fullAddress() {
        return `Rua ${this.rua}, Número: ${this.numero}, Bairro ${this.vizinhanca}, Cidade ${this.cidade} e Estado ${this.estado}`
    }
}

module.exports = Address