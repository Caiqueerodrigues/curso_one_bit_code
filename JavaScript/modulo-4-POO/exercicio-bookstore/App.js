const DataBase = require("./DataBase")
const Author = require("./entities/Authoir")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App {
    static #dataBase = new DataBase()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#dataBase.saveUser(user)
    }
    getUsers() {
       return App.#dataBase.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#dataBase.saveAuthor(author)
    }
    getAuthors() {
        return App.#dataBase.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#dataBase.saveBook(book)
    }
    addBook(bookName, quantity) {
        App.#dataBase.addBookInStock(bookName, quantity)
    }
    getBooks() {
        return App.#dataBase.find('books')
    }

    createPoster(name, description, height, width, price, inStock) {
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#dataBase.savePoster(poster)
    }
    addBook(posterName, quantity) {
        App.#dataBase.addPostersInStock(posterName, quantity)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#dataBase.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if(product instanceof Book) {
                App.#dataBase.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#dataBase.removePostersFromStock(product.name, quantity)
            }
        });
    }

    getOrder() {
        return App.#dataBase.find('orders')
    }

    showDataBase() {
        App.#dataBase.showStorage()
    }
}