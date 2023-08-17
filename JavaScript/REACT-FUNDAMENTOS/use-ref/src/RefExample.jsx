import { useRef } from "react"

export default function RefExample () {
    const inputRef = useRef(null)

    const randomClick = () => {
        inputRef.current.focus();
        inputRef.current.style.borderRadius = '20px';
        inputRef.current.style.borderColor = "#f00";
    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={randomClick}>Focar no Input</button>
        </div>
    )
}