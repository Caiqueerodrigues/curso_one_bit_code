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
        const updateItems = [item, ...state]
        localStorage.setItem('react-stock', JSON.stringify(updateItems))
        return updateItems
    })
}

const stock = {
    items,
    AddItem
}
    return(
        <StockContext.Provider value={stock}>
            { children } 
        </StockContext.Provider>
    )
}