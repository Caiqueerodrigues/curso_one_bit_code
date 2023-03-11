async function getArticle() {
    const result = await fetch(`http://localhost:3000/articles`)
    const article = await result.json()
    article.forEach(create);
}

function create() {
    const div = document.createElement(`div`)
        div.classList.add(`div`)
    
    const title = document.createElement(`h3`).textContent = article.title

    const p = document.createElement(`p`).textContent = article.content

    const autor = document.createElement(`h6`).textContent = article.autor

    div.append(title, p, autor)
    document.getElementById(`articles`).append(div)
}

getArticle()