type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"
let planet: Planet

function checkPlanet(planet:Planet) {
    if(planet === "Terra") console.log("estamos na terra")
}

checkPlanet("Terra")