let spaceship = [];

function createSpaceship() {
    const nome = String(prompt("Informe o nome da nave"))
    const piloto = String(prompt("informe o nome do PILOTO"))
    const limite = Number(prompt("informe quantidade de tripulação"))
    const tripulação = Array(prompt("informe os nomes da tripulação"))
    
    spaceship.push({
        name: nome,
        pilot: piloto,
        crewLimit: limite,
        crew: tripulação,
        inMission: false
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
            if(nave.inMission === false && nave.crew.length >= 2) {
                nave.inMission = true;
                alert(`A nave ${nave.name} foi enviada em missão`)
            } else if(nave.inMission === false && nave.crew.length < 3) {
                alert(`A nave ${nave.name} não pode ser enviada, Tripulação insuficiente.`)
            }else if(nave.inMission) alert(`A nave ${nave.name} já se encontra em missão`)
        }
    })
}

function listSpaceship() {
    for(let i = 0; i< spaceship.length; i++) {
        let crewsName:string = ''
        spaceship[i].crew.forEach((nome: any) => crewsName += `${nome},`)
        alert(
            `A ${i+1}ª nave é: ${spaceship[i].name}
            Com o piloto: ${spaceship[i].pilot}
            Com o limite de tripulação: ${spaceship[i].crewLimit}
            Sua tripulação são: ${crewsName}
            Está em missão: ${spaceship[i].inMission ? 'Sim' : 'Não'}`
        )
    }
}
let optionMenu:number = 0
function menu() {
    while(optionMenu !== 5) {
        optionMenu = Number(prompt(`O que deseja fazer? 
            1 - Cadastrar uma nova nave
            2 - Adicionar um tripulante a nave exitente
            3 - Enviar nave para missão
            4 - Listar as naves
            5 - Encerrar`
        ))
        switch (optionMenu) {
            case 1:
                createSpaceship()
                break
            case 2:
                let nameSpaceship = String(prompt("Qual o nome da nave que deseja adiconar o tripúlante?"))
                let nameCrew = String(prompt("Qual o nomedo tripulante?"))
                addCrew(nameSpaceship, nameCrew)
                break
            case 3:
                let spaceshipName = String(prompt("Qual o nome da nave que deseja enviar para missão?"))
                sendMission(spaceshipName)
                break
            case 4:
                listSpaceship()
                break
            case 5: 
                alert('Encerrando o sistema...')
                break
            default:
                alert("Opção inválida. . .")
        }
    }
}
menu()
