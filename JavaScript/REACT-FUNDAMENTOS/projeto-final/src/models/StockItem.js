import useStock from "../hooks/useStock"

export const CATEGORIES = [
    'Jogos',
    'Livros',
    'Brinquedos',
    'Acessórios'
]


export default class StockItem {
    constructor({ name, description, quantity, price, category }, itemsLength) {
        this.id = itemsLength,
        this.name = name,
        this.description = description,
        this.quantity = Number(quantity),
        this.price = Number(price),
        this.category = category
        this.createdAt = new Date().toLocaleDateString(),
        this.updatedAt = new Date().toLocaleDateString(),
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