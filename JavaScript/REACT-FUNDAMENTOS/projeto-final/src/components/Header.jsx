import './styles/layout.css'

export default function Header () {
    return (
        <>
            <div className='row'>
                <div>
                    <h2>
                        Projeto Final
                    </h2>
                    <p>
                        Controle de estoque
                    </p>
                </div>
                <div>
                    <button>
                        Inicío
                    </button>
                    <button>
                        Items
                    </button>
                </div>
            </div>
        </>
    )
}