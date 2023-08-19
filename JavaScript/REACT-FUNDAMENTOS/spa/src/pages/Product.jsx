import { Link, useParams } from "react-router-dom";
import products from '../dataBase.json'

export default function Product () {
    const {productId} = useParams()

    const product = products.find(p => p.id === Number(productId))
    if(!product) {
        return (<h2>Ooops.... Esse produto nao foi encontado =( </h2>)
    }

    return (
        <section>
            <Link to={'/Products'}>
                <button>
                    Voltar
                </button>
            </Link>
            <h2>{ product.name }</h2>
            <p>{ product.description }</p>
            <p>R$ { product.price }</p>
            <button>Comprar</button>
        </section>
    )
}