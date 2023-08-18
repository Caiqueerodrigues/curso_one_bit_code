import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function UserInfo () {
    const user = useContext(UserContext)
    return (
        <div>
            <hr />
            <h2>Informações do Usuário</h2>
            <p>Nome: { user.nome }</p>
            <p>Email: { user.email }</p>
            <hr />
        </div>
    )
}