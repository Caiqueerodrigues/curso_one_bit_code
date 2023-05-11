module.exports = class DataBase {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookByName (bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }
    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if(!bookExists) {
            this.#storage.books.push(book)
        }
    }
    addBookInStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addInStock(quantity)
    }
    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    //posters
    findPosterByName (posterName) {
        return this.#storage.posters.find(p => p.name === posterName)
    }
    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name)
        if(!posterExists) {
            this.#storage.posters.push(poster)
        }
    }
    addPostersInStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.addInStock(quantity)
    }
    removePostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    //users
    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists) {
            this.#storage.users.push(user)
        }
    }

    //order 
    saveOrder(order) {
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}