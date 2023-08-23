import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import './styles/table.css'

export default function ItemsTable() {
    //useStock usando HOOK para deixar o codigo mais limpo
    const { items } = useStock();
    //sem HOOK
    //consts stock =  useContext(dtockContext)
    //pra usar os dados precisaria ser {stock.items}

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity} unid.</td>
                        <td>{item.category}</td>
                        <td>
                        <Link to={`/items/${item.id}`} className="button is-primary is-small">
                            Ver
                        </Link>
                        <Link to={`/items/${item.id}/update`} className="button is-small">
                            Atualizar
                        </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}