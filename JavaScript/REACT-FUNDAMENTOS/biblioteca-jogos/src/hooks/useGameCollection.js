import { useState } from "react"

export default function useGameCollection () {
    const [games, setGames] = useState(() => {
        const storeGames = localStorage.getItem('lib-game')
        if(!storeGames) return []
        const gameArray = JSON.parse(storeGames)
        return gameArray
    })

    const addGames = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, cover}
        setGames(state => {
            const newState = [...state, game]
            localStorage.setItem('lib-game', JSON.stringify(newState))
            return newState
        })
        {/*state = valor anterior da varivel, ele pega os items anteriores e acrescenta os demais ao fim da lista*/}
    }

    const removeGame = (id) => {
        setGames(state => {  
            const newState = state.filter(game => game.id !== id)
            localStorage.setItem('lib-game', JSON.stringify(newState))
            return newState
        })
    }
    return {games, addGames, removeGame}  
}