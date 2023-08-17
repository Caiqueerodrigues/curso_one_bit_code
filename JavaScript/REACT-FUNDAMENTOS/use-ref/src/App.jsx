import { useRef, useState } from "react";
import RefExample from "./refExample";

export default function App () {
  let variable = 0;
  const [state, setState] = useState(0)
  const ref = useRef(0)

  function exibir() {
    alert(`
      varible = ${variable} \n
      Ref = ${ref.current} \n
      State = ${state}
    `)
  }
  return (
    <div>
      <h1>Exemplo de UseRef com o DOOM</h1>
      <RefExample />
      <hr />
      <h1>Conhecendo o UseRef()</h1>
      <hr />
      <p>
        Variable: { variable }
      </p>
      <p>
        Ref: { ref.current }
      </p>
      <p>
        State: { state }
      </p>
      <hr />
      <button 
        onClick={ () => variable++}
      >
        Variable++
      </button>
      <button
        onClick={() => ref.current++}
      >
        Ref++
      </button>
      <button
        onClick={() => setState(state => state +1 )}
      >
        State++
      </button>
      <hr />
      <button onClick={exibir}>Exibir valores</button>
    </div>
  )
}