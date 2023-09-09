import { createContext, useState } from "react";

export const StockContext = createContext([])

//children aqui reprenta uma PROP ou PARAMS
export function StockContextProvider({ children }) {
const [items, setItems] = useState(() => {

    //buscando dados no localstorage
    const storedItems = localStorage.getItem('react-stock')
    if(!storedItems) return []

    //convertendo de string pra obj
    const items = JSON.parse(storedItems)
    // items.forEach(item => {
    //     item.createdAt = new Date(item.createdAt)
    //     item.updateAt = new Date(item.updateAt)
    // });
    return items
})

const AddItem = (item) => {
    setItems(state => {
        const updateItems = [...state, item]
        localStorage.setItem('react-stock', JSON.stringify(updateItems))
        return updateItems
    })
}

const DeleteItem = (itemId) => {
    setItems(state => {
        const updateItems = state.filter(item => item.id !== itemId) //cria um array novo sem o item da verificação
        localStorage.setItem('react-stock', JSON.stringify(updateItems))
        return updateItems
    })
}

const GetItem = (itemId) => {
    return items.find(item => item.id === +itemId) //o + antes do item é a mesma coisa que Number(...)
}
const updateItem = (itemId, newAttributes) => {
    setItems(currentState => {
        const itemIndex = currentState.findIndex(item => item.id === +itemId)
        const updateItems = [...currentState]
        Object.assign(updateItem[itemIndex], newAttributes, {updatedAt: new Date().toLocaleDateString()})
        localStorage.setItem('react-stock', JSON.stringify(updateItems))
        return updateItems
    })
}
const stock = {
    itemsLength: Number(items.length),
    items,
    AddItem,
    DeleteItem,
    GetItem,
    updateItem,
}
    return(
        <StockContext.Provider value={stock}>
            { children } 
        </StockContext.Provider>
    )
}