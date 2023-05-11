const Character = require("./Character");

class Mage extends Character {
    constructor(nome, pv, pa, df,pontosMagicos) {
        super(nome, pv, pa, df)
        this.pontosMagicos = pontosMagicos
    }

    attack(target) {
        target.pontosVida -= (this.pontosAtaque + this.pontosMagicos) - target.pontosDefesa
    }

    heal(target) {
        target.pontosVida += this.pontosMagicos * 2
    }
}

module.exports = Mage 