const Character = require("./Character");

class Thief extends Character {
    attack(target) {
        target.pontosVida -= (this.pontosAtaque - target.pontosDefesa) * 2
    }
}

module.exports = Thief