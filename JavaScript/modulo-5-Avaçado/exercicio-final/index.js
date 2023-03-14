async function getOperations() {
    const result = await fetch(`http://localhost:3000/operations`)
    const operation = await result.json()
    operation.forEach(mostrar)

    let total = 0

    operation.forEach(op => {
        const resultado = document.querySelector(`span`)
        total += Number(op.valor)
        if(total > 0) {
            resultado.classList.add(`entrada`)
        } else {
            resultado.classList.add(`saida`)
        }
        resultado.textContent = `R$ ${total},00`
    })
   
}

async function mostrar(operation) {
    const extrato = document.querySelector(`.operacoes`)

    const idOp = document.createElement(`p`)
        if(operation.operacao === `entrada`) {
            idOp.classList.add(`entrada`)
        } else {
            idOp.classList.add(`saida`)
        }
        idOp.textContent = operation.id
    const origem = document.createElement(`p`)
        if(operation.operacao === `entrada`) {
            origem.classList.add(`entrada`)
        } else {
            origem.classList.add(`saida`)
        }
        origem.textContent = operation.origem
    
    const valor = document.createElement(`p`)
        if(operation.operacao === `entrada`) {
            valor.classList.add(`entrada`)
        } else {
            valor.classList.add(`saida`)
        }
        valor.textContent = `R$ ${operation.valor},00`

    const nome = document.createElement(`p`)
        if(operation.operacao === `entrada`) {
            nome.classList.add(`entrada`)
        } else {
            nome.classList.add(`saida`)
        }
        nome.textContent = operation.nome  
        
    const line = document.createElement(`fieldset`)
        line.classList.add(`operacao`)

    line.append(idOp, origem, nome, valor)
    extrato.append(line)
}

document.getElementById(`entrada`).addEventListener(`click`, (ev) => {
    ev.preventDefault()

    const form = document.querySelector(`form`)

    const br = document.createElement(`br`)

    const labelName = document.createElement(`label`)
        labelName.innerHTML= `<label for="name"> Nome: </lalbel>`
    const inputNome = document.createElement(`input`)
        inputNome.type = `text`
        inputNome.id=`name`
        inputNome.classList.add(`input`)
        inputNome.placeholder= `Primeiro Nome`
    const labelValor = document.createElement(`label`)
        labelValor.innerHTML= `<label for="value"> Valor: </lalbel>`
    const inputValor = document.createElement(`input`)
        inputValor.type=`number`
        inputValor.id=`value`
        inputValor.classList.add(`input`)
        inputValor.placeholder= `EX: 123.00`
    const labelOrigem = document.createElement(`label`)
        labelOrigem.innerHTML= `<label for="origem"> Origem: </lalbel>`
    const inputOrigem = document.createElement(`input`)
        inputOrigem.type=`text`
        inputOrigem.id=`origem`
        inputOrigem.classList.add(`input`)
        inputOrigem.placeholder = `EX: contas`
        
    const labelEntrada = document.createElement(`label`)
        labelEntrada.innerHTML = `<label for"saida">Entrada: </label>`
    const opcaoEntrada = document.createElement(`input`)
        opcaoEntrada.type=`radio`
        opcaoEntrada.name=`entrada/saida`
        opcaoEntrada.id=`entrada`
        opcaoEntrada.value = `entrada`
    const labelSaida = document.createElement(`label`)
        labelSaida.innerHTML = `<label for"saida">Saída: </label>`
    const opcaoSaida = document.createElement(`input`)
            opcaoSaida.value=`saida`
            opcaoSaida.name=`entrada/saida`
            opcaoSaida.id=`saida`
            opcaoSaida.type=`radio`
    const btnConfirmar  = document.createElement(`button`)
        btnConfirmar.classList.add(`btn`)
        btnConfirmar.textContent= `Confirmar`
        btnConfirmar.style.width=`max-content`
        btnConfirmar.style.alignSelf=`center`

    labelName.append(inputNome)
    labelOrigem.append(inputOrigem)
    labelValor.append(inputValor)
    labelEntrada.append(opcaoEntrada)
    labelSaida.append(opcaoSaida)

    if(form.length == 0) {
        form.append(labelName, br, labelOrigem, document.createElement(`br`), labelValor, br, labelEntrada, labelSaida, btnConfirmar)
    }

    btnConfirmar.addEventListener(`click`, async (ev) => {
        ev.preventDefault()
        if(inputNome.value === ``) {
            inputNome.classList.add(`error`)
        }
        if(inputOrigem.value === ``) {
            inputOrigem.classList.add(`error`)
        } 
        if (inputValor.value === `` || inputValor.value <= 0) {
            inputValor.classList.add(`error`)
        }
        
        const radio = document.getElementsByName(`entrada/saida`)
            let escolha = null
            radio.forEach( (opcao) => {
                if(opcao.checked) {
                    escolha = opcao.value
                }
            })
        if(escolha === null) {
            alert(`Marque Qual tipo de Operação deseja Realizar`)
        }

        if (inputNome.value !== `` && inputOrigem.value !== `` && inputValor.value !== `` && escolha != null){
            inputNome.classList.add(`success`)
            inputOrigem.classList.add(`success`)
            inputValor.classList.add(`success`)

            if(escolha === `entrada`) {
                const dadosOperacao = {
                    nome: inputNome.value,
                    origem: inputOrigem.value,
                    valor: inputValor.value,
                    operacao: `entrada`
                }
                const resposta = await fetch(`http://localhost:3000/operations`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dadosOperacao)
                })
            } else {
                const dadosOperacao = {
                    nome: inputNome.value,
                    origem: inputOrigem.value,
                    valor: `-${inputValor.value}`,
                    operacao: `saida`
                }
                const resposta = await fetch(`http://localhost:3000/operations`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dadosOperacao)
                })
            }            

            setInterval( () => {
               form.reset()       
            },1000 * 3)
        }
        getOperations()

    })
})

getOperations()