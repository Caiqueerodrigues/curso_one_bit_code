const Comments = require("./comments")

class Post { 
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }
    addComment(userName, content) {
        this.comments.push(new Comments(userName, content))
    }
}

module.exports = Post