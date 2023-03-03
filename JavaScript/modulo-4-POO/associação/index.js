const Address = require("./adress");
const Person = require("./person");

var addr = new Address(`Armando Delle`,78, `B. Azaléas`, `Birigui`, `SP`)

var Caique = new Person(`Caique`,addr)

console.log(Caique)
console.log(Caique.address.fullAddress())