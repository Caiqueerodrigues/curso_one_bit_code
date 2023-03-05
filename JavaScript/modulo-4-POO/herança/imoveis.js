class Imoveis {
    constructor(area, preco) {
        this.area = area
        this.preco = preco
    }
    precoPorM2 () {
        return this.preco / this.area
    }
}

class Casas extends Imoveis { }

class Apartamentos extends Imoveis {
    constructor(area, preco, number) { 
        super(area, preco)
        this.numero = number
    }

    getfloor() {
        return this.numero.slice(0, -2)
    }
}

// const terreno = new Imoveis (`200`, `500000`)

// const casa = new Casas(`120`, `2000000`)

// console.log(terreno.precoPorM2())
// console.log(casa.precoPorM2())

const apartamento = new Apartamentos(200, `500000`, `201`)

console.log(apartamento)
console.log(apartamento.getfloor())