const Post = require("./Post")

class Author {
    constructor(nome) {
        this.nome = nome
        this.posts = []
    }

    whitePost(title, body) {
        const post = new Post(title, body, this.nome)
        this.posts.push(post)
        return post
    }
}

module.exports = Author