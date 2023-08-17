import { useEffect, useState } from "react"

function Counter () {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("Montando o componente")
    return () => {
      console.log("Fazendo a limpeza")
      console.log("componente foi limpo")
    }
  }, []) //dentro desse array é que esta sendo observado, se nao colocar observará TUDO, se vazio, OBSERVA NADA
  return (
    <button onClick={ () => setCounter( counter => counter + 1)}>
      Contador: { counter }
    </button>
  )
}

export default function App () {
  const [show, setShow] = useState(false)
  
  return (
    <>
      <h1>Conhecendo o useEffect()</h1>
      <div>
        <label htmlFor="show"></label>
        <input 
          id="show"
          type="checkbox" 
          value={show} 
          onChange={() => setShow(state => !state)}
        />
      </div>
      {show ?
        <Counter />
      : null
      }
      <hr />
    </>
  )
}