import { useState } from 'react'

export default function useCounter() {
    const [count, setCount] = useState(10)

    const increment = () => {
        setCount(count +1)
    }
    return {count, increment}
}