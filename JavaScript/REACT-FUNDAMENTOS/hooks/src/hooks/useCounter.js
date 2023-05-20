import { useState } from 'react'

function GetInitial() {
    let num = Math.random()*100
    let numInt = parseInt(num)
    alert()
    return  numInt
}

export default function useCounter() {
    const [count, setCount] = useState(() => GetInitial())
    // const [count, setCount] = useState(GetInitial)
    //qualquer um dos dois evita de ficar chamando a mesma funcao varias vezes, nao dará o alert

    const increment = () => {
        setCount((count) => count +1)
        //setCount(count + 2)
        setCount((count) => count +1)
    }
    return {count, increment}
}