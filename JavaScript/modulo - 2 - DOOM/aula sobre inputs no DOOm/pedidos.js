const form = document.getElementById(`form`)

form.addEventListener(`submit`, function(ev){
    ev.preventDefault()
    const name = document.getElementById(`name`).value
    const endereço = document.getElementById(`address`).value
    const pao = document.querySelector('select[name="pao"]').value
    const recheio = document.querySelector('input[name="recheio"]:checked').value
    const obs = document.getElementById(`obs`).value

    let salada = ` `
        document.querySelectorAll('input[name="salada"]:checked').forEach(function (item) {
            salada +=` - ${item.value} \n`
        })

    console.log({
        name,
        endereço,
        pao,
        recheio,
        salada,obs
    })

    alert (
        `Pedido Realizado ! \n
        Nome: ${name} \n
        Endereço: ${endereço} \n
        Tipo de Pão: ${pao} \n
        Recheio: ${recheio} \n
        Salada: ${salada} \n
        Observações: ${obs}`
    )

    form.reset()
})

