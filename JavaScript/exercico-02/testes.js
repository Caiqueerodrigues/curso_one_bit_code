function velocidade() {
   let carroUm = prompt(`Digite aqui um MODELO de um carro:`)
      let velCarroUm = Number(prompt(`Agora digite a Velocidade do PRIMEIRO carro:`))

   let carroDois = prompt(`Digite aqui um MODELO de OUTRO carro:`)
   let velCarroDois = Number(prompt(`Agora digite a Velocidade do SEGUNDO carro:`))
   let res = 0

   if (velCarroUm < velCarroDois) {
        let res = (velCarroDois - velCarroUm)
        alert(`O carro ${carroDois} é o mais rápido em ${res} KM/H`)
   } else if (velCarroUm > velCarroDois) {
    let res = (velCarroUm - velCarroDois)
    alert(`O carro ${carroUm} é o mais rápido em ${res} KM/H`)
   } else if (velCarroUm === velCarroDois) {
    alert(`A velocidade de um ${carroUm} e um ${carroDois} é a MESMA`)
   }
}

function dano() {
    let person1 = prompt(`Digite aqui o NOME do PRIMEIRO personagem:`)
    let poder1 = Number(prompt(`Agora digite o PODER deste Persongem:`))

    let person2 = prompt(`Digite aqui o NOME do SEGUNDO personagem:`)
    let vida2 = Number(prompt(`Digite a quantidade de pontos de vida que o SEGUNDO persongem possui:`))
    let poder2 = Number(prompt(`Digite o poder do SEGUNDO personagem:`))
    let escudo2 = confirm(`O SEGUNDO personagem possui escudo?`)

    if (poder1 > poder2 && escudo2 === false) {
        let dano = poder1 - poder2
        alert(`O dano foi de ${dano} no personagem ${person2} restando-lhe ${vida2 - dano} pontos de vida \n o personagem ${person1} segue sem danos com ${poder1} pontos`)
    } else if (poder1 > poder2 && escudo2 === true) {
        let dano = ((poder1 - poder2) /2)
        alert(`O dano foi de ${dano} no personagem ${person2}, menor por possui ESCUDO, restando-lhe ${vida2 - dano} pontos de vida \n o personagem ${person1} segue sem danos com ${poder1} pontos` )
    } else if (poder1 <= poder2) {
        let dano = 0
        alert(`O dano no personagem ${person2} foi de ${dano} restando-lhe  ${vida2 - dano} pontos de vida \n o personagem ${person1} segue sem danos com ${poder1} pontos`)
    }
}