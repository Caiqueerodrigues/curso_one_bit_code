import useStock from '../hooks/useStock'
import './style/home.css'

export default function Home () {
    const { items, itemsLength } = useStock()
    let infos = {
        totalQuantity: 0,
        itemsAcabando: 0,
        itemsRecente: 0
    }

    items.forEach(item => {
        infos.totalQuantity += item.quantity
        if(item.quantity < 10) {
            infos.itemsAcabando ++
        }
    });
    return (
        <>
            <h1>Dashboard</h1>
            <div className='row'>
                <div className="visor">
                    <p>
                        Diversidade de Items
                    </p>
                    <p className='quantity'>
                        { itemsLength }
                    </p>
                </div>
                <div className="visor">
                    <p>
                        Quantitade Total
                    </p>
                    <p className='quantity'>
                        { infos.totalQuantity }
                    </p>
                </div>
                <div className="visor">
                    <p>
                        Itens Recentes
                    </p>
                    <p className='quantity'>
                        { infos.itemsRecente }
                    </p>
                </div>
                <div className="visor">
                    <p>
                        Items Acabando
                    </p>
                    <p className='quantity'>
                        { infos.itemsAcabando }
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