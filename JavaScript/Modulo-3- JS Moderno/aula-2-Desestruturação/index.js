const pessoa = {
    name: `Caique`,
    trabalho: `desenvolvedor`,
    pais: [`João`, `Roberta`]
}

//forma tradicional 
// const nome = pessoa.name


//em objetos a const tem que ter o mesmo nome do dado
const {trabalho, name} = pessoa
console.log(trabalho, name)


//em arrays ele segue a ordem dos dados do array na desestruturacao
const [pai, mae] = pessoa.pais
console.log(pai,mae)

//caso de funcoes
function createUser({name, trabalho, pais}) {
    const id= Math.floor(Math.random() * 9999)
    return {
        id,
        name:name,
        trabalho: trabalho,
        pais: pais
    }
}

const caique = createUser(pessoa)

console.log(caique)