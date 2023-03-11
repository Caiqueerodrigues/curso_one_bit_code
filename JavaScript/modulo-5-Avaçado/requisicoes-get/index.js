function createCard (pais) {
    const card = document.createElement(`div`)
        card.classList.add(`country`)
    
    const countryName = pais.name.common
    const name = document.createElement(`h2`)
        name.textContent = countryName

    const flag = document.createElement(`img`)
        flag.src = pais.flags.svg
        flag.alt = `Bandeira ${name}`

    card.append(name, flag)
    document.getElementById(`countries`).append(card)
}

async function getCountries () {
    const resposta = await fetch('https://restcountries.com/v3.1/all')
    const paises = await resposta.json()
    
    paises.forEach(createCard)
}

getCountries()