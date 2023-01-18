let btn = document.getElementById(`btn`)
var desenvolvedores = [{}]
const fieldset = document.getElementById(`fieldset`)
const form = document.querySelector(`form`)
var nome = document.getElementById('name')

btn.addEventListener(`click`, function(ev) {
    ev.preventDefault()
    fieldset.style.display=`block`

    let tecnologia = document.createElement(`input`)
        tecnologia.type= `text`    
        tecnologia.id= `tec`
        tecnologia.placeholder=`EX: JavaScript`
    let labelTec = document.createElement(`label`)
        labelTec.innerHTML = `<label for= tec >Nome da Tecnologia: </label>`

    let legend = document.createElement(`legend`)
        legend.innerText=`Dados da Tecnologia`

    let paragraph = document.createElement(`p`)
        paragraph.innerText=`Tempo de Experiência: `
    let Tempo02 = document.createElement(`input`)
        Tempo02.type=`radio`
        Tempo02.id=`tempo02`
        Tempo02.value = `De 0 a 2 Anos`
        Tempo02.name=`experiencia`
    let label02 = document.createElement(`label`)
        label02.innerHTML = `<label for= tempo02> 0 à 2 Anos</label>`

    let Tempo34 = document.createElement(`input`)
        Tempo34.type=`radio`
        Tempo34.id=`tempo34`
        Tempo34.value = `De 3 a 4 Anos`
        Tempo34.name=`experiencia`
    let label34 = document.createElement(`label`)
        label34.innerHTML = `<label for= tempo34> 3 à 4 Anos</label>`

    let Tempo5 = document.createElement(`input`)
        Tempo5.type=`radio`
        Tempo5.id=`tempo5`
        Tempo5.value = `5 Anos ou Mais`
        Tempo5.name=`experiencia`
    let label5 = document.createElement(`label`)
        label5.innerHTML = `<label for= tempo5> 5 Anos ou Mais</label>`

    let btnRemove = document.createElement(`button`)
        btnRemove.innerText=`Remover Tecnologia`
        btnRemove.addEventListener(`click`, function (ev) {
            ev.preventDefault()
            nome.value = ``
            fieldset.innerHTML = ``
            fieldset.style.display=`none`
            btnRemove.style.display=`none`
            btnSave.style.display= `none`
        })

    let btnSave = document.createElement(`button`)
        btnSave.innerText=`Salvar Tecnologia`
        btnSave.addEventListener(`click`, function(ev){
            ev.preventDefault()
            let confirmacao = confirm(`Gostaria de Adiconar o Desenvolvedor: ${nome.value} \n Tecnlogogia: ${tecnologia.value} \n Esperiência de: ${document.querySelector(`input[name="experiencia"]:checked`).value}`)
            if (confirmacao === true) {
                desenvolvedores.push({
                    Nome:nome.value,
                    Tecnologia: tecnologia.value,
                    Experiência: document.querySelector(`input[name="experiencia"]:checked`).value
                })
            } else {alert(`OK! Cancelado!`)}
            console.log(desenvolvedores)
            document.querySelector(`form`).reset()
            
        })

    fieldset.append(legend, labelTec, document.createElement(`br`), tecnologia, paragraph, Tempo02, label02, Tempo34, label34, Tempo5, label5)
    fieldset.append(document.createElement(`br`), document.createElement(`br`))

    fieldset.appendChild(btnSave)

    form.appendChild(btnRemove)
})
