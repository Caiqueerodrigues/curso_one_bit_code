import './style/home.css'

export default function Home () {
    return (
        <>
            <h1>Dashboard</h1>
            <div className='row'>
                <div className="visor">
                    <p>
                        Diversidade de Items
                    </p>
                    <p className='quantity'>
                        QUANTIDADE
                    </p>
                </div>
                <div className="visor">
                    <p>
                        Quantitade Total
                    </p>
                    <p className='quantity'>
                        QUANTIDADE P
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