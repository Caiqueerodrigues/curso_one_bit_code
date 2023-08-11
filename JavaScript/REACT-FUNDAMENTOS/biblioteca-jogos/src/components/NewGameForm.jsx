import { useState } from "react"
import TextInput from "./textInput"

export default function NewGameForm ({addGames}) {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    const handSubmit = (ev) => {
        ev.preventDefault()
        addGames({title,cover})
        setCover('')
        setTitle('')
    }
    return (
        <>
            <form 
                onSubmit={handSubmit}
            >
                <TextInput
                    id="title"
                    label="Título"
                    value={title} 
                    setValue={setTitle}
                />
                <TextInput 
                    id="cover"
                    label="Capa"
                    value={cover} 
                    setValue={setCover}
                />
                <input 
                    type="submit" 
                    value="Adicionar a Biblioteca" 
                />
            </form>
        </>
    )
}