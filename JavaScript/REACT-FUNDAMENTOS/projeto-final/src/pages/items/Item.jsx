import DelleteButton from "../../components/DelleteButton"
import useStock from "../../hooks/useStock"
import  '../style/home.css'
import { Link, useParams } from 'react-router-dom'

export default function Item () {
    const { GetItem } = useStock()
    const { id } = useParams()
    const item = GetItem(id)
    return (
        <div className="item">
            <h2>{ item.name }</h2>
            <Link to={`/items/${item.id}/update`} className="button is-small">Atualizar</Link>
            {/* <DelleteButton itemId={item.id} itemName={item.name} /> */}
            <DelleteButton 
                itemId={item.id} 
                itemName={item.name} 
            />
            <div className="row">
                <span className="cont">Categoria: {item.category}</span>
                <span className="cont">Quantidade em estoque: {item.quantity}</span>
                <span className="cont">Preço: R$ {item.price}</span>
            </div>
            <p className="desc">{item.description}</p>
            <div className="row">
                <p className="info">Cadastrado em: {item.createdAt}</p><br />
                <p className="info">Atualizado em: {item.updatedAt}</p>
            </div>
        </div>
    )
}