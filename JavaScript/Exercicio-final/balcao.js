function balcaoVagas (value) {
    let vagasDisponiveis =[
        {
            nome: `Auxiliar`,
            descrição: `Ajudará em todos os processos`,
            data: `31/12/2023`,
            candidatos: 0
        },
        {
            nome: `Cozinheiro`,
            descrição: `Ajudará em todos os processos da cozinha`,
            data: `31/08/2023`,
            candidatos: 0
        }
    ]
    let vagas = `Estas são as vagas Disponíveis: \n`
    let visor = document.getElementById(`visor`)

    if (value === `fim`) {
        document.getElementById(`corpo`).style.display=`none`
        document.querySelector(`h1`).innerText = `Recomece o processo, ATUALIZANDO a página`
    }
    if (value === `inscrever`) {

    }
    if (value === `criar`) {
        let adicionarVagaNome = prompt(`Digite o NOME/Função da vaga: `)
            if(adicionarVagaNome === ``) {
                alert(`[ERRO] Adicione um nome/Função a Vaga`)
                adicionarVagaNome = prompt(`Digite o NOME/Função da vaga: `)
            }
        let adicionarVagaDescricao = prompt(`Uma pequena DESCRIÇÃO da vaga: `)
            if(adicionarVagaDescricao === ``) {
            alert(`[ERRO] Adicione um Descrição a Vaga`)
            adicionarVagaDescricao = prompt(`Uma pequena DESCRIÇÃO da vaga: `)
            }
            let adicionarVagaData =(prompt(`Qual a data de EXPIRAÇÃO da vaga: `))
            if(adicionarVagaData === ``) {
                alert(`[ERRO] Adicione um Data a Vaga`)
                adicionarVagaData =(prompt(`Qual a data de EXPIRAÇÃO da vaga: `))
            }
        let confirmarDados = `Confirme por favor os dados da vaga: \n Nome da Vaga: ${adicionarVagaNome} \n Descrição da vaga: ${adicionarVagaDescricao} \n Data de Expiração: ${adicionarVagaData}`
        let confirmaçao = confirm(`${confirmarDados} \n (Se estiver tudo certo, OK, se não CANCELAR)`)
        if (confirmaçao === true) {
            vagasDisponiveis.push({
                nome: adicionarVagaNome,
                descrição: adicionarVagaDescricao,
                data: adicionarVagaData,
                candidatos: 0
            })
            visualizar()
        } else {
            alert(`Reinicie o processo de Criação`)
        }
            
    }
    if (value === `excluir`){

    }
    if (value === `visualizar`) {
         visualizar()
    }
    if (value === `listar`) {
        for (i = 0; vagasDisponiveis.length > i; i++) {
        vagas += (`Vaga Nº ${i+1} - Função: ${vagasDisponiveis[i].nome} \n`)
        }
    } 
    visor.innerText = vagas
    console.log(vagasDisponiveis.length)
    console.log(vagasDisponiveis)
    
    function visualizar(){
        for (i = 0; vagasDisponiveis.length > i; i++) {
            vagas += (`Vaga Nº ${i+1} - Função: ${vagasDisponiveis[i].nome} \n`)
            }
    }
}
