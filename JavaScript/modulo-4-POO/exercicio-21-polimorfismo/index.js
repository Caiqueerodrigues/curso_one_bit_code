const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");


const Arthur = new Mage ('Arthur', 90, 4, 2, 14)
const Beatrice = new Thief('Beatrice', 140, 22, 8)
const Cain = new Warrior('Cain', 200, 14, 12, 4)

console.table({Arthur, Beatrice, Cain})

Cain.switchStance()
Arthur.attack(Cain)
Beatrice.attack(Arthur)

console.table({Arthur, Beatrice, Cain})

Cain.switchStance()
Cain.attack(Arthur)
Arthur.heal(Arthur)
Beatrice.attack(Cain)

console.table({Arthur, Beatrice, Cain})