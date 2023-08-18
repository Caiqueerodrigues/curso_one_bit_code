import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Header() {
    const user = useContext(UserContext)
    return (
        <>
            <h3>Bem Vindo, { user.nome }</h3>
            <hr />
        </>
    )
}