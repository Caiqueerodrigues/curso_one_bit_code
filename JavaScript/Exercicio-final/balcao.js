var vagasDisponiveis =[
    {
        nome: `Auxiliar`,
        descrição: `Ajudará em todos os processos`,
        data: `31/12/2023`,
        candidatos: 2,
        nomesCandidatos: `Felipe, Paulo` 
    },
    {
        nome: `Cozinheiro`,
        descrição: `Ajudará em todos os processos da cozinha`,
        data: `31/08/2023`,
        candidatos: 1,
        nomesCandidatos: `Cristopher`
    },
    {
        nome: `Cortador`,
        descrição: `Cortar todos os tipos de materiais Sintéticos para produção de calçados`,
        data: `13/03/2023`,
        candidatos: 4,
        nomesCandidatos: `Daniel, Danilo, Adrian, Cristiano` 
    },
    {
        nome: `Dev Front End Jr`,
        descrição: `Ajudará em todos os processos da criação e manutenção de projetos WEB`,
        data: `31/09/2024`,
        candidatos: 1,
        nomesCandidatos: `Caique`
    }
]
var visor = document.getElementById(`visor`)

function balcaoVagas (value) {
    let vagas = `Estas são as vagas Disponíveis: \n `

        visor.innerHTML = vagas

    if (value === `fim`) {
        document.getElementById(`corpo`).style.display=`none`
        document.querySelector(`h1`).innerText = `Recomece o processo, ATUALIZANDO a página`
    }
    if (value === `inscrever`) {
        let inscrever = prompt(`Qual seu Nome? `)
        let qualVaga = Number(prompt(`Qual o Número da vaga que deseja se Candidatar?`))
            qualVaga --
        let confirmarIncricao = confirm(`A vaga que deseja se increver é: \n Função: ${vagasDisponiveis[qualVaga].nome}\n Descrição: ${vagasDisponiveis[qualVaga].descrição} \n Data: ${vagasDisponiveis[qualVaga].data} \n Com ${vagasDisponiveis[qualVaga].candidatos} Candidaturas?`)
        if (confirmarIncricao === true) {
            vagasDisponiveis[qualVaga].candidatos ++
            vagasDisponiveis[qualVaga].nomesCandidatos += (`, ${inscrever}`)
            visor.innerText = (`Inscrição feita com Sucesso \n Função: ${vagasDisponiveis[qualVaga].nome} \n Descrição: ${vagasDisponiveis[qualVaga].descrição} \n Data: ${vagasDisponiveis[qualVaga].data} \n Candidaturas: ${vagasDisponiveis[qualVaga].candidatos} \n Nomes dos Candidatos: ${vagasDisponiveis[qualVaga].nomesCandidatos}`)
        } else {
            alert(`Candidatura CANCELADA!`)
        }

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
                candidatos: 0,
                nomesCandidatos: ``
            })

        } else {
            alert(`Reinicie o processo de Criação`)
        }
        console.log(vagas)
    }
    if (value === `excluir`){
        let excluir = Number(prompt(`Digite qual o NÚMERO da vaga que deseja EXCLUIR:`))
        if (excluir != null) {
            excluir -= 1
            let querExcluir = confirm(`Tem certeza que deseja EXCLUIR \n vaga de ${vagasDisponiveis[excluir].nome} \n Descrição: ${vagasDisponiveis[excluir].descrição} \n Data: ${vagasDisponiveis[excluir].data} ? \n (OK = Confirmar/ CANCELAR = Não)`)
            if (querExcluir === true) {
                vagasDisponiveis.splice(excluir,1)
                alert(`A vaga foi Removida com Sucesso.`)
            } else {
                alert(`Cancelado a Remoção de Vagas`)
            }
        }
    }
    if (value === `visualizar`) {
        let numeroDaVaga = Number(prompt(`Digite o NÚMERO da vaga que gostaria de mais detalhes:`))
            numeroDaVaga -= 1
            visor.innerText = `Vaga Nº ${numeroDaVaga+1} Funcão: ${vagasDisponiveis[numeroDaVaga].nome} \n Descrição: ${vagasDisponiveis[numeroDaVaga].descrição} \n Data Limite: ${vagasDisponiveis[numeroDaVaga].data} \n Nº de Candidatura: ${vagasDisponiveis[numeroDaVaga].candidatos} \n Nomes: ${vagasDisponiveis[numeroDaVaga].nomesCandidatos}`
    }
    if (value === `listar`) {
        visualizar()
        visor.innerText = vagas
    }    
    
    function visualizar(){
        for (i = 0; vagasDisponiveis.length > i; i++) {
            vagas += (`Vaga Nº ${i+1} - Função: ${vagasDisponiveis[i].nome} \n Candidaturas: ${vagasDisponiveis[i].candidatos} \n`)
            }
    }
}
