let spaceship = [];

function createSpaceship() {
    const nome = String(prompt("Informe o nome da nave"))
    const piloto = String(prompt("informe o nome do PILOTO"))
    const limite = Number(prompt("informe quantidade de tripulação"))
    const tripulação = Array(prompt("informe os nomes da tripulação"))
    const emMissao = Boolean(confirm(`A nave ${nome} está em missão?`))

    spaceship.push({
        name: nome,
        pilot: piloto,
        crewLimit: limite,
        crew: tripulação,
        inMission: emMissao
    });
    alert(`Nave ${nome} cadastrada`);
}

function addCrew(nameSpaceship:string, nomeCrew:string) {
    spaceship.forEach(spaceship => {
        let quantityCrews = spaceship.crew.length
        if(spaceship.name === nameSpaceship) {
            if(quantityCrews < spaceship.crewLimit) {
                spaceship.crew.push(nomeCrew)
                alert('Adicionado a tripulação')
            } else alert("Limite máximo de tripulantes já preenchido")
        }
    })
}

function sendMission(nameSpaceship:string) {
    spaceship.forEach( nave => {
        if(nave.name === nameSpaceship) {
            if(nave.inMission === false) {
                nave.inMission = true;
                alert(`A nave ${nave.name} foi enviada em missão`)
            } else alert(`A nave ${nave.name} já se encontra em missão`)
        }
    })
}

function listSpaceship() {
    for(let i = 0; i< spaceship.length; i++) {
        let crewsName:string = ''
        spaceship[i].crew.forEach((nome: any) => crewsName += `${nome},`)
        console.log(
            `A ${i+1}ª nave é: ${spaceship[i].name}
            Com o piloto: ${spaceship[i].pilot}
            Com o limite de tripulação: ${spaceship[i].crewLimit}
            Sua tripulção são: ${crewsName}
            Está em missão: ${spaceship[i].inMission ? 'Sim' : 'Não'}`
        )
    }
}