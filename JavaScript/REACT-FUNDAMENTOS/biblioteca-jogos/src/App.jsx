import { useState } from "react"
export default function App() {
  const [games, setGames] = useState(() => {
    const storeGames = localStorage.getItem('lib-game')
    if(!storeGames) return []
    const gameArray = JSON.parse(storeGames)
    return gameArray
  })
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

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
    })
    return newState
  }

  const handSubmit = (ev) => {
    ev.preventDefault()
    addGames({title,cover})
    setCover('')
    setTitle('')
  }

  return (
    <div 
      id="app"
    >
      <h1>Biblioteca de Jogos</h1>
      <form 
        onSubmit={handSubmit}
      >
        <div>
          <label 
            htmlFor="title"
          >
            Titulo: 
          </label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label 
            htmlFor="cover"
          >
            Capa: 
          </label>
          <input 
            type="text" 
            name="cover" 
            id="cover" 
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <input 
          type="submit" 
          value="Adicionar a Biblioteca" 
        />
      </form>
        <div 
          className="games"
        >
          {games.map((jogo) => (
            <div
              key={jogo.id}
            >
              <img 
                src={jogo.cover}
                style={{width:'200px', height:'300px', objectFit:'cover'}} 
              />
              <div>
                <h2>{jogo.title}</h2>
                <button
                  onClick={() => removeGame(jogo.id)}
                >
                  Remover Jogo
                  </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}