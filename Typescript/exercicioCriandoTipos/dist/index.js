let optionUser = 0;
let planets = [];
function createPlanet(name, coordenadas, situation) {
    planets.push({
        name,
        coordenadas,
        situation,
        satelites: []
    });
    alert(`Planeta ${name} cadastrado`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = Number(prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado'));
        switch (situationInput) {
            case 1:
                situation = 'habitado';
                validSituation = true;
                break;
            case 2:
                situation = 'habitavel';
                validSituation = true;
                break;
            case 3:
                situation = 'inabitavel';
                validSituation = true;
                break;
            case 4:
                situation = 'inexploravel';
                validSituation = true;
                break;
            default:
                alert('Situação inválida!');
                break;
        }
    }
    return situation;
}
function menuOp1() {
    let name = prompt("Qual o nome do planeta?");
    let coordA = Number(prompt("Quais a coordenada N° 1 do planeta?"));
    let coordB = Number(prompt("Quais a coordenada N° 2 do planeta?"));
    let coordC = Number(prompt("Quais a coordenada N° 3 do planeta?"));
    let coordD = Number(prompt("Quais a coordenada N° 4 do planeta?"));
    let sit = promptValidSituation();
    createPlanet(name, [coordA, coordB, coordC, coordD], sit);
}
function attSituation(namePlanet, situation) {
    planets.forEach(item => {
        if (item.name === namePlanet) {
            item.situation = situation;
            alert("Situação atualizada");
        }
    });
}
function menuOp2() {
    let namePlanet = prompt("Qual o nome do planeta que deseja modificar?");
    let sit = promptValidSituation();
    attSituation(namePlanet, sit);
}
function removeSatOrAddSat(namePlanet, nameSat, operation) {
    planets.forEach(planet => {
        if (planet.name === namePlanet) {
            let indice = planet.satelites.indexOf(nameSat);
            if (indice === -1 && operation === 'add') {
                planet.satelites.push(nameSat);
                console.log(typeof (planet.satelites));
                alert('Satélite adicionado');
                optionUser = 0;
            }
            if (operation === 'remove') {
                if (planet.satelites.length <= 0)
                    return alert("Não há nenhum satélite cadastrado");
                else {
                    planet.satelites.splice(indice, 1);
                    alert('Satélite removido');
                    optionUser = 0;
                }
            }
        }
    });
}
function menuOp4(op) {
    let name = prompt("Qual o nome do planeta?");
    let nomeSatel = prompt(`Qual o nome do satélite que deseja ${op === 'add' ? 'adicionar' : 'remover'}?`);
    removeSatOrAddSat(name, nomeSatel, op);
}
function listPlanets() {
    let response = '';
    for (let i = 1; i <= planets.length; i++) {
        response += `Planeta N°${i}
        Nome: ${planets[i - 1].name}
        Coordenadas: ${planets[i - 1].coordenadas}
        Situação: ${planets[i - 1].situation}
        Satélites: ${planets[i - 1].satelites.length} 
        ${planets[i - 1].satelites}\n`;
    }
    return alert(response);
}
while (optionUser !== 6) {
    optionUser = Number(prompt(`O que deseja fazer?
        1 - Cadastrar planeta
        2 - Atualizar situação
        3 - Adicionar um satélite
        4 - Remover um satélite
        5 - Listar os planetas
        6 - Encerrar
    `));
    switch (optionUser) {
        case 1:
            menuOp1();
            break;
        case 2:
            menuOp2();
            break;
        case 3:
            menuOp4('add');
            break;
        case 4:
            menuOp4('remove');
            break;
        case 5:
            listPlanets();
            break;
        case 6:
            alert("Encerrando aplicação...");
            break;
        default:
            alert("Opção inávlida...");
            break;
    }
}
