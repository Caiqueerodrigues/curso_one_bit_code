const Character = require("./Character");

class Warrior extends Character {
    constructor(nome, pv, pa, df, pontosCura) {
        super(nome, pv, pa, df) 
        this.pontosCura = pontosCura
        this.stance = 'attacking'
    }

    attack(target) {
        if(this.stance === 'attacking') {
            super.attack(target)
        }
    }

    switchStance() {
        if(this.stance === 'attacking') {
            this.stance = 'defending'
            this.pontosDefesa += this.pontosCura
        } else {
            this.stance = 'attacking'
            this.pontosDefesa -= this.pontosCura
        }
    }
}

module.exports = Warrior