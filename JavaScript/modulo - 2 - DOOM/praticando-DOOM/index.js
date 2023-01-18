function addContact() {
    const contactSection = document.getElementById(`contactList`)

    const h3 = document.createElement(`h3`)
    h3.innerText = `Contato`

    const ul = document.createElement(`ul`)

    const nameLi = document.createElement(`li`)
    nameLi.innerText = `Nome: `
    const nameInput = document.createElement(`input`)
    nameInput.type = `text`
    nameInput.name = `full-name`
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement(`br`))

    const phoneLi = document.createElement(`li`)
    phoneLi.innerText = `Telefone: `
    const inputPhone = document.createElement(`input`)
    inputPhone.type= `number`
    inputPhone.name= `phone` 
    phoneLi.appendChild(inputPhone)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement(`br`))

    const endereco = document.createElement(`li`)
    endereco.innerText = `Endereço: `
    const inputEndereco = document.createElement(`input`)
    inputEndereco.type = `text`
    inputEndereco.name = `Endereço`
    endereco.appendChild(inputEndereco)
    ul.appendChild(endereco)
    ul.appendChild(document.createElement(`br`))

    contactSection.append(h3, ul)
}

function removeContact() {
    const contactSection = document.getElementById(`contactList`)

    const Titles = document.getElementsByTagName(`h3`)
    const contacts = document.getElementsByTagName(`ul`)

    contactSection.removeChild(Titles[Titles.length-1])
    contactSection.removeChild(contacts[contacts.length -1])
}