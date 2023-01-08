function turista() {
    const nome = prompt(`Qual seu nome?`)
    cidades = []

    let resposta = prompt(`Prazer ${nome}, Você já visitou alguma cidade? (Sim/Não)`)

    if (resposta === `não`) {
        alert(`${nome} foi um prazer conversar com você!!!`)
    } else if (resposta === `nao`) {
        alert(`[ERRO] Por favor digite uma RESPOSTA válida`)
    }

    while (resposta ===`sim`) {
        cidades.push(prompt(`Qual o nome desta cidade?`))
        resposta = prompt(`Já visitou alguma outra cidade? (Sim/Não)`)
    }
    if (cidades.length !== 0){
        alert(
            `${nome} Você já visitou ${cidades.length} cidade(s).\n
            Sendo ela(s): \n
            ${cidades}`
        )
    }
}