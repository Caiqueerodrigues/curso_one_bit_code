import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"
export default function App() {
  const { games, addGames, removeGame } = useGameCollection()
  return (
    <div 
        id="app"
    >
        <h1>Biblioteca de Jogos</h1>
        <NewGameForm 
        addGames={addGames}
        />
        <div 
            className="games"
        >
            {games.length > 0 ? games.map((jogo) => (
              <Game 
                key={jogo.id}
                cover={jogo.cover}
                title={jogo.title}
                onRemove={() => removeGame(jogo.id)}
              />
            ))
          : (
            <h2>Nenhum Jogo cadastrado</h2>
          )}
        </div>
    </div>
  )
}