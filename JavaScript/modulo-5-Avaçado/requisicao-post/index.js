async function getArticle() {
    const result = await fetch(`http://localhost:3000/articles`)
    const article = await result.json()
    article.forEach(create);
    console.log(article)
}

function create(article) {
    const div = document.createElement(`div`)
        div.classList.add(`div`)
        div.id = article.id
    
    const title = document.createElement(`h3`)
        title.textContent = article.title

    const p = document.createElement(`p`)
        p.textContent = article.content

    const  autor = document.createElement(`h6`)
        autor.textContent = article.autor

    div.append(title, p, autor)
    document.getElementById(`articles`).append(div)
}

getArticle()