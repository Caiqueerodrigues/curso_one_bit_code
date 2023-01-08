function imoveis () {    
    let proprietários = []
    let imoveis = {
        quartos:[],
        banheiros:[],
        garagem:[],
    }
    let qtdCasas = 0

    let resposta = ``

    for(;resposta != `3`;) {
        do {
            resposta = prompt(`Temos ${qtdCasas} imóveis cadastrados. \n
            OPÇÕES: \n
            1 - SALVAR NOVO IMÓVEL \n
            2 - MOSTRAR TODOS OS IMÓVEIS CADASTRADOS \n
            3 - SAIR`)
            switch(resposta) {
                case `1`:
                    let nomeProprietario = prompt(`Digite o nome do proprietário:`)
                    proprietários.push(nomeProprietario)
                    let qtdQuartos = prompt(`Qual a quantidade de quartos do IMÓVEL?`)
                    imoveis.quartos.push(qtdQuartos)
                    let qtdbanheiro = prompt(`Qual a quantidade de banheiros que o imóvel possui?`)
                    imoveis.banheiros.push(qtdbanheiro)
                    let possuiGaragem = prompt(`O imóvel possui garagem? (Sim/Nao)`)
                    imoveis.garagem.push(possuiGaragem)
                    qtdCasas += 1
                    resposta = ``
                    break
                case `2`:
                    if (qtdCasas === 0) {
                        alert(`Por favor, cadastre pelo menos um IMÓVEL`)
                    }else {
                        let resultadoFinal = `Temos no total ${qtdCasas} cadastradas.   `

                        for (i = 0; qtdCasas > i; i++) {
                            if (imoveis.garagem[i] === `sim`){
                                let respostaGaragem = `possui Garagem`
                                resultadoFinal += (`Sendo: \n
                                A ${(i+1)}ª do(a) sr(a) ${proprietários[i]}, possuindo ${imoveis.quartos
                                [i]} quarto(s), ${imoveis.banheiros[i]} banheiro(s) e ${respostaGaragem}.`)
                            } else if (imoveis.garagem[i] === `nao`){
                                respostaGaragem = `não possui garagem`
                                resultadoFinal += (`\n Sendo: \n
                                A ${(i+1)}ª do(a) sr(a) ${proprietários[i]}, possuindo ${imoveis.quartos
                                [i]} quarto(s), ${imoveis.banheiros[i]} banheiro(s) e ${respostaGaragem}.`)
                            }
                        }
                        alert(resultadoFinal)
                    }
                    break
                case `3`:
                    alert(`Encerrando aplicação!`)
                    document.querySelector(`div`).style.display=`none`
                    break
                default:
                    alert(`[ERRO] Opção inválida, Tente novamente`)
                    resposta = prompt(`Temos ${qtdCasas} imóveis cadastrados. \n
                    OPÇÕES: \n
                    1 - SALVAR NOVO IMÓVEL \n
                    2 - MOSTRAR TODOS OS IMÓVEIS CADASTRADOS \n
                    3 - SAIR`)
            }
        } while (resposta != `3`)
    }
}