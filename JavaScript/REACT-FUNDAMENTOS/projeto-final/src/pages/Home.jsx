import { useLoaderData } from 'react-router-dom'
import './style/home.css'

export default function Home () {
    let produtos = useLoaderData()
    return (
        <>
            <h1>Dashboard</h1>
            <div className='row'>
                <div className="visor">
                    <p>
                        Diversidade de Items
                    </p>
                    <p className='quantity'>
                        2
                    </p>
                </div>
                <div className="visor">
                    <p>
                        Quantitade Total
                    </p>
                    <p className='quantity'>
                        {produtos}
                    </p>
                </div>
                <div className="visor">
                    <p>
                        Itens Recentes
                    </p>
                    <p className='quantity'>
                        produtos
                    </p>
                </div>
                <div className="visor">
                    <p>
                        Itens Acabando
                    </p>
                    <p className='quantity'>
                        produtos
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="visor big">
                    <span>
                        Items Recentes
                    </span>
                    <span>
                        Ações
                    </span>
                </div>
                <div className="visor big">
                    <span>
                        Items Acabando
                    </span>
                    <span>
                        Qtd.
                    </span>
                    <span>
                        Ações
                    </span>
                </div>
            </div>
        </>
    )
}