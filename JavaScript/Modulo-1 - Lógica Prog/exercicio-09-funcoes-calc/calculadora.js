var visor = document.getElementById(`visor`)

function triangulo() {
    let baseTriangulo = Number(prompt(`Digite a BASE do Triângulo:`))
    let ladoTriangulo = Number(prompt(`Digite o LADO do triângulo: `))
    let resultado = baseTriangulo * ladoTriangulo /2
    if (baseTriangulo <= 0 || ladoTriangulo <= 0) {
        alert(`[ERRO] Por favor, digite um valor válido e inicie novamente`)
    } else {
        visor.innerText= `A área de um Triângulo com base ${baseTriangulo} e lado ${ladoTriangulo} é ${resultado}`
    }
}

function retangulo () {
    let baseRetangulo = Number(prompt(`Digite a BASE do retângulo: `))
    let alturaRetangulo = Number(prompt(`Digite a ALTURA DO retângulo: `))
    if (baseRetangulo <= 0 || alturaRetangulo <= 0) {
        alert(`[ERRO] Por favor, digite um valor válido e inicie novamente`)
    } else {
        let resultado = baseRetangulo * alturaRetangulo
        visor.innerText = `A área de um Retângulo de base ${baseRetangulo} e lados de ${alturaRetangulo} é ${resultado}` 
    }
}

function quadrado() {
    let ladoQuadrado = Number(prompt(`digite o valor dos LADOS do quadrado: `))
    if (ladoQuadrado <= 0) {
        alert(`[ERRO] Por favor, digite um valor válido e inicie novamente`)
    } else {
        let resultado = ladoQuadrado * ladoQuadrado
        visor.innerText = `A área de um quadrado de lados ${ladoQuadrado} é ${resultado}`
    }
}

function trapezio() {
    let baseMaior = Number(prompt(`Digite a BASE MAIOR do Trapézio: `))
    let baseMenor = Number(prompt(`Digite a BASE MENOR do Trapézio: `))
    let altura = Number(prompt(`Digite a altura do Trapézio: `))
    if (baseMaior <= 0 || baseMenor <= 0) {
        alert(`[ERRO] Por favor, digite um valor válido e inicie novamente`)
    }else {
        let resultado = (baseMaior + baseMenor) * (altura/2)
        visor.innerText = `A área de um Trapézio de base ${baseMaior} e ${baseMenor} é ${resultado}`
    }
}

function circulo() {
    let raio = Number(prompt(`Digite o RAIO do círculo: `))
    if (raio <=0) {
        alert(`[ERRO] Por favor, digite um valor válido e inicie novamente`)
    }else {
        let resultado = 3.14 *(raio * raio)
        visor.innerText = `A área de um círculo com raio ${raio} é ${resultado}`
    }
}

function fim() {
    let tela = document.getElementById(`tela`).style.display=`none`
}