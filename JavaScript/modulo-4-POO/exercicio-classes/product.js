class Product {
    constructor(name, description, price) {
        this.nome = name,
        this.descriçao = description,
        this.preço = price,
        this.estoque = 0
    }
    addToStock(quantidade) {
        this.estoque += quantidade
    }
    calculateDiscount(porcentagem) {
        this.preço -= this.preço *(porcentagem/100)
    }
}

var pao = new Product(`pao`, `feito com pura farinha de trigo`, 1.30)
console.log(pao)

pao.addToStock(10)
pao.calculateDiscount(50)

console.log(pao)