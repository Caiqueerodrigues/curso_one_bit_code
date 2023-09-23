var spaceship = [];
function createSpaceship() {
    var nome = String(prompt("Informe o nome da nave"));
    var piloto = String(prompt("informe o nome do PILOTO"));
    var limite = Number(prompt("informe quantidade de tripulação"));
    var tripulação = Array(prompt("informe os nomes da tripulação"));
    spaceship.push({
        name: nome,
        pilot: piloto,
        crewLimit: limite,
        crew: tripulação,
        inMission: false
    });
    alert("Nave ".concat(nome, " cadastrada"));
}
function addCrew(nameSpaceship, nomeCrew) {
    spaceship.forEach(function (spaceship) {
        var quantityCrews = spaceship.crew.length;
        if (spaceship.name === nameSpaceship) {
            if (quantityCrews < spaceship.crewLimit) {
                spaceship.crew.push(nomeCrew);
                alert('Adicionado a tripulação');
            }
            else
                alert("Limite máximo de tripulantes já preenchido");
        }
    });
}
function sendMission(nameSpaceship) {
    spaceship.forEach(function (nave) {
        if (nave.name === nameSpaceship) {
            if (nave.inMission === false && nave.crew.length >= 2) {
                nave.inMission = true;
                alert("A nave ".concat(nave.name, " foi enviada em miss\u00E3o"));
            }
            else if (nave.inMission === false && nave.crew.length < 3) {
                alert("A nave ".concat(nave.name, " n\u00E3o pode ser enviada, Tripula\u00E7\u00E3o insuficiente."));
            }
            else if (nave.inMission)
                alert("A nave ".concat(nave.name, " j\u00E1 se encontra em miss\u00E3o"));
        }
    });
}
function listSpaceship() {
    var _loop_1 = function (i) {
        var crewsName = '';
        spaceship[i].crew.forEach(function (nome) { return crewsName += "".concat(nome, ","); });
        alert("A ".concat(i + 1, "\u00AA nave \u00E9: ").concat(spaceship[i].name, "\n            Com o piloto: ").concat(spaceship[i].pilot, "\n            Com o limite de tripula\u00E7\u00E3o: ").concat(spaceship[i].crewLimit, "\n            Sua tripula\u00E7\u00E3o s\u00E3o: ").concat(crewsName, "\n            Est\u00E1 em miss\u00E3o: ").concat(spaceship[i].inMission ? 'Sim' : 'Não'));
    };
    for (var i = 0; i < spaceship.length; i++) {
        _loop_1(i);
    }
}
var optionMenu = 0;
function menu() {
    while (optionMenu !== 5) {
        optionMenu = Number(prompt("O que deseja fazer? \n            1 - Cadastrar uma nova nave\n            2 - Adicionar um tripulante a nave exitente\n            3 - Enviar nave para miss\u00E3o\n            4 - Listar as naves\n            5 - Encerrar"));
        switch (optionMenu) {
            case 1:
                createSpaceship();
                break;
            case 2:
                var nameSpaceship = String(prompt("Qual o nome da nave que deseja adiconar o tripúlante?"));
                var nameCrew = String(prompt("Qual o nomedo tripulante?"));
                addCrew(nameSpaceship, nameCrew);
                break;
            case 3:
                var spaceshipName = String(prompt("Qual o nome da nave que deseja enviar para missão?"));
                sendMission(spaceshipName);
                break;
            case 4:
                listSpaceship();
                break;
            case 5:
                alert('Encerrando o sistema...');
                break;
            default:
                alert("Opção inválida. . .");
        }
    }
}
menu();
