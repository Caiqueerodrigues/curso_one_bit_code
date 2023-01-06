function balcaoVagas (value) {
    let vagasDisponiveis =[
        {
            nome: `Auxiliar`,
            descrição: `Ajudará em todos os processos`,
            data: `31/12/2023`,
        },
        {
            nome: `Cozinheiro`,
            descrição: `Ajudará em todos os processos da cozinha`,
            data: `31/08/2023`,
        }
    ]
    let vagas = `Estas são as vagas Disponíveis: \n`
    let visor = document.getElementById(`visor`)

    if (value === `fim`) {
        document.getElementById(`corpo`).style.display=`none`
        document.querySelector(`h1`).innerText = `Recomece o processo, ATUALIZANDO a página`
    }
    
    if (value === `listar`) {
        for (i = 0; vagasDisponiveis.length > i; i++) {
        vagas += (`Vaga Nº ${i+1} - Função: ${vagasDisponiveis[i].nome} \n`)
        }
    } 
    visor.innerText = vagas
    if (value === `inscrever`) {

    }
    if (value === `criar`) {
        let adicionarVagaNome = prompt(`Digite o NOME da vaga: `)
        let adicionarVagaDescricao = prompt(`Uma pequena DESCRIÇÃO da vaga: `)
        let adicionarVagaData =(prompt(`Qual a data de EXPIRAÇÃO da vaga: `))
        let confirmarDados = `Confirme por favor os dados da vaga: \n Nome da Vaga: ${adicionarVagaNome} \n Descrição da vaga: ${adicionarVagaDescricao} \n Data de Expiração: ${adicionarVagaData}`
        alert(confirmarDados)
        vagasDisponiveis[0].slice(0,2)
        vagasDisponiveis.push(adicionarVagaNome)
        vagasDisponiveis.descrição.push(adicionarVagaDescricao)
        vagasDisponiveis.data.push(adicionarVagaData)
    }
    if (value === `excluir`){

    }
    if (value === `visualizar`) {

    }
    }
