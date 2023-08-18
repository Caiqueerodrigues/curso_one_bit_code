import Container from "./components/Container"
import Header from "./components/Header"
import UserContext from "./contexts/UserContext"

export default function App() {
  const user ={
    nome: "Caíque",
    email: "example@example.co,"
  }

  return (
    <>
      <div style={{border: "2px solid #f00", padding: '10px'}}>
        <UserContext.Provider value={user}>
          <Header />
          <h1>Usando Contexto</h1>
          <p>Aqui todos os filhos teriam acesso ao contexto</p>
          <Container />
        </UserContext.Provider >
      </div>
      <p>Aqui NÃO teriam acesso ao contexto</p>
    </>
  )
}