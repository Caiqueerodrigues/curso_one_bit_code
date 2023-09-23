var spaceship = [];
function createSpaceship() {
    var nome = String(prompt("Informe o nome da nave"));
    var piloto = String(prompt("informe o nome do PILOTO"));
    var limite = Number(prompt("informe quantidade de tripulação"));
    var tripulação = Array(prompt("informe os nomes da tripulação"));
    var emMissao = Boolean(confirm("A nave ".concat(nome, " est\u00E1 em miss\u00E3o?")));
    spaceship.push({
        name: nome,
        pilot: piloto,
        crewLimit: limite,
        crew: tripulação,
        inMission: emMissao
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
            if (nave.inMission === false) {
                nave.inMission = true;
                alert("A nave ".concat(nave.name, " foi enviada em miss\u00E3o"));
            }
            else
                alert("A nave ".concat(nave.name, " j\u00E1 se encontra em miss\u00E3o"));
        }
    });
}
function listSpaceship() {
    var _loop_1 = function (i) {
        var crewsName = '';
        spaceship[i].crew.forEach(function (nome) { return crewsName += "".concat(nome, ","); });
        console.log("A ".concat(i + 1, "\u00AA nave \u00E9: ").concat(spaceship[i].name, "\n            Com o piloto: ").concat(spaceship[i].pilot, "\n            Com o limite de tripula\u00E7\u00E3o: ").concat(spaceship[i].crewLimit, "\n            Sua tripul\u00E7\u00E3o s\u00E3o: ").concat(crewsName, "\n            Est\u00E1 em miss\u00E3o: ").concat(spaceship[i].inMission ? 'Sim' : 'Não'));
    };
    for (var i = 0; i < spaceship.length; i++) {
        _loop_1(i);
    }
}
