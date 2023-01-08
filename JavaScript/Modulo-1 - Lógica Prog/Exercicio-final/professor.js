const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        //1. nome, X candidatos
        textoFinal += indice + `.`
        textoFinal += vaga.nome 
        textoFinal += `${vagas.candidatos.length} Candidatos`
        return textoFinal
    }, `` )
    alert(vagasEmTexto)
}

function novaVaga () {
    const nome = prompt(`Informe um nome para a Vaga:`)
    const descricao = prompt(`Informe uma Descrição para a vaga:`)
    const dataLimite = prompt(`Informe uma Data Limite para a vaga: \n (dd/mm/aaaa)`)
    const confirmacao = confirm(`Deseja criar uma nova vaga com essas informações? \n Nome da Vaga:${nome} \n Descrição: ${descricao} \n Data Limite: ${dataLimite}`)

    if (confirmacao === true){
     const novaVaga = { nome, descricao, dataLimite, dandidatos: []}
     vagas.push(novaVaga)
     alert(`Vaga Adicionada!\n Obrigado(a)`)
    }
}

function exibirVaga () {
    const indice = prompt(`Informe o índice da vaga que deseja exibir: `)
    const vaga = vagas[indice]

    const candidatosEmTexo = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + '\n' + candidato
    }, ``)
    alert(`Vaga Nº ${indice} Nome: ${vaga.nome} \n Descrição: ${vaga.descricao} \n Data Limite: ${vaga.dataLimite} \n Quantidade de Candidatos: ${vagas.candidatos.length} \n Candidatos Inscritos ${candidatosEmTexo}`)
}

function inscreverCandidato () {
    const candidato = prompt(`Informe o nome do candidato: `)
    const indice = prompt(`Informe o índice da vaga para qual o candidato deseja se inscrever: `)
    const vaga = vaga[indice]

    const confirmacao = confirm(`Deseja inscrever o Candidato ${candidato} para a vaga de ${indice} \n Nome da Vaga: ${vaga.nome} \n Descrição: ${vaga.descricao} \n Data Limite: ${vaga.dataLimite}`)
    if (confirmacao === true) {
        vaga.candidato.pus(candidato)
        alert(`Inscrição Realizada com Sucesso`)
    }
} 

function excluirVaga () {
    const indice = prompt(`Informe o índice da vaga que deseja Excluir: `)
    const vaga = vaga[indice]

    const confirmacao = confirm(`Tem certeza que deseja excluir a Vaga: ${vaga.nome} \n Descrição: ${vaga.descricao} \n Data Limite: ${vaga.dataLimite}?`)
    if(confirmacao === true) {
        vagas.splice(indice,1)
        alert(`Vaga Excluída com Sucesso!`)
    }
}

function exibirMenu () {
    const opcao = prompt(`
    Cadastro de Vagas de Empregos \n\n
    Escolha das opções Abaixo:\n 
     1 - Listar vagas Disponíveis \n
     2 - Adicionar uma nova Vaga \n 
     3 - Visualizar uma Vaga Específica \n
     4 - Inscrever um Candidato \n
     5 - Excluir uma Vaga \n
     6 - Sair
    `)
    return opcao
}

function executar() {
    let opcao = ``

    do {
        opcao = exibirMenu()
        
        switch(opcao) {
            case `1`:
                listarVagas()
                break
            case `2`:
                novaVaga()
                break
            case `3`:
                novaVaga()
                break
            case `4`:
                inscreverCandidato()
                break
            case `5`:
                excluirVaga()
                break
            case `6`:
                alert(`Encerrando Aplicação! \nSaino...`)
                break
            default:
                alert(`[ERRO] Digite uma Opção Válida`)
        }
    } while(opcao !== `6`){

    }
}

executar()