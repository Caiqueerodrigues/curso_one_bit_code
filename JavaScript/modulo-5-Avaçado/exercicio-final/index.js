let form = document.querySelector(`form`)
let divPai = document.createElement('div')

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
        line.id = operation.id
        line.classList.add(`operacao`)

    line.append(idOp, origem, nome, valor)
    extrato.append(line)
}

document.getElementById(`entrada`).addEventListener(`click`, (ev) => {
    ev.preventDefault()
    if(form.length != 0) {
        form.removeChild(divPai)
    }

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
        divPai = document.createElement('div')
    const btnConfirmar  = document.createElement(`button`)
        btnConfirmar.classList.add(`btn`)
        btnConfirmar.textContent= `Confirmar`
        btnConfirmar.style.width=`max-content`
        btnConfirmar.style.alignSelf=`center`
        btnConfirmar.style.margin='5px auto'

    labelName.append(inputNome)
    labelOrigem.append(inputOrigem)
    labelValor.append(inputValor)
    labelEntrada.append(opcaoEntrada)
    labelSaida.append(opcaoSaida)
    divPai.append(labelName, document.createElement(`br`), labelOrigem, document.createElement(`br`), labelValor, document.createElement(`br`), labelEntrada, document.createElement(`br`), labelSaida, document.createElement(`br`), btnConfirmar)

    if(form.length === 0) {
        form.append(divPai)
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

        let escolha = null
        document.getElementsByName(`entrada/saida`).forEach( opcao => {
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
            document.querySelector(`.operacoes`).textContent = ''
            setInterval( () => {
               form.reset()      
            },1000 * 1,5)
            getOperations() 
            form.removeChild(divPai)
        }
    })
})

document.getElementById('correcao').addEventListener('click', (ev) => {
    ev.preventDefault()
    if(form.length != 0) {
        form.removeChild(divPai)
    }

    const labelId = document.createElement('label')
        labelId.innerHTML='<label for="id"> Qual N° da operação: </label>'
    const inputId = document.createElement('input')
        inputId.classList.add(`input`)
        inputId.type='number'
        inputId.placeholder= `EX: 4`
    const btnProcurar = document.createElement('button')
        btnProcurar.classList.add(`btn`)
        btnProcurar.textContent= `Confirmar`
        btnProcurar.style.width=`max-content`
        btnProcurar.style.alignSelf=`center`
        btnProcurar.style.margin='5px auto'

    divPai = document.createElement('div')

    divPai.append(labelId, inputId, document.createElement('br'), btnProcurar)
    form.append(divPai)

    btnProcurar.addEventListener('click',async (ev)=> {
        ev.preventDefault()

        if(inputId.value === '' || inputId.valu === null) {
            alert('[ERRO] Por favor digite uma operação válida!')
            return
        } else {
            let modificacao = ''
            const result = await fetch(`http://localhost:3000/operations`)
            let operation = await result.json()
            operation.forEach(element => {
                if(element.id == inputId.value) {
                    modificacao = element
                    divPai.innerText = ''
                }
            })
            if(!modificacao) {
                alert('[ERRO] Verifique o N° da operação informada!')
            }
            const labelName = document.createElement(`label`)
                labelName.innerHTML= `<label for="name"> Nome: </lalbel>`
            const inputNome = document.createElement(`input`)
                inputNome.type = `text`
                inputNome.id=`name`
                inputNome.classList.add(`input`)
                inputNome.value= modificacao.nome
            const labelValor = document.createElement(`label`)
                labelValor.innerHTML= `<label for="value"> Valor: </lalbel>`
            const inputValor = document.createElement(`input`)
                inputValor.type=`number`
                inputValor.id=`value`
                inputValor.classList.add(`input`)
                inputValor.value= modificacao.valor
            const labelOrigem = document.createElement(`label`)
                labelOrigem.innerHTML= `<label for="origem"> Origem: </lalbel>`
            const inputOrigem = document.createElement(`input`)
                inputOrigem.type=`text`
                inputOrigem.id=`origem`
                inputOrigem.classList.add(`input`)
                inputOrigem.value= modificacao.origem
                
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

            if(modificacao.operacao === 'entrada') { 
                opcaoEntrada.checked='true'
            } else {
                opcaoSaida.checked='true'
            }

            divPai = document.createElement('div')
            const btnSalvar  = document.createElement(`button`)
                btnSalvar.classList.add(`btn`)
                btnSalvar.textContent= `Salvar`
                btnSalvar.style.width=`max-content`
                btnSalvar.style.alignSelf=`center`
                btnSalvar.style.margin='5px auto'
        
            labelName.append(inputNome)
            labelOrigem.append(inputOrigem)
            labelValor.append(inputValor)
            labelEntrada.append(opcaoEntrada)
            labelSaida.append(opcaoSaida)

            divPai.append(labelName, document.createElement(`br`), labelOrigem, document.createElement(`br`), labelValor, document.createElement(`br`), labelEntrada, document.createElement(`br`), labelSaida, document.createElement(`br`), btnSalvar)
            
            form.append(divPai)

            //salvar alterações no back
            btnSalvar.addEventListener('click', async (ev) => {
                ev.preventDefault()

                const radio = document.getElementsByName(`entrada/saida`)
                let escolha = null
                radio.forEach( (opcao) => {
                    if(opcao.checked) {
                        escolha = opcao.value
                    }
                })

                const altercaoFeita = {
                    id: modificacao.id,
                    nome: inputNome.value,
                    valor: inputValor.valule,
                    origem: inputOrigem.value,
                    operacao: escolha
                }

                // const resposta = await fetch(`http://localhost:3000/operations`, {
                //     method: 'post',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(dadosOperacao)
                // })

                const salvarAlterecao = await fetch ('http://localhost:3000/operations', {
                    method: 'patch',
                    headers: {
                        'Content-Type': 'aplication/json'
                    },
                    //converter o obj para string
                    body: JSON.stringify(altercaoFeita)
                })

                
            })
        }
    })

})

getOperations()