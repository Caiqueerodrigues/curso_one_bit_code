export const CATEGORIES = [
    'Jogos',
    'Livros',
    'Brinquedos',
    'Acessórios'
]

export default class StockItem {
    constructor({ name, description, quantity, price, category }) {
        this.id = Math.floor(Math.random() * 100)
        this.name = name,
        this.description = description,
        this.quantity = Number(quantity),
        this.price = Number(price),
        this.category = category
        this.createdAt = new Date().toLocaleDateString(),
        this.updateAt = new Date().toLocaleDateString()
        this.#validate()
    }

    #validate() {
        //faz as verificações
        //if() {

        //} else {
        //  throw new Error('Dados inválidos')
        //}
    }
}